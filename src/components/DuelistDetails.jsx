export default function DuelistDetails() {
    const { duelistId } = useParams();

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Duelist Details</h1>
            <p className="text-lg">Duelist ID: {duelistId}</p>
            {/* Additional details can be added here */}
        </div>
    );
}