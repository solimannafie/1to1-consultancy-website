
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/lovable-uploads/1b20b3bc-fb36-4a43-ad57-b481838057da.png" alt="1TO1 Consultancy" className="h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            1TO1 Consultancy <span className="text-zinc-50">&</span> Management Services
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Delivering impactful solutions with over 15 years of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-white text-blue-900 hover:bg-blue-50" size="lg">
              Our Services
            </Button>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-white text-blue-900 hover:bg-blue-50" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
