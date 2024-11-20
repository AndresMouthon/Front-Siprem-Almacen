import { Navigate, Route, Routes } from "react-router-dom";
import { useGetMenuQuery } from "../api/permission/permissionApi";
import { PermissionGuard } from "../utils/guards/PermissionGuard";

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
                        <Root>
                            {/*Validacion de permisos - component.permission */}
                            <PermissionGuard permissions={component.permission}>
                                <RenderView component={component} loading={isLoading} />
                            </PermissionGuard>
                        </Root>
                    }
                />
            ))}
        </Routes>
    )
}

export default PrivateRouter
