
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/1b20b3bc-fb36-4a43-ad57-b481838057da.png" 
              alt="1TO1 Consultancy" 
              className="h-12 w-auto"
            />
            <p className="mt-2 text-sm text-blue-200">
              Management Consultancy & Training
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-sm text-blue-200">
              &copy; {currentYear} 1TO1 Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
