// models/Job.js
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please provide the company name'],
    trim: true,
  },
  employmentType: {
    type: String,
    enum: ['Intern', 'Full Time', 'Full Time + Intern'],
    required: [true, 'Please specify employment type'],
  },
  jobTitle: {
    type: String,
    required: [true, 'Please provide the job title'],
    trim: true,
  },
  jobDescription: {
    role: { type: String, required: true, trim: true },
    stipend: { type: String, trim: true },  // can be optional or N/A
    duration: { type: String, required: true,trim: true },
    location: { type: String, trim: true },
    dateOfJoining: { type: Date, required: true },
    natureOfRole: { type: String, trim: true },
    shortDescription: { type: String, required: true, trim: true },
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Open', 'Closed', 'Ongoing'],
    required: [true, 'Please specify the current status of the job'],
  },
  requiredCgpa: {
    type: Number,
    required: [true, 'Please specify the required CGPA'],
  },
  deadline: {
    type: Date,
    required: [true, 'Please specify the application deadline'],
  }
});

// Prevent recompiling model if it already exists
export default mongoose.models.Job || mongoose.model('Job', JobSchema);
