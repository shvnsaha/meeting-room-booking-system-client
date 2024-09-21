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
        getSingleRoom: builder.query({
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

          deleteRoom: builder.mutation({
            query: (id) => ({
              url: `/rooms/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['room'],
          }),

          updateRoom: builder.mutation({
            query: ({id,roomData}) => {

               console.log(roomData);
              return{   
                url: `/rooms/${id}`,
                method: "PUT",
                body:roomData
              }
              
            },
            invalidatesTags: ['room'],
          }),
        })
    })


    export const {useGetRoomsQuery,useGetSingleRoomQuery,useAddRoomMutation,useDeleteRoomMutation,useUpdateRoomMutation} = roomApi
