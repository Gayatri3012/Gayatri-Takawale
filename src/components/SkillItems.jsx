export default function SkillItems({skill}) {
    return (
        <div className="grid grid-cols-2 justify-center items-center">
            <h3 className="font-semibold text-lg">{skill.type}</h3>
            <ul className="flex flex-wrap gap-2 p-2">
                {skill.items.map((item,index) => <li key={index}><button className="dark:bg-[#3b437b] bg-[#424346] text-white rounded-xl p-1 px-2 font-semibold">{item}</button></li>)}
            </ul>
        </div>
    )
}