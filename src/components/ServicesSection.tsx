
import { useState } from "react";
import { 
  Briefcase, 
  ChartBar, 
  Lightbulb, 
  GraduationCap,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
};

const ServiceModal = ({ isOpen, onClose, title, content }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-full p-1 h-auto w-auto"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: "business-advisory",
      title: "Business Advisory",
      icon: <Briefcase className="h-6 w-6" />,
      shortDescription: "Strategic guidance for businesses",
      content: (
        <div>
          <p className="mb-4">We specialize in providing expert guidance to help businesses navigate complex challenges and seize opportunities for growth. Our advisory services are tailored to address specific organizational needs, enabling our clients to remain resilient and competitive in dynamic markets.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Business Continuity Management (BCM)</h4>
          <p className="mb-4">We assist organizations in designing and implementing BCM frameworks that ensure operational resilience in the face of unexpected disruptions. Our solutions prioritize risk identification, mitigation, and recovery planning.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Risk Management and Strategic Planning</h4>
          <p className="mb-4">We coach enterprises on identifying potential risks and building strategies to mitigate them. By aligning strategic planning with risk management, we help businesses achieve long-term sustainability and growth.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Change Management</h4>
          <p>We support organizations in managing transitions effectively, whether related to technology, structure, or processes, ensuring minimal disruption and maximum alignment with strategic goals.</p>
        </div>
      ),
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Vocational Training",
      icon: <Lightbulb className="h-6 w-6" />,
      shortDescription: "Fostering innovation & skills",
      content: (
        <div>
          <p className="mb-4">We are committed to fostering entrepreneurship and enhancing vocational skills, equipping individuals with the tools and knowledge needed to succeed in competitive markets. Our programs are designed to inspire innovation, nurture entrepreneurial mindsets, and provide hands-on experience in starting and managing successful ventures.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Mentoring and Coaching for Startups & Small Businesses</h4>
          <p className="mb-4">Our entrepreneurship training offers personalized mentoring and coaching. We understand startup challenges and provide guidance through Strategic Guidance, Financial Coaching, Market Readiness, Problem Solving, and Decision Making.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Ideation and Business Development</h4>
          <p className="mb-4">We help future business owners transform their concepts into practical business prospects. Attendees learn techniques for generating, validating, and prototyping ideas, empowering them to establish a strong base for their new ventures.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Vocational Training for Diverse Sectors</h4>
          <p>In addition to fostering entrepreneurship, we offer vocational training to improve technical and practical skills in diverse industries. This encompasses developing expertise in trades, technology, and creative sectors, preparing individuals to fulfill market needs.</p>
        </div>
      ),
    },
    {
      id: "learning",
      title: "Learning & Development",
      icon: <GraduationCap className="h-6 w-6" />,
      shortDescription: "Skills enhancement programs",
      content: (
        <div>
          <p className="mb-4">Our training programs are designed to empower individuals and teams with the skills and knowledge required to thrive in today's competitive environment. With a focus on practical, results oriented learning, we deliver tailored solutions that drive performance improvement.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Corporate Training</h4>
          <p className="mb-4">We offer a wide range of corporate training programs tailored to meet the unique needs of modern organizations. Our goal is to enhance workforce performance, improve leadership capabilities, and align employee skills with organizational objectives. A key feature of our approach is the integration of simulation-based learning, which provides participants with hands-on, immersive experiences that bridge theory and practice.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Youth and High School Training</h4>
          <p className="mb-4">We are dedicated to nurturing the potential of young minds by providing innovative training programs designed for youth and high school students. Our offerings are focused on Scientific Research Training using STEAM Methodology where Science, Technology, Engineering, Arts, and Mathematics help students develop critical thinking, analytical skills, and a strong foundation in scientific inquiry.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Career Readiness Workshops</h4>
          <p>Equipping students with essential skills such as communication, teamwork, and adaptability to prepare them for future challenges.</p>
        </div>
      ),
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: <ChartBar className="h-6 w-6" />,
      shortDescription: "Comprehensive project execution",
      content: (
        <div>
          <p className="mb-4">We provide comprehensive project management services to help businesses achieve their goals efficiently and effectively. Our approach combines strategic insight with hands-on implementation to ensure success across various industries and sectors.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">End to End Project Management</h4>
          <p className="mb-4">We manage all phases of the project life cycle, guaranteeing on-time delivery, efficient resource usage, and excellent results, from initial idea to final implementation.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Temporary Project Management Resources</h4>
          <p className="mb-4">We provide temporary project management professionals with additional expertise and capacity to seamlessly integrate into your existing teams. This ensures effective collaboration to drive successful project outcomes.</p>
          
          <h4 className="text-xl font-semibold mt-6 mb-2">Specialized Areas</h4>
          <p>Every project presents distinct characteristics, and our solutions are custom-made to address the precise needs, limitations, and objectives of our clients. With a wealth of experience in overseeing projects within the realms of education, entrepreneurship, and technology, we have developed a profound comprehension of these domains.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card text-center py-8 px-4"
              onClick={() => setActiveModal(service.id)}
            >
              <div className="service-icon mx-auto">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
              >
                Details
              </Button>
            </div>
          ))}
        </div>

        {services.map((service) => (
          <ServiceModal
            key={service.id}
            isOpen={activeModal === service.id}
            onClose={() => setActiveModal(null)}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
