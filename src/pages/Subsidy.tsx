import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check, IndianRupee, Home, Zap, TrendingUp, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Subsidy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <IndianRupee className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Government Subsidy Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get ₹78,000 Subsidy on Residential Solar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Central Government offers substantial financial support for homeowners switching to clean solar energy. Make your solar installation more affordable today!
            </p>
          </div>

          {/* Main Subsidy Card */}
          <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-primary" />
                    <span className="text-6xl font-bold text-primary">78,000</span>
                  </div>
                  <p className="text-2xl font-semibold mb-6">Direct Subsidy Amount</p>
                  <p className="text-muted-foreground mb-6">
                    This substantial subsidy from the Central Government significantly reduces your upfront solar installation costs, making clean energy accessible to every Indian household.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    Check Your Eligibility
                  </Button>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                    <Home className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">For Residential Properties</h3>
                      <p className="text-sm text-muted-foreground">Available for individual house owners and residential complexes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                    <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Instant Savings</h3>
                      <p className="text-sm text-muted-foreground">Subsidy is adjusted directly in your installation cost</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border">
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Faster ROI</h3>
                      <p className="text-sm text-muted-foreground">Recover your investment even quicker with this support</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
            <p className="text-muted-foreground text-lg">Check if you qualify for the government subsidy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Property Type",
                items: ["Individual residential house", "Residential welfare associations", "Group housing societies"]
              },
              {
                title: "System Size",
                items: ["Minimum 1 kW system", "Maximum up to 10 kW for individual houses", "Based on sanctioned load"]
              },
              {
                title: "Installation Standards",
                items: ["MNRE approved solar panels", "Certified solar installers only", "Grid-connected rooftop systems"]
              },
              {
                title: "Documentation",
                items: ["Property ownership proof", "Electricity connection proof", "Aadhaar card and bank details"]
              }
            ].map((category, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply for Subsidy</h2>
            <p className="text-muted-foreground text-lg">Simple steps to claim your ₹78,000 subsidy</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, title: "Step 1", desc: "Contact approved solar installer", color: "primary" },
              { icon: Home, title: "Step 2", desc: "Site survey and system design", color: "secondary" },
              { icon: IndianRupee, title: "Step 3", desc: "Installer applies for subsidy", color: "accent" },
              { icon: Zap, title: "Step 4", desc: "Installation with subsidy benefit", color: "primary" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${step.color}/10 flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              SolarXenergy is an approved installer and will handle all subsidy paperwork for you
            </p>
            <Button size="lg" className="text-lg px-8">
              Get Started with Subsidy
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Subsidized Solar?</h2>
            <p className="text-muted-foreground text-lg">Maximum benefits for your investment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-secondary/50 transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <IndianRupee className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">40-50% Cost Reduction</h3>
                <p className="text-muted-foreground">
                  The subsidy covers a significant portion of your installation costs, making solar highly affordable
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-accent/50 transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">3-4 Year Payback</h3>
                <p className="text-muted-foreground">
                  With subsidy, recover your complete investment in just 3-4 years through electricity savings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">25+ Years Returns</h3>
                <p className="text-muted-foreground">
                  Enjoy free electricity for 25+ years after payback period with minimal maintenance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subsidy;