import { useSelector } from "react-redux";
import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";

import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import Banner from "../../../components/ui/desktop/Home/Banner";
import Originals from "../../../components/ui/desktop/Home/Originals";
import InPlay from "../../../components/ui/desktop/Home/InPlay";

// import UpcomingEvents from "../../../components/ui/desktop/Home/UpcomingEvents";
import FAQ from "../../../components/ui/desktop/Home/FAQ";
import WhatsApp from "../../../components/ui/desktop/Home/WhatsApp";
// import WithdrawAndDepositButton from "../../../components/ui/desktop/Home/WithdrawAndDepositButton";
import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import isRefetchGroupData from "../../../utils/isRefetchGroupData";
import Group from "../../../components/ui/desktop/Home/Group";
import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
import IndianCardGames from "../../../components/ui/IndianCardGames/IndianCardGames";
import PopularGames from "../../../components/ui/PopularGames/PopularGames";

const Home = () => {
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: isRefetchGroupData(group) ? 1000 : null,
  });

  return (
    <>
      <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[54px]">
        <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
          <LeftDeskSidebar />
          {group === 0 ? (
            <>
              <div
                className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
                style={{ minHeight: "calc(-54px + 100dvh)" }}
              >
                <WhatsApp />

                <Banner />

                <div
                  id="home"
                  className="py-1 flex flex-col items-start justify-start"
                >
                  <Originals />
                  {/* <WithdrawAndDepositButton /> */}
                  {data && <InPlay data={data} />}
                  <CasinoProvider />
                  <IndianCardGames />
                  <PopularGames />
                  {/* <UpcomingEvents /> */}
                </div>
                <FAQ />
              </div>
            </>
          ) : (
            <Group data={data} />
          )}
          <RightDeskSidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
