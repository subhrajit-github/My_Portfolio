
import { useState } from "react";
import { cn } from "../lib/util";



const skill= [
    //Frontend
    {name:"HTML/CSS",level:95,category:"Frontend"},
                {name:"JavaScript",level:90,category:"Frontend"},
                {name:"React",level:60,category:"Frontend"},
                {name:"Tailwind CSS",level:65,category:"Frontend"},

     //Backend
     {name:"Node.js",level:50,category:"Backend"},
     {name:"OracleDB",level:90,category:"Backend"},
     
     //Tools
     {name:"Git/Github",level:80,category:"Tools"},
     {name:"Visual Studio Code",level:90,category:"Tools"},
     {name:"ChatGPT",level:90,category:"Tools"},
                
];

const categories=["All","Frontend","Backend","Tools"];


export const SkillsSection = () => {
    const [activeCategory,setActiveCategory]=useState("All")

    const filteredSkills =skill.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-seconadry">
           <div className="container mx-auto max-w 5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => ( 
                            <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                            >
                                {category}
                            </button>
                    ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.filter(skill => activeCategory === "All" || skill.category === activeCategory).map((skill, key) =>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-seconadry/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{width:skill.level+'%'}}
                             />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
            </div> 
        </section>
    ) ;
};