// components/CollegeInfo.js
import React, { useState } from 'react';

const CollegeInfo = () => {
    const [batch, setBatch] = useState('');
    const [resumes, setResumes] = useState([]);

    const handleResumeUpload = () => {
        const link = prompt("Enter the Drive Link for your resume:");
        const name = prompt("Enter a name for this resume:");
        setResumes([...resumes, { name, link }]);
    };

    const removeResume = (index) => {
        setResumes(resumes.filter((_, i) => i !== index));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">College Information</h2>
            <input 
                type="text" 
                value={batch} 
                onChange={(e) => setBatch(e.target.value)} 
                placeholder="Batch of Passing" 
                className="input input-bordered w-full mb-4"
            />

            <div>
                <button onClick={handleResumeUpload} className="btn btn-primary mb-4">Upload Resume</button>
                <ul>
                    {resumes.map((resume, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <a href={resume.link} target="_blank" rel="noopener noreferrer" className="link link-primary">{resume.name}</a>
                            <button onClick={() => removeResume(index)} className="btn btn-error btn-sm ml-4">Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CollegeInfo;
