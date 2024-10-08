// pages/api/jobs.js
import connectToDatabase from '../../../lib/mongodb'; // Adjust path if necessary
import Job from '../../../models/Job'; // Ensure this path is correct

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === 'GET') {
        try {
            // Fetch jobs with status "Open"
            const jobs = await Job.find({ status: 'Open' });
            res.status(200).json(jobs);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
