import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Contact = () => {

  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      if (scrollPosition > screenHeight * 0.01) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>{showContact && 
      <motion.section
        className="flex flex-col items-center w-full px-12 py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="flex justify-center w-full text-3xl font-bold mb-6">Contact Me</h1>
        <div className="flex justify-around w-full mb-6">
          <div>Github</div>
          <div>LinkedIn</div>
          <div>Email</div>
          <div>Resume</div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="text-center">
            &copy; {new Date().getFullYear()} James Tu
          </div>
          <button 
            onClick={scrollToTop} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Back to Top
          </button>
        </div>
      </motion.section>}
    </>
  );
};

export default Contact;