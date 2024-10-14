// // pages/profile.js
// import { useEffect, useState } from 'react';

// export default () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const username = localStorage.getItem('username');

//       const response = await fetch(`/api/auth/profile?username=${username}`);

//       if (response.ok) {
//         const data = await response.json();
//         setUserProfile(data.data);
//       } else {
//         const errorData = await response.json();
//         setErrorMessage(errorData.message);
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div>
//       {errorMessage && <p>{errorMessage}</p>}
//       {userProfile ? (
//         <div>
//           <h2>User Profile</h2>
//           <p>Username: {userProfile.username}</p>
//           <p>Email: {userProfile.email}</p>
//           {/* Display other profile information as needed */}
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };


// pages/Profile.js
import { useEffect, useState } from 'react';
import GeneralInfo from '../components/Profile/GeneralInfo';
import CollegeInfo from '../components/Profile/CollegeInfo';
import AcademicInfo from '../components/Profile/AcademicInfo';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
    // Initialize other fields as empty strings
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    gender: '',
    category: '',
    dateOfBirth: '',
    nationality: '',
    hometown: '',
    currentCity: '',
    batchOfPassing: '',
    degree: '',
    department: '',
    cgpa: Array(8).fill(''), // Placeholder for CGPA for all semesters
    tenthPercent: '',
    twelfthPercent: '',
    tenthBoard: '',
    twelfthBoard: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const fetchProfile = async () => {
      const username = localStorage.getItem('username');

      const response = await fetch(`/api/auth/profile?username=${username}`);

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data.data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="mb-2">Username: {userProfile.username}</p>
      <p className="mb-4">Email: {userProfile.email}</p>

      <div className="tabs">
        <button
          className={`tab tab-lifted ${activeTab === 'general' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          General Information
        </button>
        <button
          className={`tab tab-lifted ${activeTab === 'college' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('college')}
        >
          College Information
        </button>
        <button
          className={`tab tab-lifted ${activeTab === 'academic' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          Academic Information
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'general' && <GeneralInfo userProfile={userProfile} />}
        {activeTab === 'college' && <CollegeInfo userProfile={userProfile} />}
        {activeTab === 'academic' && <AcademicInfo userProfile={userProfile} />}
      </div>
    </div>
  );
};

export default Profile;
