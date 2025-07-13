// import React from 'react';
import logo from "../assets/logo.png"
// import background from "../assets/background1.jpg"

// const Navbar = () => {
//     return (
//     <div className="relative">
//       {/* === Navbar === */}
//       <nav className="bg-white shadow-md w-full z-10 navi">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Logo */}
//             <div className="flex-shrink-0 mr-50">
//               <img src={logo} alt="Logo" className="h-10" />
//             </div>

//             {/* Links */}
//             <div className="hidden md:flex space-x-6">
//               <a href="#" className="text-gray-600 hover:text-black">Home</a>
//               <a href="#" className="text-gray-600 hover:text-black">Explore</a>
//               <a href="#" className="text-gray-600 hover:text-black">How its work</a>
//               <a href="#" className="text-gray-600 hover:text-black">About</a>
//               <a href="#" className="text-gray-600 hover:text-black">Log in</a>
//             </div>

//             {/* Button */}
//             <div className="ml-auto">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                 Login
//               </button>
//             </div>

//           </div>
//         </div>
//       </nav>

//       {/* === Background Image Section === */}
//       <div
//         className="h-screen bg-cover bg-center flex items-center justify-center text-white"
//         style={{
//           backgroundImage: `url(${background})`,
//           marginTop: '64px' // offset for fixed navbar
//         }}
//       >
//         <div className="text-center bg-opacity-50 p-8 rounded-xl">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
//           <p className="text-lg mb-6">Your journey starts here</p>
//           <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import "./Navbar.css"
import background from "../assets/background1.jpg"

const Navbar = () => {
    return (
        <nav>
          <div  className="navi">
            <div>
                <img src={logo} alt="Logo" className="h-15 w-20" />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>How its work</li>
                    <li>About</li>
                    <li>Log In</li>
                </ul>
            </div>
            <div>
                <button className="Button">SignUp</button>
            </div>
          </div>
          <div className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${background})`,
        //   marginTop: '64px' // offset for fixed navbar
        }}
          >
          <div className="mr-150 mt-50 bg-opacity-50 p-8 rounded-xl">
           <h1 className="text-4xl font-bold mb-4 hover:underline">How Does RVnBO Work?</h1>
           <p className="text-lg mb-6 hover:underline">Explore off-grid spots. Park with confidence. Sleep peacefully.</p>
          <button className="bg-[#468F9D] px-6 py-3 rounded-lg transition">
            Start Exploring
        </button>
        </div>
          </div>
        </nav>

    );
};

export default Navbar;