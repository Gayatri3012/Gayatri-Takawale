import { CgArrowTopRightR } from "react-icons/cg";


export default function ProjectItem({project, index}) {

    let classNameForOuterDiv;

    if(index % 2 == 0) {
        classNameForOuterDiv = "flex flex-col gap-4 justify-center items-center p-4";
    } else {
        classNameForOuterDiv = "flex flex-col gap-4 justify-center items-center p-4 dark:bg-index-blue bg-[#a7a9af]"
    }
    return (
        <div className={classNameForOuterDiv}> 
            <div className="flex flex-col justify-center items-center">
                {/* <img className="w-8 h-8 m-3" src={project.logo} alt="project-logo"/> */}
                {project.logo}
                <h2>{project.title}</h2>
            </div>

            <a href={project.demoLink} target="_blank" className="dark:bg-[#3b437b] bg-[#424346] text-white rounded-md p-1 px-2 font-medium">VIEW MORE</a>
            <a className="flex items-center justify-center" href={project.demoLink} target="_blank" >
                <img 
                src={project.image} 
                alt={project.title} 
                className="hover:border-2 hover:border-solid hover:border-white screen-lg:w-[1024px] screen-lg:h-[768px] screen-md: w-2/3 screen-md:h-1/3 rounded-lg"/>
            </a>
          {/* <img src={project.image} alt={project.title} className="screen-lg:w-[1064px] screen-lg:h-[768px] screen-md: w-2/3 screen-md:h-1/3 rounded-lg"/> */}
            
            <div className="flex gap-4 min-h-20 max-w-[700px] justify-between items-center">
                <p className="p-4 max-w-[1/3] font-semibold lg:text-xl sm:text-l md:text-l">{project.description} <br />
                <a href={project.code} target="_blank" className="text-blue-600 flex gap-1 m-1 hover:underline">
                    View Code <CgArrowTopRightR className="h-6 w-6 " />
                </a> 
                </p>
                
                {/* <ul className="grid p-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9"> */}
                <ul className="flex gap-3 flex-wrap col-span-2 p-2">
                    {project.techStack.map((skill, index) => <li key={index}><button className="dark:bg-[#3b437b] bg-[#424346] text-white rounded-xl p-1 px-2 font-semibold">{skill}</button></li>)}
                </ul>
            </div>
            
        </div>
    )
}