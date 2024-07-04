import ChangingText from "./ChangingText";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";


export default function About() {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <section id="about" className="flex gap-2">
            {/* <img src="/images/worldmap2.jpg" alt="" /> */}
            <h1 className="py-4  font-bold sm:text-3xl md:text-4xl lg:text-5xl text-3xl  text-black dark:text-white">Gayatri Takawale</h1>
            <div className="py-4  text-black dark:text-white">
                <h2 className="lg:text-6xl md:text-5xl">I build</h2>
                <ChangingText />
                <h2 className="lg:text-6xl md:text-5xl">for the web.</h2>
            </div>
            <hr height="4" className="dark:bg-white bg-black"/>
            <div className="flex justify-normal flex-col gap-8 sm:flex-col md:flex-row lg:flex-row">
                <div className="text-xl text-black dark:text-white">
                    <p>A Recent Graduate in Computer Engineering</p>
                    <p>I'm passionate about building interactive web applications <br /> and constantly learning new technologies.</p>
                </div>
                <div className="flex lg:gap-4 gap-2 p-4 justify-end">
                    {/* <a href="https://www.linkedin.com/in/gayatritakawale/" target="blank"><img className="h-8 w-8" src="/images/linkedin.png" alt="linkedin" /></a> */}
                    <a href="https://www.linkedin.com/in/gayatritakawale/" target="blank"><FaLinkedinIn className="h-8 w-8" /></a>
                    {/* <a href="https://github.com/Gayatri3012" target="blank"><img className="h-8 w-8" src="/images/github.png" alt="github" /></a> */}
                    <a href="https://github.com/Gayatri3012" target="blank"><RxGithubLogo className="h-8 w-8" /></a>
                </div>
            </div>
            
            
        </section>
    )
}