import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getRooms: builder.query({
            query: (params) => ({
                method: 'GET',
                url: `/rooms?${params}`,
              }),
              providesTags:['room']
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
              url: `/rooms/${id}`,
              method: "GET",
            }),   
          }),
        })
    })


    export const {useGetRoomsQuery,useGetSingleProductQuery} = roomApi
