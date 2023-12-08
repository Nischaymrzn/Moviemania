import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://nischay-backend-movies.onrender.com/api/movies"
        );
        const data = await response.json();

        setShows(data);
        return data;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <div className="grid items-center justify-center w-full grid-cols-4 p-24 pt-16 text-white gap-14">
      {loading && <p>Loading...</p>}
      {!loading &&
        shows &&
        shows.map((data) => (
          <div key={data.id} className="flex flex-col gap-6">
            <Link to={`/${data._id}`}>
              <div className="relative">
                <img
                  src={data.poster}
                  alt="error"
                  className="object-cover w-full rounded-lg cursor-pointer border-dark-border aspect-[16/19]"
                />

                <p className="absolute top-0 right-0 px-4 py-2 m-4 font-semibold capitalize rounded-md transparent text-neutral_white">
                  {data.type}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <p className="text-base font-semibold">{data.title}</p>

                <div className="flex items-center gap-3 text-sm text-neutral_light">
                  <p>{data.released}</p>

                  <div className="w-2 h-2 rounded-full bg-text-secondary"></div>

                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
