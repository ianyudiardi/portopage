import { Link } from "react-router-dom"

export default function ProjectCard({ title, description, projectId }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
            <Link to="">
                <img className="rounded-t-lg" src="https://picsum.photos/400" alt="" />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <Link to={`/projects/${projectId}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-orange-500 hover:bg-orange-600 text-black focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    )
};