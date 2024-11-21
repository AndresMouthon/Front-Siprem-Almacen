import { Archive, Bell, Info, Store } from "lucide-react";
import { imagenes } from "../../../../assets/img/imagenes";
import usePermission from "../../../../features/hooks/usePermission";
import SkeletonNav from "../../../../utils/loadings/skeletons/SkeletonNav";
import NavItem from "../items/NavItem";

const iconMap: Record<string, { icon: React.ComponentType<any>, color: string, colorIcon?: string }> = {
    Store: { icon: Store, color: "blue", colorIcon: "#1F2373" },
    Archive: { icon: Archive, color: "yellow", colorIcon: "#5D592F" },
};

export function Navbar() {
    const { data, isLoading } = usePermission();
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
                <div className="flex items-center justify-start p-2 overflow-x-auto">
                    {isLoading || !data ? (
                        <SkeletonNav />
                    ) : (
                        <div className="flex flex-row items-center space-x-5">
                            {data.data_module.map((item: any) => {
                                const iconData = iconMap[item.icon];
                                return (
                                    <NavItem
                                        key={item.id}
                                        icon={iconData ? <iconData.icon size={18} color={iconData.colorIcon} /> : <Info size={18} color="#202571" />}
                                        label={item.name}
                                        color={iconData ? iconData.color : "#202571"}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
