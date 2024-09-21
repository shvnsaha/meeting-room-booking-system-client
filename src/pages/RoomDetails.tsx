

import { Link, useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../redux/features/room/roomApi";
import { useState } from "react";


const RoomDetails = () => {
    const { id } = useParams();
     const { data, isLoading } = useGetSingleRoomQuery(id);

     


    const [images, setImages] = useState({
        img1: data?.data.image,
        img2: "https://readymadeui.com/images/laptop2.webp",
        img3: "https://readymadeui.com/images/laptop3.webp",
        img4: "https://readymadeui.com/images/laptop4.webp"
    })

    const [activeImg, setActiveImg] = useState(images.img1)

    const handleImageClick = (img) => {
        setActiveImg(img);
    };

   

    if(isLoading){
        return <p>Loadeee</p>
    }

    return (
        <div>
            <div className=" bg-white">
                <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                <div className='flex justify-center  
            
                    overflow-hidden 
                    rounded-xl'>
                                    <img
                                        src={activeImg}
                                        alt="Product"
                                        className="max-h-96  rounded object-cover hover:scale-105 duration-500 transition-transform"
                                    />
                                </div>
                                <button type="button" className="absolute top-4 right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        fill="#ccc"
                                        className="mr-1 hover:fill-[#333]"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">

                                {Object.values(images).map((img, index) => (
                                    <div key={index} className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                                        <img
                                            src={img}
                                            alt="Product2"
                                            className="w-24 cursor-pointer"
                                            onClick={() => handleImageClick(img)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="lg:col-span-2 text-center lg:text-left space-y-3">
                        
                            <h1 className='text-xl md:text-3xl font-bold text-blue-500'>{data?.data.name}</h1>
                            {
                                data.data.amenities.map((item: string)=><span className="text-xs font-semibold text-green-600"># {item}</span>)
                            }
                            <p className='font-semibold'>Room Number : {data?.data.roomNo}</p>
                            <p className='font-semibold'>Floor Number : {data?.data.roomNo}</p>
                            <p className='font-semibold'>Capacity : {data?.data.roomNo} Peoples</p>
                            <p className='font-semibold'>Price : {data?.data.pricePerSlot} BDT</p>
                            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam placeat, numquam impedit eaque officia minus consequatur aliquid facere temporibus porro magni quia pariatur nisi minima! Adipisci qui delectus cumque accusantium!</p>  
                            <Link to={`/book/${data.data._id}`} className="btn btn-outline">Book Now</Link>    
                        </div>
                    </div>






                </div>


            </div>
        </div>
    );
};

export default RoomDetails;