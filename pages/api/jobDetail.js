// pages/api/jobs/[id].js
import connectToDatabase from '../../../../lib/mongodb'; // Adjust path if necessary
import Job from '../../../../models/Jobs.js';

export default async function handler(req, res) {
    const {query: { id }, method,} = req;

    await connectToDatabase();

    if (method === 'GET') {
        try {
            const job = await Job.findById(id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.status(200).json(job);
        } catch (error) {
            console.error('Error fetching job:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
