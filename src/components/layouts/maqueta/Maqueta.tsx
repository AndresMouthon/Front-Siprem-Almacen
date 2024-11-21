import { ReactNode } from "react";
import { FaDatabase } from "react-icons/fa";
import { AnalyticsCard } from "./analyticsCardProps/AnalyticsCardProps";
import { Breadcrumb } from "./breadCrumb/BreadCrumb";
import { Navbar } from "./navbar/Navbar";

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
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Maqueta
