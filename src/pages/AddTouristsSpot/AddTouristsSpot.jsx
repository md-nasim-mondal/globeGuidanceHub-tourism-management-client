import Swal from "sweetalert2";
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
    // send data to the server
    fetch(
      "https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successful",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            showConfirmButton: false,
            position: "top",
            timer: 1000,
          });
        }
      });
  };

  const inputClasses = "w-full px-4 py-3 rounded-md border border-accent focus:border-4 focus:text-secondary"

  const labelClasses = "label label-text font-semibold text-lg text-accent"

  return (
        <div className="text-center px-6 md:px-10 py-8 lg:px-28 lg:py-16 bg-base-100 lg:w-3/4 rounded-md mx-auto my-24 border shadow-xl">
          <div>
            <h2 className="text-5xl pb-6 font-extrabold text-secondary ">
              Add a New Tourists Spot
            </h2>
            <p className="text-lg text-center md:w-[90%] mx-auto text-accent pb-12">
              Share your favorite travel destinations with GlobeGuidanceHub&apos;s
              Tourist Spot Form. Contribute to our growing collection of
              must-see places, inspiring fellow travelers to explore new
              horizons and create unforgettable memories.
            </p>
          </div>
          <form
            onSubmit={handleAddSpot}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div>
              <div className="form-control">
                <label className={labelClasses}>
                    Tourists Spot Name
                </label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="Enter Tourists Spot Name"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
                <label className={labelClasses}>
                    Country Name
                </label>
                <select
                  name="country"
                  id="country"
                  className={inputClasses}>
                  <option>Select Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter spot location"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    Travel Time
                </label>
                <input
                  type="text"
                  name="travelTime"
                  placeholder="Enter travel_time => like- 7 days"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder={user?.displayName}
                  value={user?.displayName}
                  readOnly
                  className={inputClasses}
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
              <label className={labelClasses}>
                    Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter Spot Photo URL"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    Average Cost
                </label>
                <input
                  type="number"
                  name="averageCost"
                  placeholder="Enter Spot Average Cost in Dollar"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    Seasonality
                </label>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Enter seasonality - like summer, winter"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    Total Visitors Per Year
                </label>
                <input
                  type="number"
                  name="totalVisitors"
                  placeholder="Enter totalVisitorsPerYear => like- 10000"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="form-control">
              <label className={labelClasses}>
                    User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Please Enter Your Email by which Email You Signed In"
                  value={user?.email}
                  readOnly
                  className={inputClasses}
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
                  className="w-full px-4 py-3 md:min-h-32 rounded-md border focus:border-4 focus:text-secondary"></textarea>
              </div>
              <input
                type="submit"
                value="Add Tourists Spot"
                className="btn w-full bg-secondary rounded-md text-accent"
              />
            </div>
          </form>
        </div>
  );
};

export default AddTouristsSpot;
