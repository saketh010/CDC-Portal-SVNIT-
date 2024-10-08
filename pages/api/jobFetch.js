// pages/api/jobs.js
import connectToDatabase from '../../lib/mongodb.js';
import Job from '../../models/Jobs.js';

export default async function handler(req, res) {
    await connectToDatabase();

    switch (req.method) {
        case 'GET':
            try {
                const jobs = await Job.find(); // Fetch all jobs from the database
                res.status(200).json(jobs); // Return jobs as JSON
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch jobs' });
            }
            break;


        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
