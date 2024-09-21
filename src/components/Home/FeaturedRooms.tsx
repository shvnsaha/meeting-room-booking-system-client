

import { Link } from 'react-router-dom';

import Card from '../shared/Card';
import { useGetRoomsQuery } from '../../redux/features/room/roomApi';
import { TRoom } from '../../types/inde';


const FeaturedRooms = () => {

    const {data:rooms,isLoading} = useGetRoomsQuery(undefined)
    if(isLoading){
        return <p>Loading...</p>
    }

    console.log(rooms);
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms?.data.map((room:TRoom) => (
                    <Card room={room}></Card>
                ))}
            </div>
            <Link to="/meeting-rooms" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300">
                See More
            </Link>
        </div>
    );
};

export default FeaturedRooms;
