import { Link } from "react-router-dom";
import bg from "../../assets/meeting.jpg"

const Banner = () => {
  return (
    <div className="relative h-[80vh] flex items-center bg-blue-500 text-white">
      <div className="w-1/2 px-12">
        <h1 className="text-4xl font-bold mb-4">
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p className="text-xl mb-6">
          Efficient, hassle-free room booking for all your meeting needs
        </p>
        <Link to="/meeting-rooms" className="px-6 py-3 bg-green-500 rounded">
          Book Now
        </Link>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={bg}
          alt="Meeting Room"
          className="object-cover min-h-[40vh]"
        />
      </div>
    </div>
  );
};

export default Banner;