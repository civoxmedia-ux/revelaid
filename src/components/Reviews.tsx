import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Review {
  id: string;
  clientName: string;
  rating: number;
  feedback: string;
  initials: string;
  position?: string;
  company?: string;
}

const reviews: Review[] = [
  {
    id: "1",
    clientName: "Alex Johnson",
    rating: 5,
    feedback: "Excellent work on our website redesign. Very professional and delivered on time. Sarah's attention to detail and creativity exceeded our expectations.",
    initials: "AJ",
    position: "Marketing Director",
    company: "TechFlow Inc."
  },
  {
    id: "2",
    clientName: "Maria Garcia",
    rating: 5,
    feedback: "Sarah's attention to detail is amazing. Our brand identity looks fantastic! She understood our vision perfectly and brought it to life beautifully.",
    initials: "MG",
    position: "Founder",
    company: "Bloom Studios"
  },
  {
    id: "3",
    clientName: "David Chen",
    rating: 5,
    feedback: "The mobile app UI she designed for us is intuitive and beautiful. Our users love the new interface. Highly recommend her services!",
    initials: "DC",
    position: "Product Manager",
    company: "AppVenture"
  },
  {
    id: "4",
    clientName: "Jennifer Lee",
    rating: 5,
    feedback: "Professional video production that perfectly captured our product's essence. The final video exceeded all our expectations and boosted our conversions.",
    initials: "JL",
    position: "CEO",
    company: "InnovateTech"
  },
  {
    id: "5",
    clientName: "Michael Brown",
    rating: 5,
    feedback: "Outstanding database design work. Sarah optimized our entire system and improved performance significantly. Very knowledgeable and efficient.",
    initials: "MB",
    position: "CTO",
    company: "DataFlow Systems"
  },
  {
    id: "6",
    clientName: "Sophie Taylor",
    rating: 5,
    feedback: "Beautiful photography for our team headshots. Sarah made everyone feel comfortable and the results were absolutely stunning. Professional and creative!",
    initials: "ST",
    position: "HR Director",
    company: "Creative Minds Agency"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me on their projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="card-pastel">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.clientName}
                    </h4>
                    {review.position && review.company && (
                      <p className="text-sm text-muted-foreground">
                        {review.position} at {review.company}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-1">100%</h3>
              <p className="text-muted-foreground text-sm">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent mb-1">5.0</h3>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-lavender mb-1">3+</h3>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;