import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch('/api/auth/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status !== 200) {
                router.push('/login');
            }
        };

        checkAuth();
    }, [router]);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page after successful login!</p>
        </div>
    );
}
