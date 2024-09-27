import { Helmet } from "react-helmet-async";
import { useGetAllMyOrdersQuery } from "../redux/features/order/orderApi";
import Loader from "../components/shared/Loader";

const MyBooking = () => {

    const { data, isLoading } = useGetAllMyOrdersQuery(undefined)

    if(isLoading){
        return <Loader/>
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>E-Shop | All Bookings</title>
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
                                        Room Name
                                    </th>
                                 
                                    <th
                                        scope='col'
                                        className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        TimeSlot
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Status
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
                                            {index+1}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            {item.room.name}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.date}
                                        </td>
                                        <td scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.slots.map((it: any, idx: number) => (
                                                <p
                                                    key={idx}
                                                    className="text-gray-900 whitespace-no-wrap border-2 p-1"
                                                >{`${idx + 1}.  ${it.startTime} - ${it.endTime}`}</p>
                                            ))}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.isConfirmed}
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

export default MyBooking;