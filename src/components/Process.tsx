import { Card } from "@/components/ui/card";
import { Calculator, ClipboardCheck, Wrench, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Calculator,
    title: "Free Consultation",
    description: "We analyze your energy needs and calculate potential savings",
    color: "from-primary to-primary/80",
  },
  {
    icon: ClipboardCheck,
    title: "Custom Design",
    description: "Our experts design the perfect solar system for your property",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified technicians install your system with minimal disruption",
    color: "from-accent to-accent/80",
  },
  {
    icon: Sparkles,
    title: "Start Saving",
    description: "Begin generating clean energy and watch your bills shrink",
    color: "from-primary to-secondary",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Solar in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From consultation to clean energy - we make going solar effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make the Switch?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already switched to clean, affordable solar energy
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};
