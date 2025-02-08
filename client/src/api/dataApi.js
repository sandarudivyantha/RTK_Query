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
        return result
          ? [...result.map((ele) => ({ type: "Data", id: ele._id }))]
          : [{ type: "Data", id: "LIST" }];
      },
    }),
    getDataById: builder.query({
      query: (id, name) => ({
        url: `/${id}`,
        method: "get",
      }),
      providesTags: (result, err, arg) => {
        return [{ type: "Data", id: arg }];
      },
    }),
    addData: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, err, arg) => {
        console.log("Add data mutation invalid tags", { result, err, arg });
        return [{ type: "Data", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetAllDataQuery, useGetDataByIdQuery, useAddDataMutation } =
  dataApi;
export default dataApi;
