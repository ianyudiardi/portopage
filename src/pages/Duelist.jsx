const duelist = [
    {
        id: "cityduel-top-4",
        title: "Indonesia City Duel Yogyakarta Top 4",
        description:
            "I achieved top 4 in the City Duel tournament held in Yogyakarta, showcasing my skills in competitive Yu-Gi-Oh! OCG.",
        url: "https://roadoftheking.com/icd-2025-yogyakarta/",
        image: "cityduel.jpg",
    },
    {
        id: "aot-champion",
        title: "Arnero Open Tournament Champion",
        description:
            "I won the Arnero Open Tournament, demonstrating my strategic prowess and deck-building skills in a competitive environment.",
        url: "https://www.facebook.com/dranero/posts/pfbid033bQdBG5ER5ea7xFswD7r8nvRNb99kdLm24gFuVebcYqrgVkMXb4TXJ5UdqMRDQQVl",
        image: "aot.jpg",
    },
];

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

                {/* for some reason item 2 and below is not responsive, to be fixed */}
                {duelist.map((duel, index) => (
                    <div
                        key={duel.id}
                        className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                            }`}
                    >
                        <div className={index % 2 === 1 ? "md:order-2" : ""}>
                            <img
                                src={duel.image || "/placeholder.svg"}
                                alt="Profile"
                                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                            />
                        </div>
                        <div className={index % 2 === 1 ? "md:order-1" : ""}>
                            <h3 className="text-2xl font-semibold mb-6 text-orange-500">
                                {duel.title}
                            </h3>
                            <p className="text-white mb-6 leading-relaxed">
                                {duel.description}
                            </p>
                            <div className="break-all">
                                <a
                                    href={duel.url}
                                    className="hover:text-orange-500 transition-colors duration-100 text-sm md:text-base"
                                >
                                    {duel.url}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
