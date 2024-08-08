import { useSelector } from "react-redux";
import Banner from "../../../components/ui/mobile/Banner/Banner";
import Casino from "../../../components/ui/mobile/Casino/Casino";
import IndianCardGames from "../../../components/ui/mobile/IndianCardGames/IndianCardGames";
import InPlay from "../../../components/ui/mobile/InPlay/InPlay";
import PopularGames from "../../../components/ui/mobile/PopularGames/PopularGames";
import UpcomingEvents from "../../../components/ui/mobile/UpcomingEvents/UpcomingEvents";
import isRefetchGroupData from "../../../function/home/isRefetchGroupData";
import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";

const Home = () => {
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: isRefetchGroupData(group) ? 1000 : null,
  });

  return (
    <>
      <Banner />
      <div
        className="inplay-content md item-group-md item hydrated"
        role="group"
        style={{ display: "block" }}
      >
    {data && <InPlay data={data} />}
        <IndianCardGames />
        <PopularGames />
        <Casino />
      </div>
      <UpcomingEvents />
    </>
  );
};

export default Home;
