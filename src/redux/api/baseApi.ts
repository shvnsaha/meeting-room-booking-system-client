// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//      baseUrl: "http://localhost:5000/api",
    
// });

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQuery,
//   endpoints: () => ({}),
//   tagTypes: ["room"],
// });


import { createApi,  fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
// import { logout, setUser } from '../features/auth/authSlice';
// import { setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:5000/api',
  baseUrl: 'https://meeting-room-booking-system-server.vercel.app/api',
  credentials:"include",
  prepareHeaders: (headers,{getState}) =>{
   const token = (getState() as RootState).auth.token
   if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
   return headers
  }
})

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const baseQueryWithRefreshToken:BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> =  async(args,api,extraOptions):Promise<any> =>{
//   let result = await baseQuery(args,api,extraOptions);
//   if(result.error?.status === 401){
//     const res = await fetch("http://localhost:5000/api/auth/refresh-token",{
//       method: "POST",
//       credentials: "include"
//     })

//     const data =  await res.json();
//     console.log(data);


//     if(data?.data?.accessToken){
//     const user = (api.getState() as RootState).auth.user
//     api.dispatch(setUser({
//       user: user,
//       token: data?.data?.accessToken
//     }))

//     result = await baseQuery(args,api,extraOptions)
//   } else{
//     api.dispatch(logout())
//   }

//   }

//   return result
  
// }

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery, 
  endpoints: () => ({}),
  tagTypes:['room','slot','order']
});