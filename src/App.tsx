import { Navbar, Hero, About, Skills, Work, Contact, Footer } from "./components";

function App() {
  return (
    <div className="relative z-0">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
