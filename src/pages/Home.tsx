import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import FeaturedRooms from "../components/Home/FeaturedRooms";
import FeaturedSection from "../components/Home/FeaturedSection";
import HowItWorks from "../components/Home/HowItWorks";
import ServiceCard from "../components/Home/ServiceCard";
import Testimonials from "../components/Home/Testimonials";



const Home = () => {



    return (
        <div className="space-y-8">
            <Helmet>
                <title>Meeting Room | Home</title>
            </Helmet>
            <Banner />
            <ServiceCard />
            <FeaturedRooms />
            <FeaturedSection />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default Home;