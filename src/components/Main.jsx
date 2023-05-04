import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import Home from './elements/Home';
import About from './elements/About';
import Stacks from './elements/Stacks';
import Contact from './elements/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import './css/style.css';
const Main = () => {
  const menus = [
    { name: 'Home', link: '/', icon: MdOutlineDashboard },
    { name: 'About', link: 'about', icon: AiOutlineUser },
    { name: 'Stacks', link: 'stacks', icon: TbReportAnalytics },
    { name: 'Contact', link: 'contact', icon: FiMessageSquare },
  ];

  return (
    <section className="flex gap bg-[#1e1e1e] font-[Poppins]">
      <div
        className={`bg-[#1e1e1e] min-h-screen duration-500 text-gray-100 px-3`}
      >
        <div className="flex justify-center items-center mt-7">
          <span className="logo uppercase font-bold mb-4">Atharv</span>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center justify-center p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <section className="font-[Poppins]">
          <div className="md:grid grid-cols-2 sm:row-span-2">
            <div className="left bg-white w-full md:h-screen p-6 flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/nikhilchauhangithub/atharvsingh-portfolio/main/src/components/img/image.jpg"
                alt="Atharv Singh"
                class="h-28 md:w-48 md:h-48 rounded-full sm:w-28 sm:h-28"
              ></img>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="stacks" element={<Stacks />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Main;
