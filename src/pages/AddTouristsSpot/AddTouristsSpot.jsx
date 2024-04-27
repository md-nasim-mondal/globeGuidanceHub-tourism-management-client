import useAuth from "../../providers/Auth";

const AddTouristsSpot = () => {
  const { user } = useAuth();
  const handleAddSpot = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.photo.value;
    const touristsSpotName = form.spotName.value;
    const countryName = form.country.value;
    const location = form.location.value;
    const shortDescription = form.description.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitors.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userName,
      userEmail,
    };
    console.log(newSpot);

    // send data to the server
    

  };
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="text-center px-10 py-7 lg:px-28 lg:py-16 bg-[#F4F3F0] lg:w-3/4 rounded-md mx-auto">
          <h2 className="text-5xl pb-6 font-extrabold text-black">
            Add a New Tourists Spot
          </h2>
          <form
            onSubmit={handleAddSpot}
            className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Tourists Spot Name
                  </span>
                </label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="Enter Tourists Spot Name"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Country Name
                  </span>
                </label>
                <select
                  name="country"
                  id="country"
                  className="font-semibold text-xl w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600">
                  <option>Select Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
                {/* <input
                  type="text"
                  name="countryName"
                  placeholder="Enter Spot Country Name"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                /> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter spot location"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Travel Time
                  </span>
                </label>
                <input
                  type="text"
                  name="travelTime"
                  placeholder="Enter travel_time => like- 7 days"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder={user?.displayName}
                  value={user?.displayName}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter Spot Photo URL"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Average Cost
                  </span>
                </label>
                <input
                  type="text"
                  name="averageCost"
                  placeholder="Enter Spot Average Cost"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Seasonality
                  </span>
                </label>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Enter seasonality - like summer, winter"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Total Visitors Per Year
                  </span>
                </label>
                <input
                  type="number"
                  name="totalVisitors"
                  placeholder="Enter totalVisitorsPerYear => like- 10000"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg text-black">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Please Enter Your Email by which Email You Signed In"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-black">
                    Short Description
                  </span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="w-full px-4 py-3 md:min-h-32 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"></textarea>
              </div>
              <input
                type="submit"
                value="Add Tourists Spot"
                className="btn w-full bg-[#D2B48C] border-2 rounded-md border-[#331A15] text-black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
