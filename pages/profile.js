// pages/profile.js
import { useState, useEffect } from 'react';

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/auth/profile');
        const data = await res.json();
        if (res.ok && data.success) {
          setUsers(data.data);
        } else {
          setError(data.message || 'Error fetching users');
        }
      } catch (err) {
        setError('Error fetching users: ' + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!users.length) return <p>No users found.</p>;

  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Username:</strong> {user.username}<br />
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phoneNumber}<br />
            <strong>Department:</strong> {user.department}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
