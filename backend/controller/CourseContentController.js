const CourseContent = require('../model/CourseContentSchema');
const path = require('path');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
dotenv.config();

// ✅ AWS S3 Configuration
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// ✅ Multer Storage (Memory)
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ Upload file to S3 and return URL
const uploadToS3 = async (file) => {
  if (!file) {
    throw new Error("File is required");
  }

  const fileName = `course-content/${Date.now()}-${file.originalname}`;

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
 * ✅ Upload course content (PDF, PPT, etc.) to S3 and save to DB
 */
exports.uploadContent = async (req, res) => {
  const { courseId, title } = req.body; // Removed day from here
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    // Upload file to S3 and get the URL
    const fileUrl = await uploadToS3(file);

    // Create a new CourseContent document with the file URL from S3
    const newContent = new CourseContent({
      courseId,
      title,
      fileUrl, // Use the S3 file URL
      fileType: path.extname(file.originalname).substring(1), // Extract file extension (e.g., pdf, pptx)
    });

    // Save new content to DB
    await newContent.save();

    res.status(201).json({
      message: 'Content uploaded successfully',
      content: newContent,
    });
  } catch (err) {
    console.error("Error uploading content:", err.message);
    res.status(500).json({
      message: 'Server error while uploading content',
      error: err.message,
    });
  }
};

/**
 * ✅ Get all course content by courseId
 */
exports.getCourseContentByCourseId = async (req, res) => {
  const { courseId } = req.params;

  try {
    // Fetch content for the given courseId without grouping by day
    const contents = await CourseContent.find({ courseId });

    // Return all content directly
    res.json(contents);
  } catch (err) {
    console.error("Error fetching course content:", err.message);
    res.status(500).json({
      message: 'Failed to fetch course content',
      error: err.message,
    });
  }
};
