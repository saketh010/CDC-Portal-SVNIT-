// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function HomePage() {
//     // temporarily removed authentication
//     // localhost:3000/home to access the home page

//     // const router = useRouter();

//     // useEffect(() => {
//     //     const checkAuth = async () => {
//     //         const res = await fetch('/api/auth/verify', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //         });

//     //         if (res.status !== 200) {
//     //             router.push('/login');
//     //         }
//     //     };

//     //     checkAuth();
//     // }, [router]);

//     return (
//         <div>
//             <h1 className="text-red-500">Test</h1>
//             <h1>Home Page</h1>
//             <p>Welcome to the home page after successful login!</p>
//             <div className="card card-compact bg-base-100 w-96 shadow-xl">
//                 <figure>
//                     <img
//                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                     alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">Shoes!</h2>
//                     <p>If a dog chews shoes whose shoes does he choose?</p>
//                     <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useEffect } from 'react';

export default function HomePage() {
    // Sample data for multiple cards
    const cards = [
        {
            id: 1,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 1,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 1,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 4,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 5,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 6,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
    ];

    return (
        <div>
            {/* Map over the cards array to return multiple card components */}
            <div className="flex py-10 flex-wrap justify-center gap-4">
                {cards.map((card) => (
                    <div key={card.id} className="card card-compact bg-base-100 w-80 shadow-md">
                        <figure>
                            <img
                                src={card.imageUrl}
                                alt={card.title}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-important">Apply</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
