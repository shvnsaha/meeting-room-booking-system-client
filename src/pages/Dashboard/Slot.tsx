/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import { useAddSlotMutation, useDeleteSlotMutation, useGetSlotsQuery, useUpdateSlotMutation } from "../../redux/features/slot/slotApi";
import { useGetRoomsQuery } from "../../redux/features/room/roomApi";
import AddSlotModal from "../../components/Dashboard/AddSlotModal";
import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdDeleteOutline, MdSystemUpdateAlt } from "react-icons/md";
import { TSlot } from "../../types/inde";
import UpdateSlotModal from "../../components/Dashboard/UpdateSlotModal";
import Loader from "../../components/shared/Loader";



const Slot = () => {

    const { data, isLoading } = useGetSlotsQuery(undefined)
    const { data:room } = useGetRoomsQuery(undefined)
    const [addSlot] = useAddSlotMutation()
    const [deleteSlot] = useDeleteSlotMutation()
    const [updateSlot] = useUpdateSlotMutation();
    const [isOpen, setIsOpen] = useState(false)
     const [isOpen2, setIsOpen2] = useState(false)
    const [loading, setLoading] = useState(false)
    const [slot,setSlot] = useState<TSlot|null>(null)
   

    function closeModal() {
        setIsOpen(false)
        setIsOpen2(false)
    }

    const handleAddSlot = async (e:React.FormEvent<HTMLFormElement>) => {


        e.preventDefault();
        const form = e.currentTarget;
        const room = form.room.value;
        const date = form.date.value;
        const startTime = form.startTime.value;
        const endTime = form.endTime.value;

        const slotData = {
            room,date,startTime,endTime
        }

        console.log(slotData);
      

  

        try {
            setLoading(true);
            const res = await addSlot(slotData).unwrap();
            console.log(res);
            if (res?.success) {
              toast.success(res?.message);
            }
          } catch (err: any) {
            toast.error(err.data.message);
          } finally {
            setLoading(false);
            setIsOpen(false);
          }

    }


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
            await deleteSlot(id);
    
            Swal.fire({
              title: "Slot is deleted",
              text: "",
              icon: "success",
            });
          }
        });
      };


      const openModal = (item: TSlot) => {
        setIsOpen2(true);
        setSlot(item);
      };


      const handleUpdateSlot = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = e.currentTarget;
        const date = form.date.value;
        const startTime = form.startTime.value;
        const endTime = form.endTime.value;
        
        const slotData = {
            room:slot?.room._id,date,startTime,endTime
        }

        
        try {
            const id = slot?._id;
            setLoading(true);
            const res = await updateSlot({id,slotData}).unwrap();
            console.log(res);
            if (res?.success) {
              toast.success(res?.message);
            }
          } catch (err: any) {
            toast.error(err.data.message);
          } finally {
            setLoading(false);
            setIsOpen(false);
          }
      }


      if (isLoading) {
       return <Loader/>
    }

   
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>Dashboard | Slots</title>
            </Helmet>
            <div className='py-8'>
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(true)} >
                        <IoAddCircleSharp size={40} />
                    </button>
                </div>
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
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-centertext-sm uppercase font-normal'
                                    >
                                       Date
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Start Time
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                    >
                                        End Time
                                    </th>
                                    {/* <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Book Status
                                    </th> */}
                                    {/* <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Price
                                    </th> */}

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

                                    data?.data.map((item:any, index:number) => <tr key={item._id}
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
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            {item.date}
                                        </td>
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            {item.startTime}
                                        </td>
                                       
                                        <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.endTime}
                                        </td>
                                     
                                        {/* <td
                                            scope='col'
                                            className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
                                        >
                                            {item.isBooked}
                                        </td> */}
                                        <td
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                        >
                                            <div className="flex justify-evenly">
                                                <button onClick={() => openModal(item)} title="Update" ><MdSystemUpdateAlt /></button>
                                                <button title="Delete" onClick={() => handleDelete(item._id)}><MdDeleteOutline /></button>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    <AddSlotModal
                        closeModal={closeModal}
                        isOpen={isOpen} handleAddSlot={handleAddSlot} loading={loading}
                        room={room}
                    ></AddSlotModal>
                }

                {
                    <UpdateSlotModal
                        closeModal={closeModal}
                        isOpen2={isOpen2} handleUpdateSlot={handleUpdateSlot} loading={loading}
                        slot={slot}
                    ></UpdateSlotModal>
                }
            </div>
        </div>
    );
};

export default Slot;