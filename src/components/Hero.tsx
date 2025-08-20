import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Sarah Chen</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Freelance Designer & Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I specialize in creating beautiful digital experiences through{" "}
              <span className="text-accent font-medium">UI/UX Design</span>,{" "}
              <span className="text-lavender font-medium">Web Development</span>,{" "}
              <span className="text-secondary font-medium">Brand Identity</span>, and{" "}
              <span className="text-beige font-medium">Video Production</span>.
              Let's bring your vision to life with modern, user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero group"
                onClick={() => scrollToSection("#portfolio")}
              >
                <Eye className="w-5 h-5 mr-2" />
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                className="btn-hero-outline"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["UI/UX Design", "React Development", "Brand Identity", "Video Editing"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30 scale-110"></div>
              <div className="relative bg-card rounded-3xl p-4 shadow-[var(--shadow-card)]">
                <img
                  src={profileImage}
                  alt="Sarah Chen - Freelance Designer & Developer"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg">
                  <p className="font-semibold">Available for projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;