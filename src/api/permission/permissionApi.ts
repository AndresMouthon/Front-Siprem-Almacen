import { IMenuResponse } from "../../model/menu/IMenu";
import { IPermission } from "../../model/permission/IPermission";
import { baseAPI } from "../baseApi";

export const permissionApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPermission: builder.query<IPermission, void>({
      query: () => ({
        url: "/permission/get-permissions",
        method: "GET",
      }),
    }),
    getMenu: builder.query<IMenuResponse, void>({
      query: () => ({
        url: "/permission/get-menu",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMenuQuery, useGetPermissionQuery } = permissionApi;
