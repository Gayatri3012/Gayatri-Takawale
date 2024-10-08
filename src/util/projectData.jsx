import { ImQuotesRight } from "react-icons/im";
import { PiNotePencilBold } from "react-icons/pi";
import { FaShoppingBag } from "react-icons/fa";


const PROJECT_DATA =  [
    {
        logo: <FaShoppingBag   className="w-9 h-9 m-3" />,
        title : 'E-commerce website',
        description : 'E-commerce website built with React.js and Next.js . Enables users to browse products, add items to their cart, and manage their account.',
        image: '/images/project3.png',
        demoLink: 'https://e-commerce-mocha-nine-21.vercel.app/',
        code: 'https://github.com/Gayatri3012/e-commerce',
        techStack: ['React.js', 'Next.js']
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
        description : 'NoteMaker simplifies note-taking with clear formatting, organized storage, and secure login, making it easy to jot down and access your ideas anytime.',
        image: '/images/project2.png',
        demoLink: 'https://note-making-app-jh5f.onrender.com',
        code: 'https://github.com/Gayatri3012/Note-making-app/',
        techStack: [  'NodeJS','MongoDB', 'HTML', 'CSS', 'JavaScript','TailwindCSS']
    },
    
];

export default PROJECT_DATA;

