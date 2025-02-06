import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "data-api-reducer",
  tagTypes: ["Data"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: (result, err, arg) => {
        console.log("getAllData providesTags", {
          result,
          err,
          arg,
        });
        return [{ type: "Data" }];
      },
    }),
    postData: builder.mutation({
      query: (newData) => ({
        url: "data",
        method: "POST",
        body: newData,
      }),
    }),
  }),
});

export const { useGetAllDataQuery } = dataApi;
export default dataApi;
