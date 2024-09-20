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

          addRoom: builder.mutation({
            query: (payload) => ({
              url: "/rooms",
              method: "POST",
              body: payload,
            }),
            invalidatesTags:['room']
          }),
        })
    })


    export const {useGetRoomsQuery,useGetSingleProductQuery,useAddRoomMutation} = roomApi
