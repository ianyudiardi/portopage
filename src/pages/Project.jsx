import projects from "../data/projects.js";
import ProjectCard from "../components/cards/ProjectCard.jsx";

export default function Project() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    My <span className="text-orange-500">Projects</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectId={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}