const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const progressRoutes = require('./routes/ProgressRoutes');
const userRoutes = require('./routes/UserRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const courseRoutes = require('./routes/CourseRoutes');
const assessmentRoutes = require('./routes/AssessmentRoutes');
const syllabusRoutes = require('./routes/SyllabusRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const projectSubmissionRoutes = require('./routes/ProjectSubmissionRoutes');
const attendanceRoutes = require('./routes/AttendanceRoutes');


app.use('/uploads', express.static('uploads'));

// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

const allowedOrigins = [
    "https://trainer-snowy.vercel.app",  // frontend 1 (e.g., user)
    "https://student-blush.vercel.app",                 // frontend 2 (e.g., admin)
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Express app is running");
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error' });
});

app.use('/api/progress', progressRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin', require('./routes/CourseContentRoutes'));
app.use('/api/courses', courseRoutes);
app.use('/api', assessmentRoutes);
app.use('/api/syllabus', syllabusRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/project-submissions', projectSubmissionRoutes);
app.use('/api/attendance', attendanceRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})