// components/GeneralInfo.js
import React, { useState } from 'react';

const GeneralInfo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        email: '',
        gender: '',
        category: '',
        dob: '',
        nationality: '',
        hometown: '',
        currentCity: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">General Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange} 
                    placeholder="First Name" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="middleName" 
                    value={formData.middleName} 
                    onChange={handleInputChange} 
                    placeholder="Middle Name" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange} 
                    placeholder="Last Name" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="Phone" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="Email" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleInputChange} 
                    placeholder="Gender" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange} 
                    placeholder="Category" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="date" 
                    name="dob" 
                    value={formData.dob} 
                    onChange={handleInputChange} 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="nationality" 
                    value={formData.nationality} 
                    onChange={handleInputChange} 
                    placeholder="Nationality" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="hometown" 
                    value={formData.hometown} 
                    onChange={handleInputChange} 
                    placeholder="Hometown" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
                <input 
                    type="text" 
                    name="currentCity" 
                    value={formData.currentCity} 
                    onChange={handleInputChange} 
                    placeholder="Current City" 
                    className="input input-bordered border-gray-300 w-full focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
                />
            </form>
        </div>
    );
};

export default GeneralInfo;
