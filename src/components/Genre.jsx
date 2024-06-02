import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import {Helmet} from "react-helmet";

function Genre() {
    const { fetchGenre, activegenre, setActiveGenre, genres } = useContext(Contextpage);

    useEffect(() => {
        fetchGenre();
    }, [])

   

    return (
        <>
         <Helmet>
            <title>Genres</title>
        </Helmet>

        <div className='flex flex-wrap justify-center px-2'>
            {
                genres.map((genre) => (

                    <button
                        onClick={() => setActiveGenre(genre.id)}
                        div
                        className={
                          activegenre === genre.id
                            ? 'active px-4 py-2 m-2 text-[15px] text-white font-semibold rounded-3xl'
                            : 'px-4 py-2 m-2 text-[15px] bg-[#627d98] text-white font-semibold rounded-3xl'
                        }
                        key={genre.id}
                      >
                        {genre.name}
                    </button>

                ))
            }
            </div>
            </>
    )
}

export default Genre
