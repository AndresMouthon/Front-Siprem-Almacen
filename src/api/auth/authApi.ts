import { baseAPI } from "../../api/baseApi.ts";
import { Ilogin, IloginData } from "../../model/login/Ilogin.ts";

export const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IloginData, Ilogin>({
      query: (data: Ilogin) => ({
        url: "/auth",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
