import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);


    const handleNavClick = (sectionId) => {
        if (location.pathname === '/') {
            // Already on /home, just scroll
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navigate to /home#sectionId
            navigate(`/#${sectionId}`);
        }
    }

    return (
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-orange-500/20 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => handleNavClick("home")} className="text-2xl font-bold text-orange-500 hover:text-orange-600">
                        Portofolio
                    </button>
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => handleNavClick("home")} className="text-white hover:text-orange-500 transition-colors">
                            Home
                        </button>
                        <button onClick={() => handleNavClick("about")} className="text-white hover:text-orange-500 transition-colors">
                            About
                        </button>
                        <button onClick={() => handleNavClick("skills")} className="text-white hover:text-orange-500 transition-colors">
                            Skills
                        </button>
                        <Link to="/projects" className="text-white hover:text-orange-500 transition-colors">
                            Projects
                        </Link>
                        <Link to="/duel" className="text-white hover:text-orange-500 transition-colors">
                            Duelist Portofolio
                        </Link>
                        <button onClick={() => handleNavClick("contact")} className="text-white hover:text-orange-500 transition-colors">
                            Contact
                        </button>
                    </div>
                    <button
                        onClick={() => setModalOpen(!modalOpen)}
                        className="inline-flex md:hidden items-center justify-center w-10 h-10 text-white hover:text-orange-500 transition-colors"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full ${modalOpen ? "block" : "hidden"} md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-black/90 rounded-lg md:bg-transparent border border-orange-500/20 md:border-0 mb-4">
                        <li>
                            <button
                                onClick={() => { setModalOpen(false); handleNavClick("home"); }}
                                className="block w-full text-left py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setModalOpen(false); handleNavClick("about"); }}
                                className="block w-full text-left py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setModalOpen(false); handleNavClick("skills"); }}
                                className="block w-full text-left py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                onClick={() => setModalOpen(false)}
                                className="block py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/duel"
                                onClick={() => setModalOpen(false)}
                                className="block py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                Duelist Portofolio
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => { setModalOpen(false); handleNavClick("contact"); }}
                                className="block w-full text-left py-2 px-3 text-white hover:text-orange-500 transition-colors"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}