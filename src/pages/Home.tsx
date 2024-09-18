import Banner from "../components/Home/Banner";
import { useGetRoomsQuery } from "../redux/features/room/roomApi";


const Home = () => {

    const {data,isLoading,error} = useGetRoomsQuery(undefined)
    console.log(data);
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;