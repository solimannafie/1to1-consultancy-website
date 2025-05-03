
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2850')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/1b20b3bc-fb36-4a43-ad57-b481838057da.png" 
            alt="1TO1 Consultancy" 
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Expert Consultancy <span className="text-blue-300">&</span> Management Services
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Delivering impactful solutions with over 15 years of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-blue-50"
              size="lg"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
