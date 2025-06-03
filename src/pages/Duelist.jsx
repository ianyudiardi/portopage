const duelist = [
    {
        id: "cityduel-top-4",
        title: "Top 4 Indonesia City Duel Yogyakarta",
        description: "I achieved top 4 in the City Duel tournament held in Yogyakarta, showcasing my skills in competitive Yu-Gi-Oh! OCG.",
        image: "cityduel.jpg"
    },
]

export default function Duelist() {
    return (
        <section id="duelist" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-2 text-white">
                    Duelist <span className="text-orange-500">Portofolio</span>
                </h2>
                <p className="text-white font-semibold text-lg mb-8 text-center">
                    My achievements in competitive Yu-Gi-Oh! OCG
                </p>
            </div>

            {duelist.map((duel) => (
                <div key={duel.id} className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src={duel.image}
                            alt="Profile"
                            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-orange-500">{duel.title}</h3>
                        <p className="text-white mb-6 leading-relaxed">
                            {duel.description}
                        </p>
                    </div>
                </div>
            ))}
        </section >
    )
}