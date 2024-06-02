import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Contextpage from '../Contextpage';
import { motion } from "framer-motion";
import { HiMenuAlt1, HiX } from "react-icons/hi";

function Navbar() {
    const { header, user } = useContext(Contextpage);
    const [activemobile, setActivemobile] = useState(false);

    return (
        <>
            <button
                className="z-40 text-3xl text-black fixed lg:left-4 top-4 lg:top-6 p-4 duration-150 rounded-full active:scale-90 bg-white"
                onClick={() => setActivemobile(!activemobile)}
            >
                {activemobile ? <HiX /> : <HiMenuAlt1 />}
            </button>


            <nav
                className={`fixed top-0 left-0 bg-black/40 h-full w-64 z-30 transform transition-transform duration-300 ${activemobile ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link to="/" className="logo flex flex-col justify-center items-center m-7 gap-3" onClick={() => setActivemobile(false)}>
                        <img src={`https://moviesmod.live/wp-content/uploads/2022/12/moviesmodnew-Custom.png`} alt="logo" className="w-30" />
                    
                    </Link>
                </motion.div>

                <ul className="text-white font-semibold text-[16px] text-center px-5">
                    <Link to='/'><li className={`p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(false)}>Home</li></Link>
                    <Link to="/genre"><li className={`${header === "Genres" ? 'bg-blue-500/20 border-[#91adf4]' : 'bg-gray-500/20'} p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(false)}>Genres</li></Link>
                    <Link to="/trending"><li className={`${header === "Trending Movies" ? 'bg-blue-500/20 border-[#91adf4]' : 'bg-gray-500/20'} p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(false)}>Trending</li></Link>
                    <Link to="/upcoming"><li className={`${header === "Upcoming Movies" ? 'bg-blue-500/20 border-[#91adf4]' : 'bg-gray-500/20'} p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(false)}>Upcoming</li></Link>
                    <Link to="/favorite"><li className={`${header === "Favorite Movies" ? 'bg-blue-500/20 border-[#91adf4]' : 'bg-gray-500/20'} p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(false)}>Favorites</li></Link>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
