
import { useSelector } from "react-redux";
import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";
import isRefetchGroupData from "../../../function/home/isRefetchGroupData";
import Sidebar from "../../../components/shared/desktop/Sidebar/Sidebar";
import Banner from "../../../components/ui/desktop/Home/Banner";
import InPlay from "../../../components/ui/desktop/Home/InPlay";
import IndianCardGames from "../../../components/ui/desktop/Home/IndianCardGames";
import PopularGames from "../../../components/ui/desktop/Home/PopularGames";
import Casino from "../../../components/ui/desktop/Home/Casino";
import UpcomingEvents from "../../../components/ui/desktop/Home/UpcomingEvents";
import Group from "../../../components/ui/desktop/Home/Group";
import BetSlip from "../../../components/ui/desktop/Home/BetSlip";

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
            {group === 0 ? (
              <div className="default-page__content">
                <Banner />
                <div
                  className="inplay-content md item-group-md item hydrated"
                  role="group"
                >
                  {data && <InPlay data={data} />}

                  <IndianCardGames />
                  <PopularGames />
                  <Casino />
                </div>
                <UpcomingEvents />
              </div>
            ) : (
              <div className="default-page__content">
                <div
                  className="inplay-content md item-group-md item hydrated"
                  role="group"
                >
                  {data && <Group data={data} />}
                  <Banner />
                </div>
              </div>
            )}
          </div>
        </div>
        <BetSlip />
      </div>
    </div>
  );
};

export default Home;
