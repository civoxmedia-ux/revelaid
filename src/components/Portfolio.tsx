import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

// Import portfolio images
import mobileAppImage from "@/assets/portfolio-mobile-app.jpg";
import websiteImage from "@/assets/portfolio-website.jpg";
import brandingImage from "@/assets/portfolio-branding.jpg";
import videoImage from "@/assets/portfolio-video.jpg";
import photographyImage from "@/assets/portfolio-photography.jpg";
import databaseImage from "@/assets/portfolio-database.jpg";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Mobile App",
    description: "Complete mobile app UI/UX design with modern shopping experience and intuitive navigation.",
    category: "UI/UX Design",
    image: mobileAppImage,
  },
  {
    id: "2",
    title: "Business Website Redesign",
    description: "Modern responsive website design with improved user experience and conversion optimization.",
    category: "Web Design",
    image: websiteImage,
  },
  {
    id: "3",
    title: "Tech Startup Branding",
    description: "Complete brand identity package including logo design, color palette, and brand guidelines.",
    category: "Branding",
    image: brandingImage,
  },
  {
    id: "4",
    title: "Product Demo Video",
    description: "Professional video production for SaaS product demonstration with motion graphics.",
    category: "Video",
    image: videoImage,
  },
  {
    id: "5",
    title: "Portrait Photography",
    description: "Professional headshots and lifestyle photography for business professionals.",
    category: "Photography",
    image: photographyImage,
  },
  {
    id: "6",
    title: "Database Architecture",
    description: "Complex database design and optimization for enterprise-level applications.",
    category: "Database Design",
    image: databaseImage,
  },
];

const categories = ["All", "UI/UX Design", "Web Design", "Branding", "Video", "Photography", "Database Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various design and development projects. 
            Each piece represents a unique solution crafted with attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "btn-hero" : "btn-hero-outline"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="portfolio-overlay">
                  <Button className="btn-hero">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {item.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            className="btn-hero"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;