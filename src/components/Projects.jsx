import PROJECT_DATA from "../util/projectData";
import ProjectItem from "./ProjectItem";
import UnderlineText from "./UnderlineText";

export default function Projects() {
        
    return (
        <section id='projects' className="flex flex-col pt-10 justify-center items-center dark:bg-[#232938] bg-white">
            <h1 className=" text-5xl font-bold py-4 uppercase"><UnderlineText>Projects</UnderlineText></h1>
            <ul >
                {PROJECT_DATA.map((project,index) => <li key={project.title}><ProjectItem project = {project} index={index}/></li>)}
            </ul>
                
                
        </section>
        
    )
}