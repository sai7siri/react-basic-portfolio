import React from "react";
import logo from "../assets/person2.png";

function Hero() {
  return (
    <section className=" pt-16 dark:bg-slate-800 dark:text-secondary" id="main">
      <div className="container">

        <div className="flex items-center text-center flex-col sm:flex-row sm:text-start justify-around">
          {/* text */}
          <div>
            <h1>HELLO</h1>

            <p className="text-4xl font-semibold py-2">I'm Sai Sirimarthi</p>

            <p className="text-xl font-normal">
              Freelance web & <br /> Full stack Developer
            </p>

            <p className="max-w-[430px] py-2 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              beatae officia non at saepe iure nulla eius. Architecto aliquam
              ipsa eligendi soluta ratione officiis, minima odio, explicabo non
              laudantium reiciendis.
            </p>
            <button className="mt-2 px-6 py-2 bg-orange-500  rounded-md">
              Hire me
            </button>
          </div>

          {/* image */}
          <div>
            <img
              src={logo}
              alt="image not found"
              className="w-[300px] sm:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
