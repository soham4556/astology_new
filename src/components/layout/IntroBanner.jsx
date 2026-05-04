import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bannerImg from "../../assets/images/welcome-banner.jpg";

export default function IntroBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show for 3 seconds as requested
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="intro-banner-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Blurred Background */}
          <div className="intro-banner-bg-blur"></div>

          {/* Centered Poster */}
          <motion.div 
            className="intro-banner-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              boxShadow: [
                "0 0 20px rgba(240, 192, 64, 0.3)",
                "0 0 50px rgba(240, 192, 64, 0.6)",
                "0 0 20px rgba(240, 192, 64, 0.3)"
              ]
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              boxShadow: {
                repeat: Infinity,
                duration: 2
              }
            }}
          >
            <div className="banner-glow-effect"></div>
            <img 
              src={bannerImg} 
              alt="Welcome to Acharya Ratish Kumar Jyotish Kendra" 
              className="welcome-poster-img"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
