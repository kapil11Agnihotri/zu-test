import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSeciton() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-4">
          Hey IB Folks ! Unsure about the quality of your answers?
          <span className="text-purple-500"> We get you.</span>
        </h1>
        <div className=" bg-[#f5f7f8] p-6 rounded-3xl shadow-lg ">
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 mb-6 flex flex-col items-center justify-center bg-white">
            <div className="flex items-center justify-center w-full">
              <div className="w-16 h-16 bg-gray-100 rounded-sm flex items-center justify-center mb-4"></div>
              <p className="ml-4">File name.pdf</p>
              <button className="ml-auto text-gray-400 hover:text-red-500">
                ✕
              </button>
            </div>
          </div>

          <div className="flex flex-col ">
            <label className="text-[#7A8196] pb-2">
              Select your course & subjects*
            </label>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <select
                name="cars"
                id="cars"
                className="form-select border border-gray-300 rounded-full p-3"
              >
                <option value="" disabled selected>
                  Please Choose...
                </option>
              </select>

              <select className="form-select border border-gray-300 rounded-full p-3">
                <option>Subject</option>
              </select>
            </div>
          </div>

          <div className="mb-6 flex flex-col">
            <label className="text-[#7A8196] pb-2">
              Enter your essay title*(Required)
            </label>

            <input
              type="text"
              className="border border-gray-300 rounded-full p-3"
              placeholder="Enter your essay title*(Required)"
              value="how nation works....."
            />
          </div>
          <Link href="">
            <button className="bg-[#6947BF] text-white  text-lg	rounded-full p-2 pl-3 pr-6 hover:bg-purple-600 transition-colors flex gap-4 justify-end items-center">
              <span>
                <Image
                  width={25}
                  height={25}
                  src="/media/button start logo.svg"
                  alt="book-icon"
                />
              </span>
              Evaluate your Score
            </button>
          </Link>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-1/3 h-full px-8 py-4  flex flex-col justify-center items-center ">
        <Image
          width={250}
          height={250}
          src="/media/heroSectionRightBarImage.svg"
          alt="book-icon"
        />
        <div className="bg-white pt-6 px-6 rounded-3xl shadow-lg text-center  ">
          <h2 className="text-4xl text-left font-bold mb-4 text-[#6947BF]">
            Evaluate your x with a single click
          </h2>
          <div className="flex justify-center items-center mt-4 relative overflow-hidden	">
            <Image
              width={100}
              height={100}
              src="/media/Grade Report stars.svg"
              alt="book-icon"
              className="absolute transform scale-x-[-1] left-0 top-0 z-10"
            />
            <div className="absolute z-0 w-[10rem] h-[10rem] rounded-full bg-[#F5EDE5] bg-opacity-75"></div>
            <div className="absolute z-0 w-[15rem] h-[15rem] rounded-full bg-[#F5EDE5] bg-opacity-50"></div>
            <Image
              width={250}
              height={250}
              src="/media/Grade Report 3D Icon 1.svg"
              alt="book-icon"
              className="z-20 pt-5"
            />
            <Image
              width={110}
              height={110}
              src="/media/Grade Report stars.svg"
              alt="book-icon"
              className="absolute top-[-40px] right-[2%] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSeciton;
