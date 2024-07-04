import SKILLS from '../util/SkillsData';
import SkillItems from './SkillItems';
import UnderlineText from './UnderlineText';

export default function Skills(){
    return <section id='skills' className="flex flex-col py-10  justify-center items-center">
        <h1 className=" text-5xl font-bold py-4 uppercase"><UnderlineText>Skills</UnderlineText></h1>
        <ul className="flex flex-col gap-3 p-4 text-center">
           {SKILLS.map((skill,index) => <SkillItems key={index} skill={skill}/>)}
        </ul>
    </section>
}