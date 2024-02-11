import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:9000",
    }),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => "/videos",
		})
	})
});
 