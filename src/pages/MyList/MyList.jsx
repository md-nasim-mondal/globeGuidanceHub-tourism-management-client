import { useEffect, useState } from "react";
import useAuth from "../../providers/Auth";

const MyList = () => {
  const [myTouristsSpot, setMyTouristsSpot] = useState([]);
  const { user } = useAuth() || {};
  useEffect(() => {
    fetch(`http://localhost:5000/touristsSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTouristsSpot(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-4xl text-black">
        Here is My WishList Coming Soon.... {myTouristsSpot.length}{" "}
      </h2>
    </div>
  );
};

export default MyList;
