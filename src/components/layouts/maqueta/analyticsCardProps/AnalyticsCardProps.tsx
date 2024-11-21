import { FaEye } from "react-icons/fa";

interface AnalyticsCardProps {
  title: string
  icon: React.ReactNode
  description: string
}

export function AnalyticsCard({ title, icon, description }: AnalyticsCardProps) {

  return (
    <div className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <FaEye className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
      </div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{icon}</div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}