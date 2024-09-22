import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slider";
import { useGetRoomsQuery } from "../redux/features/room/roomApi";
import Card from "../components/shared/Card";
import { TRoom } from "../types/inde";
import CardSkeleton from "../components/shared/CardSkeleton";



const Rooms = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [sortPrice, setSortPrice] = useState("");
    const [capacity, setCapacity] = useState([0, 200]);
    const [price, setPrice] = useState([0, 10000]);

    const handleCapacityChange = (newValues: number[]) => {
        setCapacity(newValues);
    };
    const handlePriceChange = (newValues: number[]) => {
        setPrice(newValues);
    };

    const params = `searchTerm=${searchTerm}&sort=${sortPrice}&minPrice=${price[0]}&maxPrice=${price[1]}&minCapacity=${capacity[0]}&maxCapacity=${capacity[1]}`;

   const {data,isLoading}= useGetRoomsQuery(params)


   const handleClear = () =>{
    setPrice([0,10000])
    setCapacity([0,200])
    setSortPrice("")
    setSearchTerm("")
  }

    return (
        <div className="px-4">
            <Helmet>
                <title>E-Shop | Buy Your Products</title>
            </Helmet>

            <div
                className="banner h-52 bg-blend-overlay rounded-lg"
                data-aos="fade-down"
                data-aos-delay="400"
            >
                <h2
                    className=" text-2xl text-center ml-2 sm:ml-0 lg:text-5xl font-bold text-green-600 pt-10"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Find Your Desired Room
                </h2>
                <div
                    className="flex  justify-center pt-8 items-center"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Here"
                        value={searchTerm}
                        className="md:w-[30%] w-40 h-[50px] p-3 rounded-full border-2 border-[#DEDEDE]"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div
                className="bg-green-200 p-2 rounded-lg"
                data-aos="fade-down"
                data-aos-delay="400"
            >
                <div className="bg-white p-8 rounded-lg flex flex-col lg:flex-row justify-between gap-5 items-center">
                    <div>
                        <h2 className="font-semibold text-2xl">Filter By:</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <button onClick={handleClear} className="btn btn-outline">Clear Filter</button>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                            <div className="flex gap-2 rounded-sm items-center">
                                <label className="text-lg font-semibold">Sort:</label>
                                <select
                                    className=" select max-w-xs focus:outline-none text-base font-medium border-green-700   select-bordered w-full "
                                    onChange={(e) => setSortPrice(e.target.value)}
                                    value={sortPrice}
                                >
                                    <option value="">Choose One</option>
                                    <option value="pricePerSlot">Low to High</option>
                                    <option value="-pricePerSlot">High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div>
                                <h1>Price: </h1>
                            </div>
                            <div>
                                <div className=" flex justify-between">
                                    <p>min: {price[0]}</p>
                                    <p>max: {price[1]}</p>
                                </div>
                                <Slider
                                    value={price}
                                    onChange={handlePriceChange}
                                    min={0}
                                    max={1000}
                                    className="w-52 h-0.5 bg-gray-200 rounded-lg relative"
                                    thumbClassName="bg-blue-500 w-2 h-2 top-[-1px] rounded-full cursor-pointer absolute"
                                    trackClassName={`bg-red-300 h-[5px] rounded-md`}
                                    ariaLabel={["Min Price", "Max Price"]}
                                    ariaValuetext={(state) => `Value ${state.valueNow}`}
                                    pearling
                                    minDistance={10}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <h1>Capacity: </h1>
                            </div>
                            <div>
                                <div className=" flex justify-between">
                                    <p>min: {capacity[0]}</p>
                                    <p>max: {capacity[1]}</p>
                                </div>
                                <Slider
                                    value={capacity}
                                    onChange={handleCapacityChange}
                                    min={0}
                                    max={200}
                                    className="w-32 h-0.5 bg-gray-200 rounded-lg relative"
                                    thumbClassName="bg-blue-500 w-2 h-2 top-[-1px] rounded-full cursor-pointer absolute"
                                    trackClassName={`bg-red-300 h-[5px] rounded-md`}
                                    ariaLabel={["Min Capacity", "Max Capacity"]}
                                    ariaValuetext={(state) => `Value ${state.valueNow}`}
                                    pearling
                                    minDistance={10}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"

                >
                    {Array.from({ length: 10 }, (_, index: number) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            ) : data?.data.length > 0 ? (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 my-10"

                >
                    {data?.data.map((room: TRoom) => (
                        <Card key={room._id} room={room}></Card>
                    ))}
                </div>
            ) : (
                <div className="col-span-3 h-96 flex my-20 justify-center items-center">
                    <p>No Product Found</p>
                </div>
            )}



        </div>
    );
};

export default Rooms;