import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";
import { useEffect } from "react";
import { smoothScrollToElement } from "@/lib/scroll-utils";

export const Hero = () => {
  useEffect(() => {
    const ctaButton = document.querySelector('[data-cta="get-free-quote"]');
    if (ctaButton) {
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollToElement('get-free-quote');
      });
    }
  }, []);

  return (
    <header id="header" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern solar panel installation on residential rooftops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">India's #1 Rated Solar Company</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Still paying for{" "}
            <span className="solar-gradient-text">
              electricity?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Switch to solar. Let the sun pay your bills.
            <br />
            Save up to <span className="text-accent font-bold">90%</span> on your electricity costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#get-free-quote"
              data-cta="get-free-quote"
              className="btn-solar text-lg flex items-center justify-center"
            >
              Get Your Free Quote Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-2 hover:bg-primary/5"
            >
              Calculate Savings
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <span className="font-medium">4.8/5 on Google</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="font-medium">6000+ Happy Customers</span>
            <div className="h-4 w-px bg-border" />
            <span className="font-medium">20+ Cities Served</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </header>
  );
};
