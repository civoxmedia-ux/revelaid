import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Reviews />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Sarah Chen. All rights reserved. Designed & Developed with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
