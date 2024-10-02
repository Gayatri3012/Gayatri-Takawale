import { ImQuotesRight } from "react-icons/im";
import { PiNotePencilBold } from "react-icons/pi";
import { FaCloudSun } from "react-icons/fa";

const PROJECT_DATA =  [
    {
        logo: <FaCloudSun  className="w-9 h-9 m-3" />,
        title : 'Weather App',
        description : 'The Weather App, your one-stop app for all things weather!',
        image: '/images/project3.png',
        demoLink: 'https://weather-app-v123.netlify.app/',
        code: 'https://github.com/Gayatri3012/Weather-App',
        techStack: ['HTML', 'CSS', 'Javascript']
    },
    {
        logo: <ImQuotesRight className="w-9 h-9  m-3" />,
        title : 'Dunder Mifflin Daily Dose',
        description : "Built a React quote generator for 'The Office' fans. Fetches quotes & displays them with character info.",
        image: '/images/project1.png',
        demoLink: 'https://dunder-mifflin-daily-dose.web.app/',
        code: 'https://github.com/Gayatri3012/Dunder-Mifflin-Daily-Dose',
        techStack: [ 'ReactJS', 'API', 'JavaScript', 'HTML', 'CSS']
    },
    {
        logo:  <PiNotePencilBold  className="w-9 h-9  m-3" />,
        title : 'NoteMaker',
        description : 'NoteMaker makes note-taking a breeze! Write down your ideas clearly with formatting options and keep them organized for easy access. Plus, a secure login ensures your notes stay private - only you can see them!',
        image: '/images/project2.png',
        demoLink: 'https://note-making-app-jh5f.onrender.com',
        code: 'https://github.com/Gayatri3012/Note-making-app/',
        techStack: [  'NodeJS','MongoDB', 'HTML', 'CSS', 'JavaScript','TailwindCSS']
    },
    
];

export default PROJECT_DATA;

