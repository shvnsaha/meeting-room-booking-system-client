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
        
        })
    })


  export  const {useAddOrderMutation} = orderApi