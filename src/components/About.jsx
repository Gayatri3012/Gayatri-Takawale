import ChangingText from "./ChangingText";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";


export default function About() {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <section id="about" className="flex gap-2 mt-6 max-sm:gap-0">
            {/* <img src="/images/worldmap2.jpg" alt="" /> */}
            <p className="py-4  font-bold sm:text-5xl md:text-6xl lg:text-7xl text-4xl  text-black dark:text-white">Gayatri Takawale</p>
            <div className="py-4  text-black dark:text-white">
                <h2 className="lg:text-6xl md:text-5xl sm:text-5xl">I build</h2>
                <ChangingText />
                <h2 className="lg:text-6xl md:text-5xl sm:text-5xl">for the web.</h2>
            </div>
            <hr height="4" className="mx-0 lg:my-10 max-sm:my-6  dark:bg-white bg-black "/>
            <div className="flex justify-normal flex-col gap-8 sm:flex-col md:flex-row lg:flex-row max-sm:gap-2">
                <div className=" text-xl text-black dark:text-white max-sm:text-base">
                    <p>A Recent Graduate in Computer Engineering</p>
                    <p>I'm passionate about building interactive web applications <br /> and constantly learning new technologies.</p>
                  
                </div>
                <div className="flex items-center lg:gap-4 gap-2 p-4 justify-end max-sm:justify-start sm:justify-start">
                    {/* <a href="https://www.linkedin.com/in/gayatritakawale/" target="blank"><img className="h-8 w-8" src="/images/linkedin.png" alt="linkedin" /></a> */}
                    <a href="https://www.linkedin.com/in/gayatritakawale/" target="blank"><FaLinkedinIn className="h-8 w-8 max-sm:w-6 max-sm:h-6" /></a>
                    {/* <a href="https://github.com/Gayatri3012" target="blank"><img className="h-8 w-8" src="/images/github.png" alt="github" /></a> */}
                    <a href="https://github.com/Gayatri3012" target="blank"><RxGithubLogo className="h-8 w-8 max-sm:w-6 max-sm:h-6" /></a>
                    <a href="https://flowcv.com/resume/p14b98h20r" 
                    target="_blank"
                    className="mt-1 px-2 py-1 max-sm:text-sm bg-[#a48bd2] text-white text-xl rounded-lg"
                    >
                        Resume
                    </a>
                </div>
            </div>
            
            
        </section>
    )
}