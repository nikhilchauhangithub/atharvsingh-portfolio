import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
const About = () => {
  return (
    <div className=" bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
      <div className="right md:p-20 p-5">
        <h1 className="font-medium text-white md:text-4xl text-xl">About</h1>
        <h2 className="typing font-medium text-white md:text-xl text-base mt-1">
          Student/Learner
        </h2>
        <p className="text-white text-sm mt-1">
          I'm Atharv, a newbie developer, and a student of class 9th. I have
          knowledge in modding/web developing/ethical ha*king and many moree
          things.Just if u wanna know so contact me on insta-atharvontop.This is
          my second website and the first
          was:-https://x.atharv-pratappr.repl.co. THANKS FOR COMING HERE
        </p>
        <ul>
          <li className="text-white flex items-center mt-2">
            <i className="mr-2">
              <FiArrowRightCircle />
            </i>
            Student
          </li>
          <li className="text-white flex items-center mt-2">
            <i className="mr-2">
              <FiArrowRightCircle />
            </i>
            Web Developer
          </li>
          <li className="text-white flex items-center mt-2">
            <i className="mr-2">
              <FiArrowRightCircle />
            </i>
            Learner
          </li>
          <li className="text-white flex items-center mt-2">
            <i className="mr-2">
              <FiArrowRightCircle />
            </i>
            And many more...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
