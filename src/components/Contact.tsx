import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah@sarahchen.design",
      href: "mailto:sarah@sarahchen.design",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sarahchen",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sarahchen",
      color: "hover:text-gray-800",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/sarahchen.design",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="form-pastel">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="card-pastel">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-pastel">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-muted rounded-lg hover:bg-primary/10 transition-colors ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Follow my work and get updates on new projects and insights into the design process.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-pastel bg-gradient-accent">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-accent-foreground mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-accent-foreground/80 mb-4">
                    Let's discuss your project and turn your vision into reality.
                  </p>
                  <Button 
                    className="btn-hero"
                    onClick={() => {
                      const element = document.querySelector("#services");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;