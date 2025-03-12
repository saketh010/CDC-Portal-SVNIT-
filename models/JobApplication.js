import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true,
  },
  usernames: {
    type: [String], // Array of strings to store usernames
    default: [],
  },
});

const JobApplication =
  mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema);

export default mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema);
