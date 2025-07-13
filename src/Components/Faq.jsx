import React from 'react';
import "./Faq.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import background2 from "../assets/background2.jpg"

const Faq = () => {
  return (
    <div>
      <div>
        <h1 className='text'>Frequently Asked Questions</h1>
      </div>
      <div  className="flex justify-center">
        <div>
        <button className="flex items-center justify-between px-6 py-3 rounded-lg transition border m-5 w-full max-w-2xl text-left">
          <span>How is RVnBo different from camping apps?</span>
          <MdOutlineKeyboardArrowRight className="text-black ml-4 text-2xl" />
        </button>
        <button className="flex items-center justify-between px-6 py-3 rounded-lg transition border m-5 w-full max-w-2xl text-left">
          <span>Do I need electricity hookups?</span>
          <MdOutlineKeyboardArrowRight className="text-black ml-4 text-2xl" />
        </button>
        <button className="flex items-center justify-between px-6 py-3 rounded-lg transition border m-5 w-full max-w-2xl text-left">
          <span>Can I stay On raw Land?</span>
          <MdOutlineKeyboardArrowRight className="text-black ml-4 text-2xl" />
        </button>
        <button className="flex items-center justify-between px-6 py-3 rounded-lg transition border m-5 w-full max-w-2xl text-left">
          <span>Is it legal and safe?</span>
          <MdOutlineKeyboardArrowRight className="text-black ml-4 text-2xl" />
        </button>
        <button className="flex items-center justify-between px-6 py-3 rounded-lg transition border m-5 w-full max-w-2xl text-left">
          <span>Can I cancel a spot?</span>
          <MdOutlineKeyboardArrowRight className="text-black ml-4 text-2xl" />
        </button>
      </div>
      </div>
      <div className="h-screen  bg-center bg-cover flex items-center justify-center text-white ml-40 mr-40 mt-30 mb-20"
              style={{
                backgroundImage: `url(${background2})`,
              //   marginTop: '64px' // offset for fixed navbar
              }}
                >
                <div className="mr-150 mt-50 bg-opacity-50 p-8 rounded-xl">
                 <h1 className="text-6xl font-bold mb-4 hover:underline">Your next adventure is one <br />click away</h1><br />
                <button className="bg-[#468F9D] px-6 py-3 rounded-lg transition">
                  Find RV spot now
              </button>
              </div>
                </div>
    </div>
  );
};

export default Faq;
