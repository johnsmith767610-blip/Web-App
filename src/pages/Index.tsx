import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { AutoQuotePopup } from "@/components/AutoQuotePopup";
import { QuoteForm } from "@/components/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Process />
      <Testimonials />
      <QuoteForm />
      <Team />
      <Footer />
      <AutoQuotePopup />
    </div>
  );
};

export default Index;
