import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import projects from "../data/projects.js"


import SkillCard from "../components/cards/SkillCard"
import ProjectCard from "../components/cards/ProjectCard"
import ContactCards from "../components/cards/ContactCards.jsx"

const skills = [
    {
        index: 1,
        title: "JavaScript",
        description: "Expert in modern JavaScript frameworks and libraries.",
        level: 60
    },
    {
        index: 2,
        title: "React",
        description: "Building dynamic user interfaces with React.",
        level: 85
    },
    {
        index: 3,
        title: "Node.js",
        description: "Server-side development with Node.js.",
        level: 80
    },
    {
        index: 4,
        title: "Tailwind CSS",
        description: "Creating responsive designs with Tailwind CSS.",
        level: 75
    },
    {
        index: 5,
        title: "UI/UX Design",
        description: "Designing intuitive user experiences.",
        level: 40
    },
    {
        index: 6,
        title: "Coffee Brewing",
        description: "I love brewing coffee and experimenting with different methods.",
        level: 70
    }
]

const contacts = [
    {
        index: 1,
        title: "Email",
        description: "ianyudiardi@gmail.com",
        icon: "https://cdn.simpleicons.org/gmail/orangered"
    },
    {
        index: 2,
        title: "GitHub",
        description: "https://github.com/ianyudiardi",
        icon: "https://cdn.simpleicons.org/github/orangered"
    },
    {
        index: 3,
        title: "LinkedIn",
        description: "https://www.linkedin.com/in/ianyudiardi/",
        icon: "linkedin.png"
    },
]

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const el = document.getElementById(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100); // slight delay to ensure element is rendered
            }
        }
    }, [location]);

    // const scrollToSection = (sectionId) => {
    //     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    // }

    return (
        <>
            {/* home */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                            <img src="ian.jpg" alt="" className="rounded-full" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Hi, I'm <span className="text-orange-500">Fabian Nurdin</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 text-lg rounded-lg transition-colors duration-300"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            variant="outline"
                            className="bg-gray-900 text-orange-500 hover:bg-gray-800 hover:text-orange-500 px-8 py-3 text-lg rounded-lg transition-colors duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>

            {/* about */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        About <span className="text-orange-500">Me</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="negative.jpg"
                                alt="Profile"
                                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Passionate Developer</h3>
                            <p className="text-white mb-6 leading-relaxed">
                                With over 5 years of experience in web development, I specialize in creating modern, responsive
                                applications using cutting-edge technologies. My journey started with a curiosity for how things work on
                                the web, and it has evolved into a passion for crafting exceptional user experiences.
                            </p>
                            <p className="text-white mb-6 leading-relaxed">
                                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                                or sharing knowledge with the developer community.
                            </p>
                            <div className="flex space-x-4">
                                <button onClick={() => window.open("https://github.com/ianyudiardi")} className="bg-orange-500 hover:bg-orange-600 size-10 flex items-center justify-center rounded-lg transition-colors duration-300">
                                    <img height="32" width="32" src="https://cdn.simpleicons.org/github/black" />
                                </button>
                                <button onClick={() => window.open("https://www.linkedin.com/in/ianyudiardi/")} className="bg-orange-500 hover:bg-orange-600 size-10 flex items-center justify-center rounded-lg transition-colors duration-300">
                                    <img height="32" width="32" src="linkedinblack.png" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* skills */}
            < section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" >
                <h1 className="text-white text-4xl font-bold text-center mb-16">My <span className="text-orange-500">Skills</span></h1>
                <div className="grid grid-cols-2 gap-2">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            description={skill.description}
                            level={skill.level}
                        />
                    ))}
                </div>
            </section >

            {/* projects */}
            < section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-2 text-white">
                        My <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-white font-semibold text-lg mb-16 text-center">
                        Featured projects that showcase my skills and creativity
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
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
                    <div className="flex justify-center">
                        <Link to={`/projects`} className="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-orange-500 hover:bg-orange-600 text-black focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg">
                            See more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section >

            {/* Contact */}
            < section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Let's <span className="text-orange-500">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
                        bring your ideas to life.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* contact cards start */}
                        {contacts.map((contact) => (
                            <ContactCards
                                key={contact.index}
                                title={contact.title}
                                description={contact.description}
                                icon={contact.icon}
                            />
                        ))}
                        {/* contact cards end */}
                    </div>
                </div>
            </section >

            {/* footer */}
            < footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800" >
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-white">© 2025 Fabian Nurdin. Built with React & Tailwind CSS.</p>
                </div>
                <div className="flex justify-center my-2 space-x-4">
                    <button onClick={() => window.open("https://github.com/ianyudiardi")} className="bg-orange-500 hover:bg-orange-600 size-10 flex items-center justify-center rounded-lg transition-colors duration-300">
                        <img height="32" width="32" src="https://cdn.simpleicons.org/github/black" />
                    </button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/ianyudiardi/")} className="bg-orange-500 hover:bg-orange-600 size-10 flex items-center justify-center rounded-lg transition-colors duration-300">
                        <img height="32" width="32" src="linkedinblack.png" />
                    </button>
                </div>
            </footer >
        </>

    )
}