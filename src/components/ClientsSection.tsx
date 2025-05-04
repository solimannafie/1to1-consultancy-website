
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ClientsSection = () => {
  const clientsRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollInterval, setScrollIntervalId] = useState<number | null>(null);
  
  const clients = [
    { id: 1, logo: "/lovable-uploads/77836a99-6c99-4630-aa6e-1f38c3b43128.png", name: "Professional Accreditation" },
    { id: 2, logo: "/lovable-uploads/8d042b7a-575a-420f-8dfe-8b9bf4937a33.png", name: "Bibliotheca Alexandrina" },
    { id: 3, logo: "/lovable-uploads/c9a7e5ce-9729-4078-a528-29c1f732cab2.png", name: "Edwapps" },
    { id: 4, logo: "/lovable-uploads/600ad9f8-c1c2-4550-8cda-c45d6074a481.png", name: "British Council Egypt" },
    { id: 5, logo: "/lovable-uploads/1824d958-c5c0-4c6a-849e-b9a7e7eb43b1.png", name: "Save the Children" },
    { id: 6, logo: "/lovable-uploads/d3e95c5a-df5e-435e-9709-bc4f0966eb9f.png", name: "Knowledge" },
    { id: 7, logo: "/lovable-uploads/091bd529-b8df-41c3-9826-548a32182c3a.png", name: "Intel" },
    { id: 8, logo: "/lovable-uploads/da748591-f75d-455a-95b9-d4a9ea406ca6.png", name: "Ministry of Education Egypt" },
    { id: 9, logo: "/lovable-uploads/83a7e065-e8b7-44a7-9670-d7c3b9589bdf.png", name: "GIZ" },
    { id: 10, logo: "/lovable-uploads/a1fe8994-142a-4c07-a31b-6725a454aff5.png", name: "GESR" },
    { id: 11, logo: "/lovable-uploads/13dd1560-60fc-4b83-bcc2-55f8592e0b9c.png", name: "Creative Hub Egypt" },
    { id: 12, logo: "/lovable-uploads/fada115d-6ace-4f18-b5ef-23c4cd02f304.png", name: "Industrial Modernisation Centre" },
    { id: 13, logo: "/lovable-uploads/6709f443-5714-482b-8d38-c61e96a65832.png", name: "Academy of Scientific Research & Technology" },
    { id: 14, logo: "/lovable-uploads/bf99b0d3-6f99-4e23-b663-5e983dd7d48d.png", name: "Rayat Consulting" },
  ];

  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const handleScroll = () => {
      if (clientsRef.current) {
        // This would reset the scroll position to create an infinite scroll effect
        if (clientsRef.current.scrollLeft >= clientsRef.current.scrollWidth / 2) {
          clientsRef.current.scrollLeft = 0;
        }
      }
    };

    const container = clientsRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      
      // Start automatic scrolling if autoScroll is true
      if (autoScroll) {
        const interval = window.setInterval(() => {
          if (container) {
            container.scrollLeft += 1;
          }
        }, 50);
        setScrollIntervalId(interval);
      }

      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollInterval) {
          clearInterval(scrollInterval);
        }
      };
    }
  }, [autoScroll]);
  
  const scrollLeft = () => {
    if (clientsRef.current) {
      clientsRef.current.scrollLeft -= 300;
      pauseAutoScroll();
    }
  };
  
  const scrollRight = () => {
    if (clientsRef.current) {
      clientsRef.current.scrollLeft += 300;
      pauseAutoScroll();
    }
  };
  
  const pauseAutoScroll = () => {
    setAutoScroll(false);
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollIntervalId(null);
    }
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Clients</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md hover:bg-gray-50"
            onClick={scrollLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md hover:bg-gray-50"
            onClick={scrollRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          {/* Gradient overlays for left and right */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={clientsRef}
            className="flex overflow-x-auto no-scrollbar py-8"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-8">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-28 w-48"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
