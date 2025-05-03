
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  index: number;
};

const ProjectCard = ({ title, description, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card className="project-card hover:scale-[1.02] transition-transform bg-blue-800">
      <div className="relative">
        <div className={`absolute top-0 left-0 h-full w-2 ${isEven ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
        <div className="p-6 pl-8">
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Implemented Skills Verification Program (SVP), KSA",
      description: "The project included translating question banks for occupational standards to 8 different languages."
    },
    {
      title: "Evaluation Study for Save the Children International",
      description: "Conducted mid-term and an end-line evaluation study for 'Promoting Inclusive Empowerment for Women, girls and boys in Upper Egypt' projects."
    },
    {
      title: "Science Technical Park Strategic Plan",
      description: "Local consultants for the Korean side in managing the 'Science Technical Park' strategic plan development and implementation; an Egyptian-Korean project."
    },
    {
      title: "Production Units' Guidelines for Save the Children",
      description: "Developed Production Units' guidelines, conducted training on it and supported CDAs for Save the Children International - Italy."
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8">
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
