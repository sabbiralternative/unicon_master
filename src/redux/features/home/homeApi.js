import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupEvents: builder.query({
      query: (sports) => ({
        url: `${API.group}/${sports}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllGroupEventsQuery } = homeApi;
