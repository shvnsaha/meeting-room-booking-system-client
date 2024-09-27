import { Helmet } from "react-helmet-async";
import Loader from "../../components/shared/Loader";
import { useGetUsersQuery, useUpdateUserRoleMutation } from "../../redux/features/user/userApi";
import { useState } from "react";

const Users = () => {
    const { data, isLoading } = useGetUsersQuery(undefined)
    const [updateRole] = useUpdateUserRoleMutation();
    const [_loader,setLoader] = useState(false)

    const handleRoleUpdate = async(id:string)=>{
       try {
        setLoader(true)
        const userData = {
            role: 'admin'
        }
        const res = await updateRole({id,userData}).unwrap()
        console.log(res);
       } catch (error) {
        console.log(error);
       }finally{
        setLoader(false)
       }
    }


    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>Dashboard | All Users</title>
            </Helmet>
            <div className='py-8'>

                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                    >
                                        #
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-centertext-sm uppercase font-normal'
                                    >
                                         Name
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Phone
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Address
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>{/* Room row data */}

                                {

                                    data?.data.map((item: any, index: number) => <tr key={item._id}
                                    >
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            {item.name}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.email}
                                        </td>
                                        <td scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.phone}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.address}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.role}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                           {
                                            item.role=== 'user' && <button onClick={()=>handleRoleUpdate(item?._id)} className="btn btn-outline">Make Admin</button>
                                           }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Users;