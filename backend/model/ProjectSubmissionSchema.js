const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSubmissionSchema = new Schema({
  // Reference to the project being submitted
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project reference is required']
  },
  
  // Student who submitted the project
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Student reference is required']
  },
  
  // Submission details (exactly matching your UI form fields)
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  
  githubLink: {
    type: String,
    required: [true, 'GitHub link is required'],
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?(www\.)?github\.com\/.+/i.test(v);
      },
      message: props => `${props.value} is not a valid GitHub URL!`
    },
    trim: true
  },
  
  liveLink: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    },
    trim: true
  },
  
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  
  // Submission metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  
  // Status tracking (simplified from your UI)
  status: {
    type: String,
    enum: ['submitted', 'under_review'],
    default: 'submitted'
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Indexes for better query performance
projectSubmissionSchema.index({ project: 1 });
projectSubmissionSchema.index({ student: 1 });
projectSubmissionSchema.index({ submittedAt: -1 });

// Pre-save hook to ensure title matches project title
projectSubmissionSchema.pre('save', async function(next) {
  if (this.isModified('title')) return next();
  
  try {
    const project = await mongoose.model('Project').findById(this.project);
    if (project) {
      this.title = project.title;
    }
    next();
  } catch (err) {
    next(err);
  }
});

const ProjectSubmission = mongoose.model('ProjectSubmission', projectSubmissionSchema);

module.exports = ProjectSubmission;