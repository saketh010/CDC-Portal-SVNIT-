// components/Auth/Logout.js
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
