
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              1TO1 Consultancy and Management Services is an Egyptian company specializing in management consultancy and training. With over 15 years of experience, we are committed to responding to our clients' needs and aspirations. Our strength lies in our deep understanding of local contexts and the extensive expertise of our consultants in delivering impactful solutions.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Our mission is to assist businesses in achieving their strategic objectives and maintaining sustainable growth. By acting as a real partner, we share in the challenges and the successes of our clients.
            </p>
          </div>
          
          <div>
            <Card className="h-full p-6 border-none shadow-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="mb-6">
                We believe that a vision cannot be realized without the ability to execute. At 1TO1, our leadership team is honest, passionate, and dedicated to uncovering and addressing the real needs for change in our clients' businesses. Together, we aim to overcome future challenges and celebrate mutual success.
              </p>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="text-xl font-semibold">Client Centric Approach</h4>
              </div>
              <p className="text-gray-600">
                We design innovative, practical, and actionable solutions tailored to our clients' needs.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 16C9.55228 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold">Team Strength</h4>
              </div>
              <p className="text-gray-600">
                Leveraging individual abilities while working collaboratively with clients to maximize shared wisdom and experience.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold">Global Perspective</h4>
              </div>
              <p className="text-gray-600">
                Respecting local value systems while integrating globally recognized best practices.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="text-xl font-semibold">Professional Excellence</h4>
              </div>
              <p className="text-gray-600">
                Delivering high-quality services through profound knowledge and accumulated expertise.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
