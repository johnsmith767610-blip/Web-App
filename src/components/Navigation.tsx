import { Menu, X, Phone, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { QuoteForm } from "./QuoteForm";
import { smoothScrollToElement } from "@/lib/scroll-utils";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const href = target.getAttribute('href') || target.getAttribute('data-scroll');

      if (href?.startsWith('#')) {
        e.preventDefault();
        const elementId = href.slice(1);
        smoothScrollToElement(elementId);
        setMobileMenuOpen(false);

        if (target.dataset.ga && (window as any).gtag) {
          (window as any).gtag('event', target.dataset.ga);
        }
      }
    };

    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick as any);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick as any);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src={logo}
                alt="SolarXenergy - Switch to solar, Safe for life"
                className="h-16 w-auto md:h-20"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#header"
              data-nav-link
              className="text-foreground/80 hover:text-primary smooth-transition font-medium"
            >
              Home
            </a>
            <a
              href="#solutions"
              data-nav-link
              className="text-foreground/80 hover:text-primary smooth-transition font-medium"
            >
              Solutions
            </a>
            <a
              href="#benefits"
              data-nav-link
              className="text-foreground/80 hover:text-primary smooth-transition font-medium"
            >
              Benefits
            </a>
            <a
              href="#process"
              data-nav-link
              className="text-foreground/80 hover:text-primary smooth-transition font-medium"
            >
              Our Process
            </a>
            <a
              href="#testimonials"
              data-nav-link
              className="text-foreground/80 hover:text-primary smooth-transition font-medium"
            >
              Reviews
            </a>
            <Link to="/subsidy" className="text-foreground/80 hover:text-primary smooth-transition font-medium">
              Subsidy
            </Link>
            <a
              href="#get-free-quote"
              data-nav-link
              data-ga="join-solar-cta"
              className="btn-solar text-sm"
            >
              Join the Solar Revolution
            </a>
            <a href="tel:8975496979" className="flex items-center gap-2 text-primary hover:text-secondary smooth-transition font-semibold">
              <Phone className="w-4 h-4" />
              <span>8975496979</span>
            </a>
            <QuoteForm />
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <a
                href="#header"
                data-nav-link
                className="text-foreground/80 hover:text-primary py-2 font-medium"
              >
                Home
              </a>
              <a
                href="#solutions"
                data-nav-link
                className="text-foreground/80 hover:text-primary py-2 font-medium"
              >
                Solutions
              </a>
              <a
                href="#benefits"
                data-nav-link
                className="text-foreground/80 hover:text-primary py-2 font-medium"
              >
                Benefits
              </a>
              <a
                href="#process"
                data-nav-link
                className="text-foreground/80 hover:text-primary py-2 font-medium"
              >
                Our Process
              </a>
              <a
                href="#testimonials"
                data-nav-link
                className="text-foreground/80 hover:text-primary py-2 font-medium"
              >
                Reviews
              </a>
              <Link to="/subsidy" className="text-foreground/80 hover:text-primary py-2 font-medium">
                Subsidy
              </Link>
              <a
                href="#get-free-quote"
                data-nav-link
                data-ga="join-solar-cta"
                className="btn-solar text-sm w-full text-center"
              >
                Join the Solar Revolution
              </a>
              <a href="tel:8975496979" className="flex items-center gap-2 text-primary hover:text-secondary py-2 font-semibold">
                <Phone className="w-4 h-4" />
                <span>8975496979</span>
              </a>
              <QuoteForm />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
