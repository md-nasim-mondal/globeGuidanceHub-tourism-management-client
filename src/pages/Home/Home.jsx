import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";

const Home = () => {
  const loadedTouristsSpot = useLoaderData();

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
      <h1 className="text-7xl text-center text-black my-12">This is Home Page: {loadedTouristsSpot.length}</h1>
    </div>
  );
};

export default Home;
