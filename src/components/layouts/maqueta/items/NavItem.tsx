import { Link } from "react-router-dom";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    color: string;
}

function NavItem({ icon, label, color, active = false }: NavItemProps) {
    return (
        <Link to="/" className={`flex flex-col items-center p-2 ${active ? `text-${color}-600` : 'text-blue-950 hover:text-blue-600 transition-all duration-300'}`}>
            {icon}
            <span className="text-sm mt-1">{label}</span>
        </Link>
    );
}


export default NavItem
