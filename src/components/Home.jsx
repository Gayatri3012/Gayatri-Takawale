import ChangingText from "./ChangingText";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { motion } from "framer-motion";

import { Download } from "lucide-react";



export default function HomePage() {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <section id="home" className="flex gap-2 max-sm:gap-0 scroll-smooth">
            {/* <img src="/images/worldmap2.jpg" alt="" /> */}
            <p className="py-4  font-bold sm:text-5xl md:text-6xl lg:text-7xl text-4xl  text-[#000d3d] dark:text-white">Gayatri Takawale</p>
            <div className="py-4  text-black dark:text-white">
                <h2 className="lg:text-6xl md:text-5xl sm:text-5xl">I build</h2>
                <ChangingText />
                <h2 className="lg:text-6xl md:text-5xl sm:text-5xl">for the web.</h2>
            </div>
            <hr height="2" className="mx-0 lg:my-10 max-sm:my-6  dark:bg-white bg-black "/>
            <div className="flex justify-normal flex-col gap-8 sm:flex-col md:flex-col lg:flex-row max-sm:gap-2">
                <div className="py-2 text-xl text-black dark:text-white  max-sm:text-sm ">
                    <p>A Recent Graduate in Computer Engineering</p>
                    <p>I'm passionate about building interactive web applications <br /> and constantly learning new technologies.</p>
                  
                </div>
                <div className="flex items-center lg:gap-4 gap-2 p-4 max-sm:px-0 justify-end max-sm:justify-start sm:justify-start">
                   
                <motion.button
                     whileHover={{ y: -5}}
                     whileTap={{ scale: 0.95 }}
                     transition={{ type: "Spring", stiffness: 300 }}
                >
                      <a href="https://flowcv.com/resume/p14b98h20r" 
                        target="_blank"
                        className="flex items-center gap-2 mt-1 p-4 max-md:text-sm  bg-[#3C83F5] hover:shadow-lg hover:shadow-[#3C83F5]/50 text-white text-lg rounded-xl"
                        >
                            Download Resume <Download size={20}/>
                        </a>
                  
                </motion.button> 
                </div>
            </div>
            
            
        </section>
    )
}