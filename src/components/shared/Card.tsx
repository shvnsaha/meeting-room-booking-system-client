
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import image from "../../assets/meeting.jpg"
import { TRoom } from "../../types/inde";



const Card = ({ room }:{room: TRoom}) => {

    console.log(room);

    return (


        <div className='col-span-1  cursor-pointer group border-2 bg-white hover:shadow-xl rounded-xl p-2'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
                aspect-square 
                w-full 
                h-60
                relative 
                overflow-hidden 
                rounded-xl
              '
                >
                    <img
                        className='
                  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
                '
                        src={image}
                        alt='Room'
                    />
                    <div
                        className='
                absolute
                top-3
                right-3
              '
                    ></div>
                </div>
                 <div className='font-semibold text-lg'>{room.name}</div>
                 <p>Capacity : {room.capacity}</p>
                 <p>Price : {room.pricePerSlot}</p>

                <Link to={`/room/${room._id}`} className='btn btn-outline'>View Details <FaArrowTrendUp ></FaArrowTrendUp> </Link>
            </div>

        </div>




    );
};

export default Card

