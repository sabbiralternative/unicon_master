import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Banner from "../../components/ui/Home/Banner";
import BetSlip from "../../components/ui/Home/BetSlip";
import Casino from "../../components/ui/Home/Casino";
import IndianCardGames from "../../components/ui/Home/IndianCardGames";
import InPlay from "../../components/ui/Home/InPlay";
import PopularGames from "../../components/ui/Home/PopularGames";
import UpcomingEvents from "../../components/ui/Home/UpcomingEvents";
import { useGetAllGroupEventsQuery } from "../../redux/features/home/homeApi";

const Home = () => {
  const {data}  = useGetAllGroupEventsQuery()
  console.log(data);

  return (
    <div>
      <div className="main_container ">
        <Sidebar />
        <div className="main_container-center   11111 ">
          <div style={{ height: "100%" }}>
            <div className="default-page__content">
              <Banner />
              <ion-item-group
                className="inplay-content md item-group-md item hydrated"
                role="group"
              >
                <InPlay />

                <IndianCardGames />

                <PopularGames />
                <Casino />
                <ion-list className="inplay-item-list md list-md hydrated"></ion-list>
                <ion-list className="inplay-item-list md list-md hydrated"></ion-list>
                <ion-list className="inplay-item-list md list-md hydrated"></ion-list>
              </ion-item-group>

              <UpcomingEvents />
            </div>
          </div>
        </div>
        <BetSlip />
      </div>
    </div>
  );
};

export default Home;
