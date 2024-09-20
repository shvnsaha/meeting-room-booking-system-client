import { Helmet } from "react-helmet-async";
import { useAddRoomMutation, useGetRoomsQuery } from "../../redux/features/room/roomApi";
import RoomDataRow from "../../components/Dashboard/RoomDataRow";
import {  FormEventHandler, useState } from "react";
import AddRoomModal from "../../components/Dashboard/AddRoomModal";
import { IoAddCircleSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Room = () => {

    const { data, isLoading } = useGetRoomsQuery(undefined)
    const [addRoom] = useAddRoomMutation()
    const [loading, setLoading] = useState(false)

    const [selectedOptions, setSelectedOptions] = useState([])

    type TOptions= {value: string,label: string}
    

  const options = [
    { value: 'sport', label: 'Sport' },
    { value: 'technology', label: 'Technology' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'education', label: 'Education' },
  ]

  const selectedValues = selectedOptions.map((item:TOptions) => item.value)

 


    if (isLoading) {
        <p>Loading</p>
    }

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    const handleAddRoom = async (e:any) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const image = form.image.value
        const roomNo = parseInt(form.roomNo.value)
        const floorNo = parseInt(form.floorNo.value)
        const capacity = parseInt(form.capacity.value)
        const pricePerSlot = parseInt(form.pricePerSlot.value)
        const amenities = selectedValues
        const amenitiesObj = selectedOptions
        const roomData = {
            name,image,roomNo,floorNo,capacity,pricePerSlot,amenities,amenitiesObj
        }

    console.log(roomData);

        try {
            setLoading(true);
            const res = await addRoom(roomData).unwrap();
            console.log(res);
            // if (res?.success) {
            //   toast.success(res?.message);
            // }
          } catch (err: any) {
            toast.error(err);
          } finally {
            setLoading(false);
            setIsOpen(false);
          }

    }

    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>E-Shop | All Bookings</title>
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
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                                    >
                                        Date
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
                                        Price
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

                                    data?.data.map((item, index) => <RoomDataRow key={item._id} item={item} index={index}></RoomDataRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <AddRoomModal
                    closeModal={closeModal}
                    isOpen={isOpen} handleAddRoom={handleAddRoom} loading={loading}
                    options={options}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                ></AddRoomModal>
            </div>
        </div>
    );
};

export default Room;