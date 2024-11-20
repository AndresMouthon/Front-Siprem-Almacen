import {
    BaseQueryApi,
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { API_KEY } from "../utils/const.ts";
  import { RootState } from "../features/redux";
  
  const baseQuery = fetchBaseQuery({
    baseUrl: `${API_KEY}/api`,
    prepareHeaders: (headers: Headers, api: Pick<BaseQueryApi, "getState">) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const state = api.getState() as RootState;
      const token: string = state.token.value;
  
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  
  export const baseAPI = createApi({
    /**
     * `reducerPath` is optional and will not be required by most users.
     * This is useful if you have multiple API definitions,
     * e.g. where each has a different domain, with no interaction between endpoints.
     * Otherwise, a single API definition should be used in order to support tag invalidation,
     * among other features
     */
    // reducerPath: 'splitApi',
    /**
     * A bare-bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
     */
    baseQuery: baseQuery,
    /**
     * Tag types must be defined in the original API definition
     * for any tags that would be provided by injected endpoints
     */
    tagTypes: ["Auth"],
    /**
     * This api has endpoints injected in adjacent files,
     * which is why no endpoints are shown below.
     * If you want all endpoints defined in the same file, they could be included here instead
     */
    endpoints: () => ({}),
  });
  