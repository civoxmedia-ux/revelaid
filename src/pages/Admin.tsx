import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Invoice {
  id: string;
  clientName: string;
  email: string;
  serviceType: string;
  budget: string;
  status: "pending" | "approved" | "paid";
  date: string;
}

interface Review {
  id: string;
  clientName: string;
  rating: number;
  feedback: string;
  profilePhoto?: string;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  // Mock data
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-001",
      clientName: "John Doe",
      email: "john@example.com",
      serviceType: "Web Design",
      budget: "$500-$1000",
      status: "pending",
      date: "2024-01-15"
    },
    {
      id: "INV-002",
      clientName: "Jane Smith",
      email: "jane@example.com",
      serviceType: "UI/UX Design",
      budget: "$1000+",
      status: "approved",
      date: "2024-01-14"
    }
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      clientName: "Alex Johnson",
      rating: 5,
      feedback: "Excellent work on our website redesign. Very professional and delivered on time."
    },
    {
      id: "2",
      clientName: "Maria Garcia",
      rating: 5,
      feedback: "Sarah's attention to detail is amazing. Our brand identity looks fantastic!"
    }
  ]);

  const [newReview, setNewReview] = useState({
    clientName: "",
    rating: 5,
    feedback: ""
  });

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel!"
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive"
      });
    }
  };

  const updateInvoiceStatus = (id: string, status: "pending" | "approved" | "paid") => {
    setInvoices(prev => 
      prev.map(invoice => 
        invoice.id === id ? { ...invoice, status } : invoice
      )
    );
    toast({
      title: "Status updated",
      description: `Invoice ${id} status changed to ${status}`
    });
  };

  const addReview = () => {
    if (newReview.clientName && newReview.feedback) {
      const review: Review = {
        id: Date.now().toString(),
        ...newReview
      };
      setReviews(prev => [...prev, review]);
      setNewReview({ clientName: "", rating: 5, feedback: "" });
      toast({
        title: "Review added",
        description: "New review has been added successfully"
      });
    }
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(review => review.id !== id));
    toast({
      title: "Review deleted",
      description: "Review has been removed"
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md form-pastel">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full btn-hero">
              Login
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Demo: admin / admin123
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
          <Button 
            onClick={() => setIsLoggedIn(false)}
            variant="outline"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="invoices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="invoices">Invoice Management</TabsTrigger>
            <TabsTrigger value="reviews">Reviews Management</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="space-y-4">
            <Card className="card-pastel">
              <CardHeader>
                <CardTitle>Invoice Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Invoice ID</th>
                        <th className="text-left p-2">Client</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Service</th>
                        <th className="text-left p-2">Budget</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b">
                          <td className="p-2 font-medium">{invoice.id}</td>
                          <td className="p-2">{invoice.clientName}</td>
                          <td className="p-2">{invoice.email}</td>
                          <td className="p-2">{invoice.serviceType}</td>
                          <td className="p-2">{invoice.budget}</td>
                          <td className="p-2">
                            <Badge 
                              variant={
                                invoice.status === "paid" ? "default" : 
                                invoice.status === "approved" ? "secondary" : "outline"
                              }
                            >
                              {invoice.status}
                            </Badge>
                          </td>
                          <td className="p-2">
                            <Select
                              value={invoice.status}
                              onValueChange={(value: "pending" | "approved" | "paid") => 
                                updateInvoiceStatus(invoice.id, value)
                              }
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-pastel">
                <CardHeader>
                  <CardTitle>Add New Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={newReview.clientName}
                      onChange={(e) => setNewReview(prev => ({ ...prev, clientName: e.target.value }))}
                      placeholder="Enter client name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Select
                      value={newReview.rating.toString()}
                      onValueChange={(value) => setNewReview(prev => ({ ...prev, rating: parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="1">1 Star</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea
                      id="feedback"
                      value={newReview.feedback}
                      onChange={(e) => setNewReview(prev => ({ ...prev, feedback: e.target.value }))}
                      placeholder="Enter client feedback"
                      rows={3}
                    />
                  </div>
                  <Button onClick={addReview} className="w-full btn-hero">
                    Add Review
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-pastel">
                <CardHeader>
                  <CardTitle>Existing Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{review.clientName}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                ⭐
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button 
                          onClick={() => deleteReview(review.id)}
                          variant="destructive"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.feedback}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;