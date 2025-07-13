import React from 'react';
import "./Works.css"
import { FaSearch,FaMoon} from 'react-icons/fa';
import { LiaCarSideSolid } from "react-icons/lia";

const Works = () => {
    return (
        <div className='card'>
            <div className='text-center mt-15 mb-10 text-3xl'>
                <h1>How It Works</h1>
            </div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center h-100">
          <FaSearch className="text-black text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Search Frusted land</h3>
          <p className="text-gray-600">Locate Verified, off-gird stays.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <LiaCarSideSolid className="text-black text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Park your RV Safely</h3>
          <p className="text-gray-600">Reserve Your Spot and travel.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <FaMoon className="text-black text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sleep under the stars</h3>
          <p className="text-gray-600">Retax in a secure environment.</p>
        </div>

         </div>
      </div>
    </div>
    );
};

export default Works;