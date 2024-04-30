import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useEffect, useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";
import Sliders from "../../components/Sliders/Sliders";
import Country from "../Country/Country";

const Home = () => {
  const loadedTouristsSpot = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [displayTouristsSpot, setDisplayTouristsSpot] =
    useState(loadedTouristsSpot);
  const [countries, setCountries] = useState([]);

  const { loading } = useAuth();

  useEffect(()=> {
    fetch('https://globe-guidance-hub-tourism-management-server.vercel.app/countries').then(res => res.json())
    .then(data =>{ 
      setCountries(data)})
  }, [])

  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
    {/* Banner Section */}
    <section>
      <Sliders/>
    </section>
      {/* Tourists Spot Section */}
      <section>
        <div className="pt-28">
          <h1 className="text-3xl md:text-5xl text-base-content text-center pb-8 font-bold">
            Tourists Spot
          </h1>
          <p className="md:text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-base-content">
            Embark on a journey of discovery with GlobeGuidanceHub&apos;s
            Tourist Spot section. Dive into a world of iconic landmarks, hidden
            gems, and must-see attractions, curated to inspire your next
            adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-28">
          {displayTouristsSpot.slice(0, 6).map((spot) => (
            <TouristsSpotCard
              key={spot._id}
              touristSpot={spot}></TouristsSpotCard>
          ))}
        </div>
      </section>
      {/* Top Traveling Destination */}

      <section>
        <div className="pb-12">
          <h1 className="text-3xl md:text-5xl text-base-content text-center pb-8 font-bold">
            Top Traveling Destination
          </h1>
          <p className="md:text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-base-content">
            Discover iconic landmarks, tropical paradises, vibrant cities, and
            ancient wonders with GlobeGuidanceHub&apos;s Top Traveling
            Destinations. Lose yourself in breathtaking landscapes, cultural
            experiences, and culinary delights worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Section */}

      <section>
        <div className="pb-12">
          <h1 className="text-3xl md:text-5xl text-base-content text-center pb-8 font-bold">
            Countries
          </h1>
          <p className="md:text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-base-content">
            Explore diverse destinations around the globe with
            GlobeGuidanceHub&apos;s Country Section. Discover rich cultural
            heritage, breathtaking landscapes, and practical travel information
            to help you plan your next international adventure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* <Countries></Countries> */}
          {
            countries.slice(0, 6).map(country => <Country key={country._id} country={country}></Country>)
          }
        </div>
      </section>

      {/* Popular Tourism Country Section */}
      <section>
        <div className="hero mb-28 bg-base-200 bg-opacity-20 py-12 rounded-3xl">
          <div className="hero-content p-0 md:p-4 flex-col lg:flex-row-reverse gap-8 xl:gap-12">
            <div className="text-center lg:text-left">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold">
                  Popular Tourism Countries
                </h1>
                <p className="py-6 md:text-lg text-center break-words mx-auto text-base-content">
                  Explore the world&apos;s most sought-after tourist
                  destinations on GlobeGuidanceHub. From bustling cities to
                  serene beaches, discover iconic landmarks, cultural treasures,
                  and unforgettable experiences across the globe.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-6">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl">Bangladesh</h3>
                    <button className="btn-link">View All Tours</button>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl">Bangladesh</h3>
                    <button className="btn-link">View All Tours</button>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl">Bangladesh</h3>
                    <button className="btn-link">View All Tours</button>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl">Bangladesh</h3>
                    <button className="btn-link">View All Tours</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-xs md:max-w-xl shadow-2xl bg-base-100">
              <h1 className="text-2xl text-base-content text-center pt-12 px-6 font-semibold">
                Subscribe For Getting Our Latest Update News
              </h1>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Your Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">SubsCribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
