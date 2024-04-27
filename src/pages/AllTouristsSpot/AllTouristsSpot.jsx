import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";

const AllTouristsSpot = () => {
  const { loading } = useAuth();
  const loadedTouristsSpot = useLoaderData();
  // console.log(loadedTouristsSpot);
  const [touristsSpot, setTouristsSpot] = useState(loadedTouristsSpot)

  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl">Here is coming All Tourists Spot: {loadedTouristsSpot.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          touristsSpot.map(spot => <TouristsSpotCard key={spot._id} touristSpot={spot} setTouristsSpot={setTouristsSpot}></TouristsSpotCard>)
        }
      </div>
    </div>
  );
};

export default AllTouristsSpot;
