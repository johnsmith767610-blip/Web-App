import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Sun } from "lucide-react";

export const QuoteForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("1000-3000");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/quote_requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name,
            mobile,
            monthly_bill: monthlyBill,
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll contact you soon with your personalized solar quote.",
        });

        setName("");
        setMobile("");
        setMonthlyBill("1000-3000");
        setOpen(false);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at 8975496979",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="btn-solar text-lg font-semibold flex items-center gap-2"
          >
            <Sun className="w-5 h-5" />
            Get Free Quote
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] pointer-events-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold solar-gradient-text flex items-center gap-2">
              <Sun className="w-6 h-6 text-primary" />
              Get Your Free Solar Quote
            </DialogTitle>
            <DialogDescription>
              Fill in your details and we'll provide you with a personalized solar solution.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-2 focus:border-primary transition-colors rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                pattern="[0-9]{10}"
                maxLength={10}
                className="border-2 focus:border-primary transition-colors rounded-lg"
              />
            </div>

            <div className="space-y-3">
              <Label>Monthly Electricity Bill Range</Label>
              <Tabs value={monthlyBill} onValueChange={setMonthlyBill} className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-2 h-auto p-1 bg-muted/50 rounded-lg">
                  <TabsTrigger
                    value="1000-3000"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3 rounded-lg transition-all"
                  >
                    ₹1,000 - ₹3,000
                  </TabsTrigger>
                  <TabsTrigger
                    value="3000-6000"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white py-3 rounded-lg transition-all"
                  >
                    ₹3,000 - ₹6,000
                  </TabsTrigger>
                  <TabsTrigger
                    value="6000-10000"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-primary data-[state=active]:text-white py-3 rounded-lg transition-all"
                  >
                    ₹6,000 - ₹10,000
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Button
              type="submit"
              className="btn-solar w-full text-lg py-6 flex items-center justify-center gap-2"
            >
              <Sun className="w-5 h-5" />
              Submit Quote Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <section id="get-free-quote" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Go <span className="solar-gradient-text">Solar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your free personalized quote today and start saving on electricity costs tomorrow.
            </p>
          </div>

          <div className="max-w-2xl mx-auto card-solar p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="quote-name">Full Name</Label>
                <Input
                  id="quote-name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-2 focus:border-primary transition-colors rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-mobile">Mobile Number</Label>
                <Input
                  id="quote-mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="border-2 focus:border-primary transition-colors rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <Label>Monthly Electricity Bill Range</Label>
                <Tabs value={monthlyBill} onValueChange={setMonthlyBill} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 gap-2 h-auto p-1 bg-muted/50 rounded-lg">
                    <TabsTrigger
                      value="1000-3000"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3 rounded-lg transition-all"
                    >
                      ₹1,000 - ₹3,000
                    </TabsTrigger>
                    <TabsTrigger
                      value="3000-6000"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white py-3 rounded-lg transition-all"
                    >
                      ₹3,000 - ₹6,000
                    </TabsTrigger>
                    <TabsTrigger
                      value="6000-10000"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-primary data-[state=active]:text-white py-3 rounded-lg transition-all"
                    >
                      ₹6,000 - ₹10,000
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Button
                type="submit"
                className="btn-solar w-full text-lg py-6 flex items-center justify-center gap-2"
              >
                <Sun className="w-5 h-5" />
                Get Your Free Quote Today
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
