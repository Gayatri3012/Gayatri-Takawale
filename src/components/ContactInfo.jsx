import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export default function ContactInfo() {
    return (
        <section className="p-10">
            <footer className="flex justify-evenly items-center gap-8">
                <p>© 2024 Gayatri Takawale</p>
                <div className="flex justify-evenly gap-4">
                    <a href="mailto:[takawalegayatri@gmail.com]"><MdEmail className="h-8 w-8" /></a>
                    <a href="https://github.com/Gayatri3012" target="blank"><RxGithubLogo  className="h-8 w-8" /></a>
                    <a href="https://www.linkedin.com/in/gayatritakawale/" target="blank"><FaLinkedinIn  className="h-8 w-8" /></a>
                </div>
            </footer>
        </section>
       
    )
}