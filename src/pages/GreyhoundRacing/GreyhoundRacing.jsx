import HorseGreyhound from "../../components/shared/HorseGreyhound/HorseGreyhound";
import { useGetAllGroupEventsQuery } from "../../redux/features/events/events";

const GreyhoundRacing = () => {
  const { data } = useGetAllGroupEventsQuery(4339, {
    pollingInterval: 1000,
  });
  return <HorseGreyhound data={data} title="Greyhound Racing" />;
};

export default GreyhoundRacing;
