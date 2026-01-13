import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar, Hero, About, Skills, Work, Contact, Footer } from "./components";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
