import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addOrder : builder.mutation({
            query: (payload) => ({
              url: "/bookings",
              method: "POST",
              body: payload,
            }),
            invalidatesTags:['order']
          }),
        
          getAllOrders: builder.query({
            query: () => ({
                method: 'GET',
                url: `/bookings`,
              }),
              providesTags:['order']
        }),

        deleteOrder: builder.mutation({
          query: (id) => ({
            url: `/bookings/${id}`,
            method: "DELETE",
          }),
          invalidatesTags: ['order'],
        }),

        updateOrder: builder.mutation({
          query: ({id,orderData}) => {

            
            return{   
              url: `/bookings/${id}`,
              method: "PUT",
              body:orderData
            }
            
          },
          invalidatesTags: ['order'],
        }),
        })
    })


  export  const {useAddOrderMutation,useGetAllOrdersQuery,useDeleteOrderMutation,useUpdateOrderMutation} = orderApi