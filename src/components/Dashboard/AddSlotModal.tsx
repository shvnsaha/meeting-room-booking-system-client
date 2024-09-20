import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';
import { TRoom } from '../../types/inde';

const AddSlotModal = ({ isOpen, closeModal, handleAddSlot, loading, room }: any) => {

    console.log(room);
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium text-center leading-6 text-gray-900 mb-6"
                                >
                                    Add Room
                                </Dialog.Title>
                                <div className="mt-10">
                                    <form onSubmit={handleAddSlot}>
                                        <div className="space-y-6">
                                            <div className='space-y-1 text-sm'>
                                                <select
                                                    required
                                                    className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                                    name='room'
                                                >
                                                    {room?.data.map((item:TRoom)=> (
                                                        <option value={item._id} key={item.name
                                                        }>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>


                                          
                                                <div className="space-y-1 text-sm">
                                                    <input
                                                        className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                                                        name="date"
                                                        id="date"
                                                        type="date"
                                                        placeholder="Date"
                                                        required
                                                    />
                                                </div>

                                               
                                            

                                            

                                            <div className="space-y-1 text-sm">
                                                    <input
                                                        className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                                                        name="startTime"
                                                        id="startTime"
                                                        type="time"
                                                        placeholder="Start Time"
                                                        required
                                                    />
                                                </div>

                                            <div className="space-y-1 text-sm">
                                                    <input
                                                        className="w-full px-4 py-3 text-gray-800 border border-black-300 focus:outline-blue-500  rounded-md "
                                                        name="endTime"
                                                        id="endTime"
                                                        type="time"
                                                        placeholder="End Time"
                                                        required
                                                    />
                                                </div>

                                         



                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full p-3 mt-5 text-center font-medium text-black transition duration-200 rounded shadow-md bg-accent"
                                        >
                                            {loading ? (
                                                <TbFidgetSpinner
                                                    className="m-auto animate-spin"
                                                    size={24}
                                                />
                                            ) : (
                                                "Save & Continue"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AddSlotModal;