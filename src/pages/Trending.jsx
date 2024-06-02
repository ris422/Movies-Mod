import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from '../components/Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Pagebtn } from '../components/Pagebtn';
import { Helmet } from 'react-helmet';

function Trending() {

  const { loader, page, fetchTrending, trending } = useContext(Contextpage);
    
    useEffect(() => {
        fetchTrending();
    }, [page])


  return (
      <>
          <Helmet>
          <title>Trending</title>
        </Helmet>
          
        <div className='w-full bg-[#91adf4] md:p-10 mb-20 md:mb-0'>
            <Header />
            <Navbar/>
            <motion.div
                layout
                className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                <AnimatePresence>
                    {
                        loader ?  <span className="loader m-10"></span>:
                            <>
                                {trending.map((tred) => (
                                    <Moviecard key={tred.id} movie={tred} />
                                ))}
                            </>
                    }
                </AnimatePresence>
            </motion.div>
            <Pagebtn/>
            
        </div>
      </>
  )
}

export default Trending