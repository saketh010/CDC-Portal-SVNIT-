// pages/profile.js
import { useEffect, useState } from 'react';

export default () => {
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {userProfile ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          {/* Display other profile information as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};
