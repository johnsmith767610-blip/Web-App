import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export const AutoQuotePopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("1000-3000");
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenQuotePopup");
      if (!hasSeenPopup) {
        setOpen(true);
        sessionStorage.setItem("hasSeenQuotePopup", "true");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] pointer-events-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get Your Free Solar Quote
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll provide you with a personalized solar solution.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Full Name</Label>
            <Input
              id="popup-name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-2 focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-mobile">Mobile Number</Label>
            <Input
              id="popup-mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="border-2 focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-3">
            <Label>Monthly Electricity Bill Range</Label>
            <Tabs value={monthlyBill} onValueChange={setMonthlyBill} className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-2 h-auto p-1 bg-muted/50">
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
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Submit Quote Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
