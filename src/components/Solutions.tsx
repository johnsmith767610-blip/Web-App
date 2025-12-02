import { Card } from "@/components/ui/card";
import { Home, Building2, Users, Zap, ShieldCheck, TrendingDown } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete solar solutions for homes. Save on bills and gain energy independence.",
    features: ["Up to 90% savings", "25-year warranty", "Zero maintenance"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Scale your business savings with enterprise-grade solar installations.",
    features: ["Tax benefits", "ROI in 3-4 years", "Boost brand image"],
  },
  {
    icon: Users,
    title: "Housing Societies",
    description: "Shared solar solutions for apartment complexes and gated communities.",
    features: ["Common area power", "Reduce maintenance", "Increase property value"],
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "90% Bill Reduction",
    description: "Dramatically cut your electricity expenses",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "Long-term protection and peace of mind",
  },
  {
    icon: Zap,
    title: "Zero Maintenance",
    description: "Hassle-free clean energy generation",
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solar Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From homes to enterprises, we power your future with clean, affordable energy
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all animate-in fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
