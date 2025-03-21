import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps({ req, res }) {
  // Check if the token exists in cookies
  const token = req.cookies.token;

  if (!token) {
    // If no token, redirect to login page
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // If authenticated, return page props
  return {
    props: {},
  };
}

export default function JobDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasApplied, setHasApplied] = useState(false); // To track if the user has applied

  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return; // Wait until ID is available
      try {
        setLoading(true); // Start loading
        const res = await fetch(`/api/jobDetail?id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch job details");
        const data = await res.json();
        const jobData = data.filter((j) => j._id === id)[0];

        setJob(jobData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchJob();

  }, [id]);

  const applyForJob = async () => {
    if (!job.isOpen || hasApplied) return; // If the job is closed or user has already applied, don't proceed

    try {
      const username = localStorage.getItem("username");

      const res = await fetch("/api/applyForJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: job._id,
          username: username,
        }),
      });

      if (res.status === 400) throw new Error("You have already applied for this job");

      if (!res.ok) throw new Error("Failed to apply for the job");

      setHasApplied(true); // Update the state to disable the button after successful application
      alert("Successfully applied for the job!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-start mb-6">
          <img
            src={job.imageLink}
            alt={`${job.company} logo`}
            className="w-20 h-20 object-cover rounded-lg mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <p className="text-lg text-gray-700 font-medium">{job.company}</p>
            <p className="text-sm text-gray-500 mt-2">{job.about}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <tbody>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">Employment Type</th>
                <td className="border border-gray-200 px-4 py-2">{job.isOpen ? "Open" : "Closed"}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">CGPA Requirement</th>
                <td className="border border-gray-200 px-4 py-2">{job.CGPA}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">Stipend</th>
                <td className="border border-gray-200 px-4 py-2">{job.stipend || "N/A"}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">Location</th>
                <td className="border border-gray-200 px-4 py-2">{job.location}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">Duration</th>
                <td className="border border-gray-200 px-4 py-2">{job.duration}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">OA Date</th>
                <td className="border border-gray-200 px-4 py-2">{new Date(job.oaDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <th className="border border-gray-200 px-4 py-2 bg-gray-100">Interview Date</th>
                <td className="border border-gray-200 px-4 py-2">{new Date(job.interviewDate).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className={`btn btn-primary w-full mt-6 ${job.isOpen && !hasApplied ? "" : "cursor-not-allowed opacity-50"}`}
          disabled={!job.isOpen || hasApplied}
          onClick={applyForJob}
        >
          {hasApplied ? "You have already applied" : job.isOpen ? "Apply Now" : "Applications Closed"}
        </button>
      </div>
    </div>
  );
}
