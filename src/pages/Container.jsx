import React,{useEffect} from "react";
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";

function Container() {
    return (
        <section>
            <Navbar />
            <Searchbar />
            <Movies/>
        </section>
    )
}

export default Container;
