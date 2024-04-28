import { useEffect, useState } from "react";
import useAuth from "../../providers/Auth";

const MyList = () => {
  const [myTouristsSpot, setMyTouristsSpot] = useState([]);
  const [touristSpot, setTouristSpot] = useState(null);
  const { user } = useAuth() || {};
  useEffect(() => {
    fetch(`http://localhost:5000/touristsSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTouristsSpot(data);
      });
  }, [user]);

  const openModal = () => {
    document.getElementById("my_modal_4").showModal()
  }
  const handleDelete = (id) => {
    // make sure user is confirmed to delete

    fetch(`http://localhost:5000/touristsSpot/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("deleted Successfully");
          // remove the user from the Ui
          const remainingTouristsSpot = myTouristsSpot.filter((user) => user._id !== id);
          setMyTouristsSpot(remainingTouristsSpot);
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl text-primary-content text-center py-8">
        My Added Tourists Spot List
      </h2>
      <div className="overflow-x-auto lg:w-3/4 mx-auto">
        <table className="table mx-auto">
          <thead>
            <tr>
              <th className="text-primary-content md:text-lg lg:text-xl"></th>
              <th className="text-primary-content md:text-lg lg:text-xl">
                Tourists Spot Name
              </th>
              <th className="text-primary-content md:text-lg lg:text-xl">
                Country
              </th>
              <th className="text-primary-content md:text-lg lg:text-xl">
                Seasonality
              </th>
              <th className="text-primary-content md:text-lg lg:text-xl">
                Travel Time
              </th>
              <th className="text-primary-content md:text-lg lg:text-xl pl-10">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myTouristsSpot.map((spot, idx) => (
              <tr key={spot._id}>
                <th className="text-primary-content md:text-lg lg:text-xl">
                  {idx + 1}
                </th>
                <td className="text-primary-content md:text-lg">
                  {spot.touristsSpotName}
                </td>
                <td className="text-primary-content md:text-lg">
                  {spot.countryName}
                </td>
                <td className="text-primary-content md:text-lg">
                  {spot.seasonality}
                </td>
                <td className="text-primary-content md:text-lg">
                  {spot.travelTime}
                </td>
                <td>
                  <div className="join join-horizontal">
                    <button
                      className="pr-4 btn-link"
                      onClick={() =>
                        {
                            openModal(); setTouristSpot(spot)
                        }
                      }>
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-warning">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-base-content">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Cancel Edit</button>
            </form>
          </div>
          <form
            // onSubmit={handleAddSpot}
            className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto md:items-center">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Tourists Spot Name
                  </span>
                </label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="Enter Tourists Spot Name"
                  defaultValue={touristSpot?.touristsSpotName}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Country Name
                  </span>
                </label>
                <select
                  name="country"
                  id="country"
                  className="font-semibold text-xl w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600">
                  <option value={touristSpot?.countryName}>{touristSpot?.countryName}</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter spot location"
                  defaultValue={touristSpot?.location}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Travel Time
                  </span>
                </label>
                <input
                  type="text"
                  name="travelTime"
                  placeholder="Enter travel_time => like- 7 days"
                  defaultValue={touristSpot?.travelTime}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter Spot Photo URL"
                  defaultValue={touristSpot?.image}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Average Cost
                  </span>
                </label>
                <input
                  type="number"
                  name="averageCost"
                  placeholder="Enter Spot Average Cost"
                  defaultValue={touristSpot?.averageCost}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Seasonality
                  </span>
                </label>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Enter seasonality - like summer, winter"
                  defaultValue={touristSpot?.seasonality}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Total Visitors Per Year
                  </span>
                </label>
                <input
                  type="number"
                  name="totalVisitors"
                  placeholder="Enter totalVisitorsPerYear => like- 10000"
                  defaultValue={touristSpot?.totalVisitorsPerYear}
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Short Description
                  </span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  defaultValue={touristSpot?.shortDescription}
                  className="w-full px-4 py-3 md:min-h-32 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"></textarea>
              </div>
              <input
                type="submit"
                value="Update Tourists Spot"
                method="dialog"
                className="btn w-full bg-[#D2B48C] border-2 rounded-md border-[#331A15] text-black"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyList;
