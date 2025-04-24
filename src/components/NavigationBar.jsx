import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import ModeToggleButton from "./ModeToggle";
import UnderlineText from "./UnderlineText";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function NavigationBar() {

    
    const {darkMode, dispatch} = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {id: 1, link: '#home', name: 'Home'},
        {id: 3, link: '#projects', name: 'Projects'},
        {id: 4, link: '#skills', name: 'Skills'},
        {id: 5, link: '#contact', name: 'Contact'}
    ]   
                
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
      
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
 
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <section id='NavigationBar' className="z-50 w-[100%] py-2 sticky  top-0 inset-0 bg-white/30  dark:bg-[#111828]/50 backdrop-blur-md">

            {/* <nav className=" flex  gap-2 justify-evenly items-center">
                <a href="/"><img src="/images/me.png" className="py-1"/></a>    
               <div className="flex  gap-8 justify-center items-center">
                    
                {navLinks.map((item) => {
                        return <UnderlineText key={item.id}>
                            <a href={item.link} className="hover:text-[#3C83F5] duration-150 ease-in">{item.name}</a>
                        </UnderlineText>
                })}
               </div>
               
                <div className="flex  gap-2 justify-center items-center">
                    <ModeToggleButton />
                    <a href="https://github.com/Gayatri3012" className="p-4 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200 ease-in">{darkMode ? <Github size={20} className="text-white" /> : <Github size={20} className="text-gray-600" />}</a>
                    <a href="https://www.linkedin.com/in/gayatritakawale/" className="p-4 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200 ease-in">{darkMode ? <Linkedin  size={20} className="text-white" /> : <Linkedin size={20} className="text-gray-600" />}</a>
                    <a href="mailto:takawalegayatri@gmail.com" title="takawalegayatri@gmail.com" className="p-4 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200 ease-in">{darkMode ? <Mail  size={20} className="text-white" /> : <Mail size={20} className="text-gray-600" />}</a>
                </div>
                
            </nav>  
                 */}
            <nav className="flex justify-between items-center px-4 py-2">
        <a href="/">
          <img src="/images/me.png" className="h-10 w-auto" alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <UnderlineText key={item.id}>
              <a
                href={item.link}
                className="hover:text-[#3C83F5] duration-150 ease-in"
              >
                {item.name}
              </a>
            </UnderlineText>
          ))}
        </div>

        <div className="hidden md:flex gap-2 items-center">
          <ModeToggleButton />
          <a
            href="https://github.com/Gayatri3012"
            className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200"
          >
            <Github size={20} className={darkMode ? "text-white" : "text-gray-600"} />
          </a>
          <a
            href="https://www.linkedin.com/in/gayatritakawale/"
            className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200"
          >
            <Linkedin size={20} className={darkMode ? "text-white" : "text-gray-600"} />
          </a>
          <a
            href="mailto:takawalegayatri@gmail.com"
            title="takawalegayatri@gmail.com"
            className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200"
          >
            <Mail size={20} className={darkMode ? "text-white" : "text-gray-600"} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
            <ModeToggleButton />
            {isOpen ? <button onClick={closeMenu} className="p-2">
             <X size={20}/>
            </button>
            :
            <button onClick={toggleMenu} className="p-2">
                <Menu size={20} />
            </button>}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className=" absolute w-full h-[100vh] md:hidden px-6 pb-4 pt-8 flex flex-col items-center justify-start gap-5 bg-white/90 dark:bg-[#111828]/90 transition-all">
            {navLinks.map((item) => (
                <UnderlineText key={item.id}>
                    <a
                    key={item.id}
                    href={item.link}
                    onClick={() => setIsOpen(false)} // close menu on click
                    className="text-lg hover:text-[#3C83F5] dark:text-white"
                    >
                        {item.name}
                    </a>
                </UnderlineText>
        
            ))}
          <div className="flex gap-6 mt-4 ">
            <a href="https://github.com/Gayatri3012" 
              className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200">
              <Github size={20} className={darkMode ? "text-white" : "text-gray-600"} />
            </a>
            <a href="https://www.linkedin.com/in/gayatritakawale/"
              className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200">
              <Linkedin size={20} className={darkMode ? "text-white" : "text-gray-600"} />
            </a>
            <a href="mailto:takawalegayatri@gmail.com" 
              className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6aa6] duration-200">
              <Mail size={20} className={darkMode ? "text-white" : "text-gray-600"} />
            </a>
          </div>
        </div>
      )}

        </section>
        
    )
}