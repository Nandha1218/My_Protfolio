import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return setIsVisible(false);
      const rect = contactSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <footer className="w-full bg-gray-100 text-center py-4 border-t border-gray-200 fixed bottom-0 left-0">
      <span className="text-gray-600 text-sm">© 2025 Nandha Portfolio. All rights reserved.</span>
    </footer>
  ) : null;
};

export default Footer;
