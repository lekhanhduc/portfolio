import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-primary/20 flex justify-center">
      <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-secondary text-xs">
            © 2025 Le Khanh Duc. All rights reserved.
          </p>
          <p className="text-secondary text-xs flex items-center gap-1">
            Made with <FaHeart className="text-primary text-[10px]" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
