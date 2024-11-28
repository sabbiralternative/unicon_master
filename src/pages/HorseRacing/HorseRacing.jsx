import HorseGreyhound from "../../components/shared/HorseGreyhound/HorseGreyhound";
import { useGetAllGroupEventsQuery } from "../../redux/features/events/events";

const HorseRacing = () => {
  const { data } = useGetAllGroupEventsQuery(7, {
    pollingInterval: 1000,
  });
  return <HorseGreyhound data={data} title="Horse Racing" />;
};

export default HorseRacing;
