
import { Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/1b20b3bc-fb36-4a43-ad57-b481838057da.png" alt="1TO1 Consultancy" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 max-w-xs text-left">
              Management Consultancy & Training with over 15 years of experience delivering impactful solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors">Clients</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">18 Merghany St., Heliopolis, Cairo, Egypt</p>
            <p className="text-gray-400 mb-2">info@1to1consultancy.com</p>
            <p className="text-gray-400 mb-4">+201223104684 / +201111243568</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} 1TO1 Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
