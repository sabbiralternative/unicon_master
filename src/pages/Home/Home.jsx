import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Banner from "../../components/ui/Home/Banner";
import BetSlip from "../../components/ui/Home/BetSlip";
import Casino from "../../components/ui/Home/Casino";
import Group from "../../components/ui/Home/Group";
import IndianCardGames from "../../components/ui/Home/IndianCardGames";
import InPlay from "../../components/ui/Home/InPlay";
import PopularGames from "../../components/ui/Home/PopularGames";
import UpcomingEvents from "../../components/ui/Home/UpcomingEvents";
import isRefetchGroupData from "../../function/home/isRefetchGroupData";
import { useGetAllGroupEventsQuery } from "../../redux/features/home/homeApi";
import { useSelector } from "react-redux";

const Home = () => {
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: isRefetchGroupData(group) ? 1000 : null,
  });

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
                {data && group === 0 && <InPlay data={data} /> }
                {data && group !== 0 && <Group data={data} /> }

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
