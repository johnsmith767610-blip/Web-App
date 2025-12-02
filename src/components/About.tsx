import { Card } from "@/components/ui/card";
import { Zap, Award, Users, TrendingUp, Shield, Leaf } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powering India's{" "}
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Solar Revolution
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            With over 5 years of proven excellence, SolarXenergy stands as Maharashtra's most trusted solar energy partner,
            transforming sunlight into savings for thousands of satisfied customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">5+ Years of Excellence</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              From Humble Beginnings to Industry Leaders
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2019, SolarXenergy emerged with a bold vision: to make clean, affordable solar energy
              accessible to every Indian household and business. What started as a small team of passionate solar
              enthusiasts in Amravati has grown into a powerhouse serving 20+ cities across Maharashtra and beyond.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey has been fueled by unwavering commitment to quality, innovation, and customer satisfaction.
              Every installation reflects our dedication to excellence, backed by cutting-edge technology and
              world-class service standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30">
                <Zap className="w-8 h-8 text-accent mb-2" />
                <div className="text-3xl font-bold text-foreground">25MW+</div>
                <div className="text-sm text-muted-foreground">Solar Capacity Installed</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30">
                <Users className="w-8 h-8 text-secondary mb-2" />
                <div className="text-3xl font-bold text-foreground">6000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Unmatched Reliability</h4>
                  <p className="text-muted-foreground">
                    25-year warranty on all installations, backed by certified installers and premium-grade
                    solar panels that stand the test of time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Proven ROI</h4>
                  <p className="text-muted-foreground">
                    Our customers save up to 90% on electricity bills with payback periods of just 3-4 years.
                    That's over 20 years of free, clean energy!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Environmental Impact</h4>
                  <p className="text-muted-foreground">
                    Together with our customers, we've offset thousands of tons of CO2 emissions, contributing
                    to a cleaner, greener India for future generations.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 border-2 border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Our Mission: Empowering Every Rooftop
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just installing solar panels; we're building a sustainable energy future for India.
            Every project brings us closer to our vision of making solar energy the primary power source
            for every home, business, and community across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};
