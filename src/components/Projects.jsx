import PROJECT_DATA from "../util/projectData";
import ProjectItem from "./ProjectItem";
import UnderlineText from "./UnderlineText";

export default function Projects() {
        
    return (
        <section id='projects' className="flex flex-col gap-4 pt-10 justify-center items-center scroll-mt-10 ">
            <h1 className=" text-5xl font-bold py-4 uppercase max-sm:text-2xl"><UnderlineText>Projects</UnderlineText></h1>
            <ul className="flex flex-wrap gap-8 justify-center ">
                {PROJECT_DATA.map((project,index) => <li className="w-full max-sm:w-[80%] sm:w-1/2 lg:w-1/3" key={project.title}><ProjectItem project = {project} index={index}/></li>)}
            </ul>
                
                
        </section>
        
    )
}