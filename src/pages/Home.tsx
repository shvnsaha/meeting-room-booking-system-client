import Banner from "../components/Home/Banner";
import FeaturedRooms from "../components/Home/FeaturedRooms";
import FeaturedSection from "../components/Home/FeaturedSection";
import HowItWorks from "../components/Home/HowItWorks";
import ServiceCard from "../components/Home/ServiceCard";
import Testimonials from "../components/Home/Testimonials";
import { useGetRoomsQuery } from "../redux/features/room/roomApi";


const Home = () => {

    const {data,isLoading,error} = useGetRoomsQuery(undefined)
    console.log(data);
    return (
        <div>
            <Banner/>
            <ServiceCard/>
            <FeaturedRooms/>
            <FeaturedSection/>
            <HowItWorks/>
            <Testimonials/>
        </div>
    );
};

export default Home;