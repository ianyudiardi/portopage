export default function ContactCards({index, title, description, icon}) {
    return (
        <div key={index} className="bg-gray-900 rounded-lg">
            <div className="p-6 container mx-auto flex flex-col items-center text-center">
                <img height={64} width={64} src={icon} alt={title} className="pb-2" />
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white mb-2">{description}</p>
            </div>
        </div>
    )
}