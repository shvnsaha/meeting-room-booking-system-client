/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../redux/features/room/roomApi";
import { useState } from "react";
import Creatable from 'react-select/creatable'
import { MultiValue, ActionMeta } from "react-select";
import { useGetAvailableSlotsQuery } from "../redux/features/slot/slotApi";
import { TSlot } from "../types/inde";
import { useAppSelector } from "../redux/hook";
import { useCurrentUserData } from "../redux/features/auth/authSlice";
import { TbFidgetSpinner } from "react-icons/tb";
import { useAddOrderMutation } from "../redux/features/order/orderApi";


const Booking = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [addOrder] = useAddOrderMutation()
    const userData = useAppSelector(useCurrentUserData)
    const { data: room, isLoading } = useGetSingleRoomQuery(id);

    const [date, setDate] = useState('2024-09-20');
    const [price, setPrice] = useState(0);

    const params = `roomId=${id}&date=${date}`;
    const { data: slot } = useGetAvailableSlotsQuery(params)


    type TOptions = { value: string, label: string }
    const [selectedOptions, setSelectedOptions] = useState<TOptions[]>([]);



    const options = slot?.data.map((item: TSlot) => ({
        value: item._id,
        label: `${item.startTime} - ${item.endTime}`
    }));




    const selectedValues = selectedOptions.map((item: TOptions) => item.value)
    const handleChange = (newValue: MultiValue<TOptions>, actionMeta: ActionMeta<TOptions>) => {
        setSelectedOptions(newValue as TOptions[]);
        setPrice(newValue.length * room?.data.pricePerSlot)
    };





    const handleSubmit = async (e) => {

        e.preventDefault();
        const bookingData = {
            date,
            slots: selectedValues,
            room: room?.data._id,
            user: userData?._id,
        }

        console.log(bookingData);

        try {
            setLoading(true);
            const res = await addOrder(bookingData).unwrap();
            if (res?.success) {
                window.location.href = res.data.payment_url;
            }
        } catch (err: any) {
            console.log(err);
            // toast.error(err);
        } finally {
            setLoading(false);
           
        }
    }

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>

                <div className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            Client Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            id='name'
                            type='text'
                            placeholder='Name'
                            readOnly
                            defaultValue={userData?.name}
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            Room Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            id='name'
                            type='text'
                            placeholder='Name'
                            readOnly
                            defaultValue={room?.data.name}
                            required
                        />
                    </div>





                    <div className='flex flex-col md:flex-row justify-between gap-2'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='date'
                                id='date'
                                type='date'
                                placeholder='date'
                                required
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="tags" className="block text-gray-600">
                                Slots
                            </label>
                            <Creatable
                                required
                                className="w-full px-4 py-1 text-gray-800 border  focus:outline-rose-500 rounded-md "
                                name="amenities"
                                defaultValue={selectedOptions}
                                onChange={handleChange}
                                options={options}
                                isMulti
                            ></Creatable>
                        </div>
                    </div>

                </div>


                {/* 2 nd */}
                <div className='space-y-6'>



                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Total Price
                        </label>

                        <input
                            type="number"
                            id='price'
                            className='block rounded-md focus:rose-300 w-full  px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='price'
                            value={price}
                            readOnly
                        />
                    </div>
                </div>


                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Save & Continue'
                    )}
                </button>
            </form>
        </div>
    );
};

export default Booking;