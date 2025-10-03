import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A Beautiful landing page using React and Tailwind.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",//live version url
        githubUrl: "#"//github url
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities",
        image: "/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",//live version url
        githubUrl: "#"//github url 
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A responsive and modern portfolio website designed to showcase my skills,projects and experience.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "Vite"],
        demoUrl: "#",//live version url
        githubUrl: "https://github.com/subhrajit-github/My_Portfolio"//github url
    }
];


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 classname="text-3xl md:text-4xl font-bold mb-4 text-center">

                Featured<span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full min-h-[420px] relative">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between p-6 pb-12">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-2 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-6 flex space-x-3">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink />
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/subhrajit-github" className="cosmic-button w-fit inline-flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};