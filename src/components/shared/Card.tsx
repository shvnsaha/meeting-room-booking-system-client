
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import image from "../../assets/meeting.jpg"



const Card = ({ room }:any) => {

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
                {/* <div className='font-semibold text-lg'>{product.name}</div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-xs text-violet-900'>{product.brand}</div>
                    <div className='font-semibold text-xs text-violet-900'>{product.available_quantity} in stocks</div>
                </div>

                <div className='flex items-center text-xs text-gray-700 justify-between'>
                    <div className='flex items-center text-xs text-gray-700 gap-2'>
                        <Ratings rating={product.rating}></Ratings>
                        <span>({product.rating})</span>
                    </div>


                </div>

                <div className='flex justify-between items-center'>
                    <div className='font-semibold flex items-center text-orange-800'>{product?.price} BDT</div>
                </div> */}

                <Link to={"/"} className='btn btn-outline'>View Details <FaArrowTrendUp ></FaArrowTrendUp> </Link>
            </div>

        </div>




    );
};

export default Card

