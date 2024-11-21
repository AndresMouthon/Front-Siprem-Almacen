import { Navigate, Route, Routes } from "react-router-dom";
import { useGetMenuQuery } from "../api/permission/permissionApi";
import Maqueta from "../components/layouts/maqueta/Maqueta";
import RenderView from "../components/shared/RenderView";
import { PermissionGuard } from "../utils/guards/PermissionGuard";
// import Maqueta from "../components/layouts/maqueta/Maqueta.tsx";

function PrivateRouter() {
    const { data, isLoading, isSuccess } = useGetMenuQuery();
    if (!isSuccess || !data) {
        return null;
    }
    return (
        <Routes>
            <Route path="*" element={<><h1>Not found</h1></>} />
            <Route index path={`/`} element={<Navigate to={"dashboard"} />} />
            {data.data_components.map((component) => (
                <Route
                    key={component.id}
                    path={`${component.path}`}
                    element={
                        <Maqueta>
                            {/*Validacion de permisos - component.permission */}
                            <PermissionGuard permissions={component.permission}>
                                <RenderView component={component} loading={isLoading} />
                            </PermissionGuard>
                        </Maqueta>
                    }
                />
            ))}
        </Routes>
    )
}

export default PrivateRouter
