import React, {useState, useEffect} from "react"
import { Link as ScrollLink } from "react-scroll";
import Typed from "../hooks/typed"

const Home = () => {
    const retString = Typed({
            strings: ["A REACT DEVELOPER","A VUE DEVELOPER","A PHP DEVELOPER","A NODE.JS DEVELOPER"],
            startDelay: 1000,
            backDelay: 2000}
        )

    return (
        <header id="home" className="tona-header" data-stellar-background-ratio="0.5">
            <div className="header-overlay">
                <div className="caption v-middle">
                    <h1>WEB DEVELOPER</h1>
                    <div className="type">
                        <span>I AM</span><h2>{retString}</h2>
                        <span className="typed-cursor">|</span>
                    </div>
                </div>

                <ScrollLink
                        to="about"
                        smooth={true}
                        duration={100}
                >
                    <div className="button-scroll">
                        <span></span>            
                    </div>
                </ScrollLink>    
            </div>
        </header>
    );
  };
  
  export default Home;
  