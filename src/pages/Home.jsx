import React, { useContext, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Contextpage from "../Contextpage";
import Moviecard from "../components/Moviecard";
import { Pagebtn } from "../components/Pagebtn";
import { motion, AnimatePresence } from 'framer-motion';


function Home() {
    const { movies, filteredGenre, page, loader } = useContext(Contextpage);
    useEffect(() => {
        filteredGenre();
    }, [page])
    return (
        <section>
            <Navbar />
            <Searchbar />
            <div className="bg-[#91adf4] ">
                <header className={`flex items-center text-3xl md:text-4xl font-bold text-white py-3 px-5 md:px-10 gap-5`}>
                    <div className="flex-grow text-center">
                        {`Home`}
                    </div>
                </header>
                <motion.div
                    layout
                    className="w-full md:p-2 bg-[#91adf4] flex flex-wrap relative justify-evenly md:justify-around">
                    <AnimatePresence>
                        {
                            loader ? <span className="loader m-10"></span> :
                                <>
                                    {movies.map((movie) => (
                                        <Moviecard key={movie.id} movie={movie} />
                                    ))}
                                </>
                        }
                    </AnimatePresence>
                </motion.div>
                <Pagebtn />
            </div>
        </section>
    )
}
export default Home;
