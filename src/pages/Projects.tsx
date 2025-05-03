
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Implemented Skills Verification Program (SVP), KSA",
      description: "The project included translating question banks for occupational standards to 8 different languages."
    },
    {
      title: "Evaluation Study for Save the Children International",
      description: 'Conducted mid-term and an end-line evaluation study for "Promoting Inclusive Empowerment for Women, girls and boys in Upper Egypt" projects.'
    },
    {
      title: "Science Technical Park Strategic Plan",
      description: 'Local consultants for the Korean side in managing the "Science Technical Park" strategic plan development and implementation; an Egyptian-Korean project.'
    },
    {
      title: "Production Units' Guidelines for Save the Children",
      description: "Developed Production Units' guidelines, conducted training on it and supported CDAs for Save the Children International - Italy."
    },
    {
      title: "Family Park Educational Centers",
      description: 'Developed and managed operations of the Educational Centers at the "Family Park" project in cooperation with "Bibliotheca Alexandrina" which was a pilot of STEAM education.'
    },
    {
      title: "Technical Education Initiative Support",
      description: 'Technical consultation support for "Comprehensive Technical Education Initiative in Egypt, TCTI".'
    },
    {
      title: "Business Training & Coaching Programs",
      description: "Designed and conducted more than 50,000 training and coaching hours in different business areas for corporates and startups as: Ideation tools, Design Thinking, Innovation Management, Lean Startup, Change Management, Business Modeling, Business Planning, Strategic Management, Operations Management, Entrepreneurship Fundamentals, Leadership, Managerial Skills, and Soft Skills..."
    },
    {
      title: "Entrepreneur Mentoring Program",
      description: 'Created curricula, trained, and mentored 400+ entrepreneurs on "Business Development" through GIZ\'s "Program Migration for Development (PME)" in 2022 - 2023.'
    },
    {
      title: "Ministry of Education Relations",
      description: "Developed and maintained relations with Ministry of Education and stakeholders for building teachers' capacities."
    },
    {
      title: "Teachers' Capabilities Enhancement Fund",
      description: 'Managed a $1.5 Million fund for enhancing teachers\' capabilities and students\' IT knowledge through Intel\'s CSR programs; Intel Teach, Intel Learn, Intel Science & Engineering Fair "ISEF".'
    },
    {
      title: "Intel Education Programs",
      description: 'Trained 150K teachers and 200K students all over Egypt through "Intel Teach" and "Intel Learn" programs.'
    },
    {
      title: "IT Infrastructure Implementation",
      description: "Implemented IT infrastructure and systems, supporting business operations in multiple companies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Projects</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-2 bg-blue-900"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/">
            <Button className="bg-blue-900 hover:bg-blue-800">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
