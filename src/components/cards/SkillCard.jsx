export default function SkillCard({ title, description, level }) {
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 container mx-auto">
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white mb-2">{description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 mb-2"
                        style={{ width: `${level}%` }}
                    ></div>
                </div>
                <p className="text-white">Proficiency: {level}%</p>
            </div>
        </div>
    );
}