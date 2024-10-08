import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


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
            id: 2,
            title: 'Shoes!',
            description: 'If a dog chews shoes whose shoes does he choose?',
            imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        },
        {
            id: 3,
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
            <div className="flex justify-center items-center py-5">
                <div className="join">
                    <input className="join-item btn" type="radio" name="options" aria-label="Open" />
                    <input className="join-item btn" type="radio" name="options" aria-label="Closed Jobs" />
                    <input className="join-item btn" type="radio" name="options" aria-label="All Jobs" />
                </div>
            </div>
            <div className="flex py-1 flex-wrap justify-center gap-4">
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

// //when mongodb active use below
// // pages/index.js

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function HomePage() {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const res = await fetch('/api/jobs');
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch jobs');
//                 }
//                 const data = await res.json();
//                 setJobs(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobs();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <div className="flex py-10 flex-wrap justify-center gap-4">
//                 {jobs.map((job) => (
//                     <div key={job._id} className="card card-compact bg-base-100 w-80 shadow-md">
//                         <figure>
//                             <img src={job.imageUrl || 'default-image-url.jpg'} alt={job.jobTitle} />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">{job.jobTitle}</h2>
//                             <p>{job.jobDescription.shortDescription}</p>
//                             <div className="card-actions justify-end">
//                                 <Link href={`/job/${job._id}`}>
//                                     <button className="btn btn-important" onClick={() => router.push(`/job/${card._id}`)}>
//                                     Apply
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
