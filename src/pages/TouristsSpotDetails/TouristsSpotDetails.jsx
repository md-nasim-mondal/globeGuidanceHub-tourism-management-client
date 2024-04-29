import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
    const touristsSpot = useLoaderData();
    return (
        <div>
            <h2 className="text-5xl text-primary-content">Details Of : {touristsSpot.touristsSpotName}</h2>
        </div>
    );
};

export default TouristsSpotDetails;