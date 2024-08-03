import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupEvents: builder.query({
      query: () => ({
        url: `${API.group}/4`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllGroupEventsQuery } = homeApi;
