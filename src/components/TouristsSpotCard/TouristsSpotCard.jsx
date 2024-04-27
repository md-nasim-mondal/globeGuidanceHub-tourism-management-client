import PropTypes from "prop-types";
const TouristsSpotCard = ({ touristSpot }) => {
  const {
    image,
    touristsSpotName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = touristSpot;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure className="p-8">
        <img
          src={image}
          alt="photo coming soon.."
          className="w-full rounded-xl"
        />
      </figure>
      <div className="card-body mx-4">
        <h2 className="card-title">Tourist Spot Name: {touristsSpotName}</h2>
            <p>Seasonality: {seasonality} </p>
        <div className="flex justify-between ">
            <p className="">Travel Time: {travelTime}</p>
            <p className="text-end">Average Cost: {averageCost} $</p>
        </div>
        <h3 className="text-2xl">Total Visitors Per Year : {totalVisitorsPerYear} Persons</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">ViewDetails</button>
        </div>
      </div>
    </div>
  );
};

TouristsSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default TouristsSpotCard;
