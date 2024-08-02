"use client";

import React from "react";
import Navbar from "../Navbar/index";
import BackGroundImage from "../BackGroundImage/index"

const InfluencerRequirement = ({ handleNext, handlePrevious }) => {
  return (
    <>
      <BackGroundImage />
      <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
        <div className="w-full sm:h-[70vh] flex flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="w-2/3 h-full px-10 flex flex-col items-center justify-between">
            <div className="w-full">
              <h1 className="my-4 w-full text-center text-5xl font-sans font-bold text-gray-900">
                Influencer Requirement
              </h1>
              <div className="mt-10 w-2/3 mx-auto">
                <h3 className="text-start font-normal text-gray-900">Enter the following details</h3>
                <div className="mt-2">
                  <select
                    id="influencer-size"
                    name="influencer-size"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Influencer Size
                    </option>
                    <option className="text-black" value="size1">Size 1</option>
                    <option className="text-black" value="size2">Size 2</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Category
                    </option>
                    <option className="text-black" value="category1">Category 1</option>
                    <option className="text-black" value="category2">Category 2</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="age"
                    name="age"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Age
                    </option>
                    <option className="text-black" value="age1">Age 1</option>
                    <option className="text-black" value="age2">Age 2</option>
                  </select>
                </div>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option className="text-black" value="" disabled selected>
                      Location
                    </option>
                    <option className="text-black" value="location1">Location 1</option>
                    <option className="text-black" value="location2">Location 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button
                onClick={handlePrevious}
                type="button"
                className="flex justify-center rounded-md bg-gray-600 px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                type="submit"
                className="flex justify-center rounded-md bg-[#F27430] px-7 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerRequirement;
