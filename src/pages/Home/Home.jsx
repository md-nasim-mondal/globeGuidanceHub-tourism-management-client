import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";

const Home = () => {
  const loadedTouristsSpot = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [displayTouristsSpot, setDisplayTouristsSpot] = useState(loadedTouristsSpot)

  const { loading } = useAuth();

  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
      {
        displayTouristsSpot.slice(0, 6).map(spot => <TouristsSpotCard key={spot._id} touristSpot={spot}></TouristsSpotCard>)
      }
      </div>
    </div>
  );
};

export default Home;
