import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
  const touristsSpot = useLoaderData();
  return (
    <div className="min-h-[80vh]">
      <h2 className="text-5xl text-base-content">
        Details Of : {touristsSpot.touristsSpotName}
      </h2>
    </div>
  );
};

export default TouristsSpotDetails;
