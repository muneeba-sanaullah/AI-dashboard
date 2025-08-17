
interface StatCardProps {
  title: string;
  value: string;
  delta?: string;
}

export default function StatCard({ title, value, delta }: StatCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-100">{value}</p>
      {delta && (
        <p className="mt-1 text-xs text-green-400 font-medium">{delta}</p>
      )}
    </div>
  );
}
