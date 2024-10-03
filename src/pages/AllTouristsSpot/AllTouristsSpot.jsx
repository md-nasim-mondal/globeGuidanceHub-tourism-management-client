import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";
import { Typewriter } from "react-simple-typewriter";

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
    <div className="min-h-[80vh] pt-12 pb-24">
      <div className="flex justify-center text-secondary items-center my-8 text-[42px] ">
        <Typewriter
          words={["Our All", "Tourists Spot", "Is Here"]}
          loop={true}
          cursor
          cursorStyle="~"
          typeSpeed={170}
          deleteSpeed={80}
          delaySpeed={1200}
          style={{ fontSize: "24px" }}
        />
      </div>
      <div>
        <p className="text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-accent">
          Discover a world of wonders with GlobeGuidanceHub&apos;s All Tourist
          Spots section. From iconic landmarks to hidden gems, explore a curated
          collection of must-see destinations that will inspire your wanderlust
          and fuel your travel dreams.
        </p>
      </div>
      <div className="flex justify-center items-center py-12">
        <select
          name="sort"
          className="font-semibold text-xl  px-6 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100  focus:bg-gray-900 focus:border-secondary text-accent"
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
