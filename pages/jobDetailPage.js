// pages/job/[id].js
import { useEffect, useState } from 'react';
import connectToDatabase from '../../lib/mongodb';
import Job from '../../models/Jobs';
import { useRouter } from 'next/router';


export default function JobDetailPage() {
    const router = useRouter();
    const { id } = router.query; // Get the job ID from the URL
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            if (!id) return; // Wait until ID is available
            try {
                const res = await fetch(`/api/jobs/${id}`);
                if (!res.ok) throw new Error('Failed to fetch job');
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.error('Error fetching job:', error);
            }
        };

        fetchJob();
    }, [id]);

    if (!job) return <p>Loading...</p>; // Show loading state

    return (
        <div>
            <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Employment Type:</strong> {job.employmentType}</p>
            <p><strong>Job Role:</strong> {job.jobDescription.role}</p>
            <p><strong>Stipend:</strong> {job.jobDescription.stipend || 'N/A'}</p>
            <p><strong>Duration:</strong> {job.jobDescription.duration}</p>
            <p><strong>Location:</strong> {job.jobDescription.location}</p>
            <p><strong>Date of Joining:</strong> {new Date(job.jobDescription.dateOfJoining).toLocaleDateString()}</p>
            <p><strong>Nature of Role:</strong> {job.jobDescription.natureOfRole}</p>
            <p><strong>Short Description:</strong> {job.jobDescription.shortDescription}</p>
            <p><strong>Required CGPA:</strong> {job.requiredCgpa}</p>
            <p><strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}</p>
            <img src={job.imageUrl} alt={`${job.jobTitle} image`} className="my-4" />
            <button className="btn btn-primary">Apply</button> {/* Add apply button functionality here */}
        </div>
    );
}
