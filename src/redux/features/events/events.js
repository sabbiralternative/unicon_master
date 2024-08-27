import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupEvents: builder.query({
      query: (sports) => {
        return {
          url: `${API.group}/${sports}`,
          method: "GET",
        };
      },
    }),
    getAllOddsEvents: builder.query({
      query: (payload) => {
        return {
          url: `${API.odds}/${payload.eventTypeId}/${payload.eventId}`,
          method: "GET",
        };
      },
    }),
    order: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.order}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetAllGroupEventsQuery,
  useGetAllOddsEventsQuery,
  useOrderMutation,
} = eventsApi;
