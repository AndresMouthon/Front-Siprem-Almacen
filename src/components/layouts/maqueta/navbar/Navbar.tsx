import { Archive, Bell, Info, Store } from "lucide-react";
import { imagenes } from "../../../../assets/img/imagenes";
import usePermission from "../../../../features/hooks/usePermission";
import SkeletonNav from "../../../../utils/loadings/skeletons/SkeletonNav";
import NavItem from "../items/NavItem";

const iconMap: Record<string, { icon: React.ComponentType<any>, color: string, colorIcon?: string, hoverColorIcon: string }> = {
    Store: { icon: Store, color: "text-red-200", colorIcon: "white", hoverColorIcon: "hover:text-red-500" },
    Archive: { icon: Archive, color: "text-yellow-200", colorIcon: "white", hoverColorIcon: "hover:text-yellow-500" },
};

export function Navbar() {
    const { data, isLoading } = usePermission();
    return (
        <nav className="bg-secondary shadow">
            <div className="max-w-7xl lg:w-5/6 mx-auto">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-4">
                        <img src={imagenes.logo} alt="Logo" className="h-10" />
                        <h1 className="text-xl font-bold text-white">SIPREM</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-sm font-medium text-white">User</span>
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
                                        color="text-white"
                                        hoverColor="hover:text-white"
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
