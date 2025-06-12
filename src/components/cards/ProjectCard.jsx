import { Link } from "react-router-dom"

export default function ProjectCard({ projectId, title, description, tech }) {
    // Split tech string into array if it's a string, otherwise use as is
    const techArray = typeof tech === "string" ? tech.split(",").map(t => t.trim()).filter(Boolean) : Array.isArray(tech) ? tech : [];

    return (
        <div key={projectId} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
            <img className="rounded-t-lg" src="https://picsum.photos/400" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <Link to={`/projects/${projectId}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-orange-500 hover:bg-orange-600 text-black focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
                <div className="flex flex-wrap gap-2 mt-2">
                    {techArray.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
};