import useAuth from "../../providers/Auth";

const AllTouristsSpot = () => {
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
      <h1 className="text-5xl">Here is coming All Tourists Spot</h1>
    </div>
  );
};

export default AllTouristsSpot;
