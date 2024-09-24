

import { Link } from 'react-router-dom';

import Card from '../shared/Card';
import { useGetRoomsQuery } from '../../redux/features/room/roomApi';
import { TRoom } from '../../types/inde';
import CardSkeleton from '../shared/CardSkeleton';


const FeaturedRooms = () => {

    const { data: rooms, isLoading } = useGetRoomsQuery(undefined)

    if (isLoading) {
        return (
            <div className="overflow-hidden">

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    {Array.from({ length: 6 }, (_, index: number) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto ">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms?.data.slice(0, 3).map((room: TRoom) => (
                    <Card room={room}></Card>
                ))}
            </div>
            <div className="flex justify-center pt-6">
                <Link to={"/product"} className="btn btn-outline">
                    See More
                </Link>
            </div>
        </div>
    );
};

export default FeaturedRooms;
