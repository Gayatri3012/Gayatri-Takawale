import SKILLS from '../util/SkillsData';
import SkillItems from './SkillItems';
import UnderlineText from './UnderlineText';

export default function Skills(){
    return <section id='skills' className="flex flex-col py-10  justify-center items-center scroll-mt-20 ">
        <h1 className=" text-5xl font-bold py-4 uppercase max-sm:text-2xl"><UnderlineText>Skills</UnderlineText></h1>
        <ul className="flex flex-col gap-3 max-sm:gap-5 p-4 text-center">
           {SKILLS.map((category,index) => <SkillItems key={index} category={category}/>)}
        </ul>
    </section>
}