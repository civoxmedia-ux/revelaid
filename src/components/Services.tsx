import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, Mail } from "lucide-react";

interface InvoiceForm {
  clientName: string;
  email: string;
  serviceType: string;
  budget: string;
  description: string;
  timeline: string;
  contactMethod: string;
}

const Services = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InvoiceForm>({
    clientName: "",
    email: "",
    serviceType: "",
    budget: "",
    description: "",
    timeline: "",
    contactMethod: "",
  });
  
  const [generatedInvoice, setGeneratedInvoice] = useState<any>(null);

  const handleInputChange = (field: keyof InvoiceForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const clearForm = () => {
    setFormData({
      clientName: "",
      email: "",
      serviceType: "",
      budget: "",
      description: "",
      timeline: "",
      contactMethod: "",
    });
    setGeneratedInvoice(null);
  };

  const generateInvoice = () => {
    if (!formData.clientName || !formData.email || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Service Type)",
        variant: "destructive",
      });
      return;
    }

    const invoice = {
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString(),
      status: "Pending",
      paymentTerms: "Net 30 days",
      client: formData,
    };

    setGeneratedInvoice(invoice);
    
    // Simulate EmailJS integration
    toast({
      title: "Invoice Generated!",
      description: "Invoice has been generated and sent to your email.",
    });

    // In a real app, you would integrate with EmailJS here
    console.log("Invoice generated:", invoice);
  };

  const downloadPDF = () => {
    // Simulate PDF download
    toast({
      title: "PDF Downloaded",
      description: "Invoice PDF has been downloaded to your device.",
    });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request <span className="text-primary">Invoice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below to request a detailed invoice 
            tailored to your specific needs and timeline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Invoice Form */}
            <Card className="form-pastel">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Client Name *</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange("clientName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="video-production">Video Production</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="database-design">Database Design</SelectItem>
                      <SelectItem value="brand-identity">Brand Identity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-200">Under $200</SelectItem>
                      <SelectItem value="200-500">$200 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-plus">$1,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How should I contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your project requirements, goals, and any specific details..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button onClick={clearForm} variant="outline" className="flex-1">
                    Clear Form
                  </Button>
                  <Button onClick={generateInvoice} className="btn-hero flex-1">
                    Generate Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generated Invoice */}
            <Card className="form-pastel">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Invoice Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {generatedInvoice ? (
                  <div className="space-y-6">
                    <div className="text-center border-b border-border pb-4">
                      <h3 className="text-xl font-bold text-foreground">Sarah Chen Design</h3>
                      <p className="text-muted-foreground">Professional Design Services</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground">Invoice Number:</p>
                        <p className="text-muted-foreground">{generatedInvoice.invoiceNumber}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Date:</p>
                        <p className="text-muted-foreground">{generatedInvoice.date}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Status:</p>
                        <span className="inline-block px-2 py-1 bg-warning/20 text-warning rounded text-xs">
                          {generatedInvoice.status}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Payment Terms:</p>
                        <p className="text-muted-foreground">{generatedInvoice.paymentTerms}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h4 className="font-medium text-foreground mb-2">Client Information:</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><span className="font-medium">Name:</span> {generatedInvoice.client.clientName}</p>
                        <p><span className="font-medium">Email:</span> {generatedInvoice.client.email}</p>
                        <p><span className="font-medium">Service:</span> {generatedInvoice.client.serviceType}</p>
                        {generatedInvoice.client.budget && (
                          <p><span className="font-medium">Budget:</span> {generatedInvoice.client.budget}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={downloadPDF} variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button className="btn-hero flex-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Fill out the form to generate your invoice preview
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;