import { BarChart2, Bell, Calendar, Database, FileText, Inbox, Layers, LayoutDashboard, Search, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { imagenes } from "../../../../assets/img/imagenes";

export function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-4">
                        <img src={imagenes.logo} alt="Logo" className="h-10" />
                        <h1 className="text-xl font-bold text-blue-950">SIPREM</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-sm font-medium">User</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between p-2 overflow-x-auto">
                    <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
                    <NavItem icon={<Layers size={18} />} label="Widgets" />
                    <NavItem icon={<FileText size={18} />} label="Forms" />
                    <NavItem icon={<Search size={18} />} label="Search" />
                    <NavItem icon={<Users size={18} />} label="Users" />
                    <NavItem icon={<BarChart2 size={18} />} label="Analytics" />
                    <NavItem icon={<Inbox size={18} />} label="Inbox" />
                    <NavItem icon={<Calendar size={18} />} label="Calendar" />
                    <NavItem icon={<Database size={18} />} label="Database" />
                    <NavItem icon={<Settings size={18} />} label="Settings" />
                </div>
            </div>
        </nav>
    )
}

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function NavItem({ icon, label, active = false }: NavItemProps) {
    return (
        <Link to="/" className={`flex flex-col items-center p-2 ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </Link>
    )
}
