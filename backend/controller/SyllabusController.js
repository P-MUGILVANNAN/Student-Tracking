const Syllabus = require('../model/Syllabus');
const Course = require('../model/CourseSchema');
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
dotenv.config();

// AWS S3 Configuration
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

// Multer Storage (Memory)
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload file to S3 and return URL
const uploadToS3 = async (file) => {
    if (!file) {
        throw new Error("File is required");
    }

    const fileName = `syllabus/${Date.now()}-${file.originalname}`;

    const uploadParams = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    // Upload to S3
    await s3.send(new PutObjectCommand(uploadParams));

    // Return the public URL of the uploaded file
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
};

/**
 * Add new syllabus with file upload to S3
 */
exports.addSyllabus = async (req, res) => {
    try {
        const { courseId } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Validate file type
        const fileTypes = ['pdf', 'doc', 'docx'];
        const fileExt = file.originalname.split('.').pop().toLowerCase();
        if (!fileTypes.includes(fileExt)) {
            return res.status(400).json({ message: 'Only PDF, DOC, and DOCX files are allowed' });
        }

        // Check if course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Upload file to S3
        const fileUrl = await uploadToS3(file);

        // Create new syllabus record
        const newSyllabus = new Syllabus({
            courseId,
            filename: file.originalname,
            fileUrl,
            fileType: fileExt,
            fileSize: file.size,
        });

        await newSyllabus.save();

        // Update course with syllabus reference
        course.syllabus = newSyllabus._id;
        await course.save();

        res.status(201).json({
            message: 'Syllabus uploaded successfully',
            syllabus: newSyllabus
        });

    } catch (err) {
        console.error("Error uploading syllabus:", err.message);
        res.status(500).json({
            message: 'Error uploading syllabus',
            error: err.message
        });
    }
};

/**
 * Get all syllabi (for admin)
 */
exports.getAllSyllabi = async (req, res) => {
    try {
        const syllabi = await Syllabus.find().populate('courseId', 'title code');
        res.status(200).json(syllabi);
    } catch (err) {
        console.error("Error fetching syllabi:", err.message);
        res.status(500).json({
            message: 'Error fetching syllabi',
            error: err.message
        });
    }
};

/**
 * Get syllabus by course ID
 */
exports.getSyllabusByCourse = async (req, res) => {
    try {
        const syllabus = await Syllabus.findOne({ courseId: req.params.courseId })
            .populate('courseId', 'title code')

        if (!syllabus) {
            return res.status(404).json({ message: 'Syllabus not found for this course' });
        }

        res.status(200).json(syllabus);
    } catch (err) {
        console.error("Error fetching syllabus:", err.message);
        res.status(500).json({
            message: 'Error fetching syllabus',
            error: err.message
        });
    }
};

/**
 * Delete syllabus from S3 and DB
 */
exports.deleteSyllabus = async (req, res) => {
    try {
        // 1. Find the syllabus document
        const syllabus = await Syllabus.findById(req.params.id);
        
        if (!syllabus) {
            return res.status(404).json({ message: 'Syllabus not found' });
        }

        // 2. Extract the S3 key from the file URL
        const fileUrl = syllabus.fileUrl;
        const urlParts = fileUrl.split('/');
        const key = urlParts.slice(3).join('/'); // Remove the https://bucket.s3.region.amazonaws.com/ part

        // 3. Delete file from S3
        const deleteParams = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key
        };

        await s3.send(new DeleteObjectCommand(deleteParams));

        // 4. Remove syllabus reference from course
        await Course.findByIdAndUpdate(
            syllabus.courseId,
            { $unset: { syllabus: "" } },
            { new: true }
        );

        // 5. Delete syllabus record from database
        await Syllabus.findByIdAndDelete(req.params.id);

        // 6. Return success response
        res.status(200).json({ 
            success: true,
            message: 'Syllabus deleted successfully' 
        });

    } catch (err) {
        console.error("Error deleting syllabus:", err);
        res.status(500).json({
            success: false,
            message: 'Failed to delete syllabus',
            error: err.message
        });
    }
};

// Export the multer upload middleware
exports.upload = upload.single('syllabus');