import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";

const AllTouristsSpot = () => {
  const { loading } = useAuth();
  const loadedTouristsSpot = useLoaderData();
  const [touristsSpot, setTouristsSpot] = useState(loadedTouristsSpot);
  const handleSortByCost = (e) => {
    const value = e.target.value;
    if (value == "lowToHighCost") {
      const sortedSpots = [...touristsSpot].sort(
        (a, b) => a.averageCost - b.averageCost
      );
      setTouristsSpot(sortedSpots);
    }
  };

  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl text-primary-content text-center pt-12">
        All Tourists Spot
      </h1>
      <div className="flex justify-center items-center py-12">
        <select
          name="sort"
          className="font-semibold text-xl  px-6 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100  focus:bg-gray-900  focus:border-green-600"
          onChange={handleSortByCost}>
          <option value="">Sort By</option>
          <option value="lowToHighCost">Low Cost to High Cost</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {touristsSpot.map((spot) => (
          <TouristsSpotCard
            key={spot._id}
            touristSpot={spot}
            setTouristsSpot={setTouristsSpot}></TouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
