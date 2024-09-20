import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSlots: builder.query({
            query: () => ({
                method: 'GET',
                url: `/slots`,
              }),
              providesTags:['slot']
        }),

        addSlot: builder.mutation({
            query: (payload) => ({
              url: "/slots",
              method: "POST",
              body: payload,
            }),
            invalidatesTags:['slot']
          }),

          deleteSlot: builder.mutation({
            query: (id) => ({
              url: `/slots/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ['slot'],
          }),

          updateSlot: builder.mutation({
            query: ({id,slotData}) => {

              
              return{   
                url: `/slots/${id}`,
                method: "PUT",
                body:slotData
              }
              
            },
            invalidatesTags: ['slot'],
          }),
        
        })
    })


    export const {useGetSlotsQuery,useAddSlotMutation,useDeleteSlotMutation,useUpdateSlotMutation} = slotApi
