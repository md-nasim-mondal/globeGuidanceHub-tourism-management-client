import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";
import { IoIosArrowDown } from "react-icons/io";

const AllTouristsSpot = () => {
  const { loading } = useAuth();
  const loadedTouristsSpot = useLoaderData();
  const [touristsSpot, setTouristsSpot] = useState(loadedTouristsSpot);
  const handleSortByCost = () => {
    const sortedSpots = [...touristsSpot].sort(
      (a, b) => a.averageCost - b.averageCost
    );
    setTouristsSpot(sortedSpots);
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
      <details className="dropdown text-center ">
        <summary className="m-1 btn flex items-center bg-green-400 border-0 text-lg text-white ">
          Sort By <IoIosArrowDown />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-40 rounded-xl">
          <li
            onClick={handleSortByCost}
            className="text-base font-semibold rounded-xl text-black bg-white">
            <a>Average Cost</a>
          </li>
        </ul>
      </details>
      <h1 className="text-5xl">
        Here is coming All Tourists Spot: {loadedTouristsSpot.length}
      </h1>
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
