/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import { useDeleteOrderMutation, useGetAllOrdersQuery, useUpdateOrderMutation } from "../../redux/features/order/orderApi";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { GiConfirmed } from "react-icons/gi";
import { GrEject } from "react-icons/gr";
import Loader from "../../components/shared/Loader";



const Bookings = () => {

    const { data, isLoading } = useGetAllOrdersQuery(undefined)
    const [deleteOrder] = useDeleteOrderMutation()
    const [updateOrder] = useUpdateOrderMutation()

    const handleDelete = (id: string) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await deleteOrder(id);
    
            Swal.fire({
              title: "Booking is deleted",
              text: "",
              icon: "success",
            });
          }
        });
      };


      const handleAccept = async(id: string) =>{
        const orderData = {
            isConfirmed: 'confirmed'
        }

        try {
            const res = await updateOrder( {id, orderData} ).unwrap();
            console.log(res);
            if (res?.success) {
              toast.success(res?.message);
            }
          } catch (err: any) {
            toast.error(err);
          } 
        
      }

      const handleReject = async(id: string) =>{
        const orderData = {
            isConfirmed: 'unconfirmed'
        }

        try {
            const res = await updateOrder( {id, orderData} ).unwrap();
            console.log(res);
            if (res?.success) {
              toast.success(res?.message);
            }
          } catch (err: any) {
            toast.error(err);
          } 
        
      }

    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>Dashboard | All Bookings</title>
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
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        User Name
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
                                            {index}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            {item.room.name}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-centertext-sm uppercase font-normal'
                                        >
                                            {item.user.name}
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
                                            {item.slots.map((it:any, idx:number) => (
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
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            <div className="flex justify-evenly">
                                                <button onClick={() => handleAccept(item?._id)} title="Accept" ><GiConfirmed /></button>
                                                <button onClick={() => handleReject(item?._id)} title="Reject" ><GrEject /></button>
                                                <button title="Delete" onClick={() => handleDelete(item._id)}><MdDeleteOutline /></button>
                                            </div>
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

export default Bookings;