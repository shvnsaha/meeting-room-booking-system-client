import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUsers: builder.query({
            query: () => ({
                method: 'GET',
                url: `/auth/users`,
              }),
              providesTags:['user']
        }),

        updateUserRole: builder.mutation({
            query: ({id,userData}) => {
              return{   
                url: `/auth/users/${id}`,
                method: "PATCH",
                body:userData
              }
              
            },
            invalidatesTags: ['user'],
          }),
       
        })
    })

    export const {useGetUsersQuery,useUpdateUserRoleMutation} = userApi


   
