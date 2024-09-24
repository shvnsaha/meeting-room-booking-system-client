import { Helmet } from "react-helmet-async";
import MeetTeam from "../components/AboutUs/MeetTeam";
import OurMission from "../components/AboutUs/OurMission";
import OurStory from "../components/AboutUs/OurStory";


const AboutUs = () => {
    return (
        <div className="space-y-8">
            <Helmet>
                <title>Meeting Room | About Us</title>
            </Helmet>
            <OurMission />
            <MeetTeam />
            <OurStory />
        </div>
    );
};

export default AboutUs;