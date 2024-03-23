import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-gray-400 font-serif text-white">
        <img
          className="w-screen h-screen object-cover absolute mix-blend-overlay"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        />

        <div className="content m-2 absolute top-52 sm:top-52 lg:left-12">
          <h1 className="heading pt-3 text-xl lg:text-2xl">
            Find The Job That Fits Your Life
          </h1>

          <p className="home-text w-full pt-3 text-lg lg:text-xl lg:w-[700px]">
            Millions of people are searching for jobs, salary, information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <div className="pt-5">
            <Link to="/jobs">
              <button
                type="button"
                className="focus:ring-4 home-btn bg-indigo-600 text-white hover:shadow-xl rounded-md p-2 w-32 lg:text-lg"
              >
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
