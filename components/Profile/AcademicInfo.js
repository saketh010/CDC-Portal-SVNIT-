// components/AcademicInfo.js
import React, { useState } from 'react';

const AcademicInfo = () => {
    const [academicData, setAcademicData] = useState({
        tenthPercent: '',
        twelfthPercent: '',
        tenthBoard: '',
        twelfthBoard: '',
        degree: '',
        department: '',
        cgpa: Array(8).fill(''),  // Holds CGPA for all 8 semesters
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAcademicData({ ...academicData, [name]: value });
    };

    const handleCGPAChange = (index, value) => {
        const updatedCGPA = [...academicData.cgpa];
        updatedCGPA[index] = value;
        setAcademicData({ ...academicData, cgpa: updatedCGPA });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Academic Information</h2>

            <input 
                type="text" 
                name="tenthPercent" 
                value={academicData.tenthPercent} 
                onChange={handleInputChange} 
                placeholder="10th Percentage" 
                className="input input-bordered w-full mb-4"
            />
            
            <input 
                type="text" 
                name="twelfthPercent" 
                value={academicData.twelfthPercent} 
                onChange={handleInputChange} 
                placeholder="12th Percentage" 
                className="input input-bordered w-full mb-4"
            />

            <input 
                type="text" 
                name="tenthBoard" 
                value={academicData.tenthBoard} 
                onChange={handleInputChange} 
                placeholder="10th Board" 
                className="input input-bordered w-full mb-4"
            />

            <input 
                type="text" 
                name="twelfthBoard" 
                value={academicData.twelfthBoard} 
                onChange={handleInputChange} 
                placeholder="12th Board" 
                className="input input-bordered w-full mb-4"
            />

            <input 
                type="text" 
                name="degree" 
                value={academicData.degree} 
                onChange={handleInputChange} 
                placeholder="Current Degree" 
                className="input input-bordered w-full mb-4"
            />

            <input 
                type="text" 
                name="department" 
                value={academicData.department} 
                onChange={handleInputChange} 
                placeholder="Department" 
                className="input input-bordered w-full mb-4"
            />

            <h3 className="text-lg font-bold mt-4 mb-2">CGPA (Enter for each semester)</h3>
            {academicData.cgpa.map((value, index) => (
                <div key={index} className="mb-2">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleCGPAChange(index, e.target.value)}
                        placeholder={`Semester ${index + 1} CGPA`}
                        className="input input-bordered w-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default AcademicInfo;
