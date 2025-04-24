import { SquareArrowOutUpRight, Github } from "lucide-react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";



export default function ProjectItem({project, index}) {

         const {darkMode} = useContext(DarkModeContext);
    
    return (
        
        <div className='p-1 h-[100%] flex flex-col justify-start items-center   rounded-lg bg-[#a2caff3f] dark:bg-[#1d2635] overflow-hidden  hover:shadow-lg hover:shadow-[#3C83F5]/50 ease-in-out duration-200'> 
            <div className={`w-full relative `} >
                <img 
                className="z-10 inset-shadow-2xs rounded-lg"
                    src={project.image} 
                    alt={project.title} 
                 />
                 <div className="w-[100%] absolute bottom-0 left-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent backdrop-blur-sm">

                    <ul className=" flex gap-2 flex-wrap p-2">
                        {project.techStack.map((skill, index) => <li key={index}><button className="bg-[#376ebf]  text-[12px] text-white rounded-xl p-1 px-2 font-semibold">{skill}</button></li>)}
                    </ul>
                 </div>
              
            </div>
                
            
            <div className="h-[100%] p-4 flex flex-col gap-2">
                <h3 className="text-base font-medium ">{project.title}</h3>
                <p className=" max-w-[1/3] font-normal max-sm:text-[14px]  text-[16px]">{project.description} <br /></p>
                <div className="flex items-center">
                    {project.code && <a href="https://github.com/Gayatri3012" target="_blank" className="text-blue-600 flex gap-1 m-1  hover:underline text-sm">
                        <Github size={20} className='dark:text-[#5479ff] text-[#3a65fe]' /> 
                    </a>}
                    <a href={project.demoLink} target="_blank" className="text-blue-600 flex gap-1 m-1  hover:underline text-sm">
                        <SquareArrowOutUpRight size={20} className='dark:text-[#5479ff] text-[#3a65fe]'/> 
                    </a> 
                </div>
                
                
            </div>
        </div>
    )
}