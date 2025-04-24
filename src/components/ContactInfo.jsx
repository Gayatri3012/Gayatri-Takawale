import { Github, Linkedin, Mail} from "lucide-react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function ContactInfo() {
    
    const {darkMode} = useContext(DarkModeContext);

    return (
        <section id="contact" className="w-full max-w-[700px] lg:p-10 max-md:p-6 md:p-8 max-sm:p-2">
            <footer className="flex justify-evenly items-center gap-8 max-sm:gap-1">
                <p className="max-sm:text-sm">© 2025 Gayatri Takawale. All rights reserved.</p>
                <div className="flex justify-evenly gap-4 max-sm:gap-2">
                    <a
                        href="https://github.com/Gayatri3012"
                        className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200"
                        target='_blank'
                    >
                        <Github size={20} className={darkMode ? "text-white" : "text-gray-600"} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gayatritakawale/"
                        className="p-3 rounded-full hover:bg-[#3c83f55c] dark:hover:bg-[#1c2c6a80] duration-200"
                        target='_blank'
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
            </footer>
        </section>
       
    )
}