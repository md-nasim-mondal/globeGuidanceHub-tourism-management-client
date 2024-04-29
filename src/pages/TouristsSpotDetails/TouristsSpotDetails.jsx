import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
    const touristsSpot = useLoaderData();
    console.log(touristsSpot);
    return (
        <div>
            <h2 className="text-5xl text-primary-content">My tourists Spot Name is : {touristsSpot.touristsSpotName}</h2>
        </div>
    );
};

export default TouristsSpotDetails;