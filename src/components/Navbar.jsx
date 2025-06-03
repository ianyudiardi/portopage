import { Link } from "react-router-dom"

export default function Navbar() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-orange-500/20 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-orange-500">Portofolio</div>
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection("home")} className="text-white hover:text-orange-500 transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("about")} className="text-white hover:text-orange-500 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection("skills")} className="text-white hover:text-orange-500 transition-colors">
                            Skills
                        </button>
                        <Link to="/projects" className="text-white hover:text-orange-500 transition-colors">
                            Projects
                        </Link>
                        <Link to='/duel' className="hover:text-orange-500 transition-colors">
                            Duelist Portofolio
                        </Link>
                        <button onClick={() => scrollToSection("contact")} className="text-white hover:text-orange-500 transition-colors">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}