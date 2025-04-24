export default function SkillItems({category}) {

    return (
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-1 justify-center items-center">
            <h3 className="font-semibold text-lg max-sm:text-base">{category.type}</h3>
            <ul className="flex flex-wrap  gap-2 max-md:justify-center max-sm:gap-3 p-2 max-sm:gap-1 max-sm:p-0">
                {category.items.map((item,index) => {
                return <li key={index} className="flex items-center bg-[#4891ff3d] px-2 py-1 rounded-lg gap-2">
                   <img className=" dark:bg-[#d3d8ff00] text-white rounded-xl  font-semibold h-8 max-md:h-6" src={`/images/${item.icon}`}/>
                   <p className="text-sm">{item.skill}</p> 
                </li>
                
                })}
            </ul>
        </div>
    )
} 