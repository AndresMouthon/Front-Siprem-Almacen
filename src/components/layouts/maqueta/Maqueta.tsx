import { ReactNode } from "react";
import { FaDatabase } from "react-icons/fa";
import { AnalyticsCard } from "./analyticsCardProps/AnalyticsCardProps";
import { Breadcrumb } from "./breadCrumb/BreadCrumb";
import { Navbar } from "./navbar/Navbar";

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
]

function Maqueta({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800">Welcome back, Louis</h1>
                <Breadcrumb />
                <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
                    <AnalyticsCard
                        title="NAME"
                        icon={<FaDatabase size={30} color="#202571" />}
                        description="Base 1"
                    />
                    <AnalyticsCard
                        title="NAME"
                        icon={<FaDatabase size={30} color="#202571" />}
                        description="Base 2"
                    />
                    <AnalyticsCard
                        title="NAME"
                        icon={<FaDatabase size={30} color="#202571" />}
                        description="Base 3"
                    />
                    <AnalyticsCard
                        title="NAME"
                        icon={<FaDatabase size={30} color="#202571" />}
                        description="Base 4"
                    />
                </div>
                {/* <div className="mt-8 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div> */}
            </div>
        </div>
    )
}

export default Maqueta
