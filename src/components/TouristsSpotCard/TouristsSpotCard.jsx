import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristsSpotCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    touristsSpotName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = touristSpot;
  return (
    <div className='card card-compact bg-base-100 dark:bg-[#3d3d3d] shadow-xl'>
      <figure className='p-4 lg:p-8'>
        <img
          src={image}
          alt='photo coming soon..'
          className='w-full rounded-xl md:h-[280px] lg:h-[300px] xl:h-[330px]'
        />
      </figure>
      <div className='card-body mx-4 text-accent'>
        <h2 className='card-title text-secondary dark:text-[#1e90ff] md:text-lg lg:text-xl'>
          Tourist Spot Name: {touristsSpotName}
        </h2>
        <p className='text-sm md:text-base lg:text-lg'>
          Seasonality: {seasonality}
        </p>
        <div className='flex justify-between '>
          <p className=' text-sm md:text-base lg:text-lg'>
            Travel Time: {travelTime}
          </p>{" "}
          {/* Changed color to orange */}
          <p className='text-sm md:text-base lg:text-lg text-end'>
            Average Cost: {averageCost} $
          </p>
        </div>
        <h3 className='text-sm md:text-base lg:text-lg'>
          Total Visitors Per Year: {totalVisitorsPerYear} Persons
        </h3>
        <div className='card-actions justify-end'>
          <Link
            className='btn w-full bg-primary hover:text-accent dark:bg-primary text-base-100'
            to={`/touristsSpotDetails/${_id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristsSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default TouristsSpotCard;
