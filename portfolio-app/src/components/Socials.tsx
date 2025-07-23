import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsFileEarmarkText } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex flex-row items-center gap-3 transition-all duration-300 lg:flex-col lg:items-end lg:gap-4">
        {/* GitHub */}
        <a 
          href="https://github.com/Mykel-Az" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white border border-gray-200 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="GitHub"
        >
          <FaGithub className="text-purple-600 text-2xl md:text-3xl lg:text-2xl" />
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/michael-azeez-adekanmbi-968b70267" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white border border-gray-200 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-purple-600 text-2xl md:text-3xl lg:text-2xl" />
        </a>
        
        {/* Twitter */}
        <a 
          href="https://x.com/Michael_Azed" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white border border-gray-200 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="Twitter"
        >
          <FaTwitter className="text-purple-600 text-2xl md:text-3xl lg:text-2xl" />
        </a>
        
        {/* Email */}
        <a 
          href="mailto:azeezadekannmbimichael@gmail.com"
          className="p-4 rounded-full bg-white border border-gray-200 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:scale-105"
          aria-label="Email"
        >
          <HiMail className="text-purple-600 text-2xl md:text-3xl lg:text-2xl" />
        </a>
        
        {/* CV Button - Now Bigger */}
        <a
          href="https://docs.google.com/document/d/1PGBwPnyWuggefOWAypqsSBpbThAQ2PMvko92uo3bhfM/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-amber-500 text-white font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105"
          aria-label="View CV"
        >
          <BsFileEarmarkText className="text-xl text-amber-400" />
          <span className="text-base md:text-lg text-purple-50">CV</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;