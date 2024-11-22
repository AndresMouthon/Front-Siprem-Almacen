import { Link } from "react-router-dom";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    color: string;
    hoverColor: string;
}

function NavItem({ icon, label, color, hoverColor, active = false }: NavItemProps) {
    return (
        <Link to="/" className={`flex flex-col items-center p-2 ${active ? `${color}` : 'text-white'} ${hoverColor} transition-all duration-300`}>
            {icon}
            <span className="text-sm mt-1">{label}</span>
        </Link>
    );
}



export default NavItem
