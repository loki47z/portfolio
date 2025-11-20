interface SkillsProps{
    sname: string;
    color: string;
}
export default function Skills({sname, color}: SkillsProps){
    return(
            <span className={`skill-badge bg-${color}-100 text-${color}-800 text-sm font-medium px-4 py-2 rounded-full shadow-md`}>{sname}</span>  
    )
}