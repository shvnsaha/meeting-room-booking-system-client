import { Link } from "react-router-dom";
import bannr from "../../assets/meeting.jpg"

const Banner = () => {
  return (
    <div className="relative w-full h-60 md:h-80 lg:h-96 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannr} 
          alt="Modern Workspace"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center p-6">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Book Your Ideal Meeting Room with Ease.
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <Link to={'/rooms'} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
