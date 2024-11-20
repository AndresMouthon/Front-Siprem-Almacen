// import { useGetPermissionQuery } from "@/api/menu/menuApi.ts";
// import { Loading } from "@/components/layout/loadings";
// import { IDataPermission } from "@/model/Menu/IPermission.ts";
// import { ErrorPages, ErrorPermissions } from "@/pages/private";
import { ReactNode } from "react";
import { useGetPermissionQuery } from "../../api/permission/permissionApi";
import { IDataPermission } from "../../model/permission/IPermission";

interface Props {
  permissions: string;
  children: ReactNode;
}

export function PermissionGuard({ permissions, children }: Props) {
  const { data, isError, isLoading } = useGetPermissionQuery();

  if (isLoading)
    return (
      <>
        {/* <Loading isLoading={isLoading} onClose={() => { }} /> */}
        <h1>Cargando...</h1>
      </>
    );

  if (isError)
    return (
      <>
        {/* <ErrorPages /> */}
        <h1>No tiene permisos</h1>
      </>
    );

  if (!data?.data_permissions)
    return (
      <>
        {/* <ErrorPermissions /> */}
        <h1>No tiene permisos</h1>
      </>
    );

  const permission = data?.data_permissions.map(
    (item: IDataPermission) => item.permission
  );

  const hasPermission = permission?.includes(permissions);

  if (hasPermission) {
    return <>{children}</>;
  }
}
