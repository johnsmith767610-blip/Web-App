import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Switching to solar was the best decision! My electricity bill dropped by 85%. The installation was smooth and the team was professional.",
    savings: "₹12,000/month",
  },
  {
    name: "Sneha Deshmukh",
    location: "Amravati",
    rating: 5,
    text: "SolarXenergy transformed our home in Amravati! The entire process was seamless and we're already seeing massive savings on our electricity bills.",
    savings: "₹9,500/month",
  },
  {
    name: "Mohammed Iqbal",
    location: "Amravati",
    rating: 5,
    text: "Best decision for our business in Amravati. Professional installation, excellent after-sales service, and the ROI is phenomenal!",
    savings: "₹35,000/month",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "Outstanding service from consultation to installation. The system has been running flawlessly for 2 years now. Highly recommend!",
    savings: "₹8,500/month",
  },
  {
    name: "Amit Patel",
    location: "Pune",
    rating: 5,
    text: "As a business owner, solar made perfect sense. Great ROI and we're doing our part for the environment. Win-win!",
    savings: "₹45,000/month",
  },
  {
    name: "Fatima Khan",
    location: "Nagpur",
    rating: 5,
    text: "The team was incredibly professional and knowledgeable. Our monthly electricity costs have dropped by 90%. Highly satisfied!",
    savings: "₹11,000/month",
  },
  {
    name: "Suresh Kulkarni",
    location: "Amravati",
    rating: 5,
    text: "Living in Amravati, I was looking for reliable solar solutions. SolarXenergy exceeded all expectations with quality installation and great support!",
    savings: "₹7,800/month",
  },
  {
    name: "Aisha Shaikh",
    location: "Mumbai",
    rating: 5,
    text: "From consultation to activation, everything was handled professionally. The savings on electricity bills are real and substantial!",
    savings: "₹13,500/month",
  },
  {
    name: "Vikram Pawar",
    location: "Nashik",
    rating: 5,
    text: "Solar installation was completed in just 3 days. The quality of panels and inverters is top-notch. Very happy with the decision!",
    savings: "₹10,200/month",
  },
  {
    name: "Zainab Ansari",
    location: "Amravati",
    rating: 5,
    text: "Proud to have gone solar with SolarXenergy in Amravati. Clean energy, massive savings, and contributing to a greener planet!",
    savings: "₹8,900/month",
  },
  {
    name: "Rahul Deshmukh",
    location: "Pune",
    rating: 5,
    text: "The entire team was supportive throughout. Installation was quick, and the system performs even better than promised!",
    savings: "₹14,000/month",
  },
  {
    name: "Kavita Joshi",
    location: "Thane",
    rating: 5,
    text: "Best investment we made for our home. The solar panels are generating more power than we expected. Excellent service!",
    savings: "₹9,200/month",
  },
  {
    name: "Arif Khan",
    location: "Aurangabad",
    rating: 5,
    text: "Professional installation, transparent pricing, and excellent after-sales support. Our factory is now running on clean solar energy!",
    savings: "₹52,000/month",
  },
  {
    name: "Manisha Patil",
    location: "Kolhapur",
    rating: 5,
    text: "We were skeptical at first, but SolarXenergy proved us wrong. The system works flawlessly and the savings are real!",
    savings: "₹7,500/month",
  },
  {
    name: "Salman Sheikh",
    location: "Solapur",
    rating: 5,
    text: "Highly recommend SolarXenergy to everyone. The quality of equipment and installation service is world-class!",
    savings: "₹11,800/month",
  },
  {
    name: "Pooja Kulkarni",
    location: "Amravati",
    rating: 5,
    text: "So glad we chose SolarXenergy for our Amravati home. The team handled everything professionally and our bills are now minimal!",
    savings: "₹6,900/month",
  },
  {
    name: "Imran Ahmed",
    location: "Mumbai",
    rating: 5,
    text: "From site survey to final commissioning, everything was perfect. The system generates excellent power even on cloudy days!",
    savings: "₹15,500/month",
  },
  {
    name: "Anjali Deshmukh",
    location: "Nagpur",
    rating: 5,
    text: "The 25-year warranty gave us confidence. After 1 year of use, the system still performs like new. Worth every rupee!",
    savings: "₹10,500/month",
  },
  {
    name: "Yusuf Khan",
    location: "Pune",
    rating: 5,
    text: "Our society installed a 50kW system and the results are phenomenal. Common area electricity costs are down by 85%!",
    savings: "₹38,000/month",
  },
  {
    name: "Shruti Joshi",
    location: "Mumbai",
    rating: 5,
    text: "Clean energy, zero maintenance, and huge savings. SolarXenergy made our dream of going green a reality!",
    savings: "₹12,500/month",
  },
  {
    name: "Farhan Shaikh",
    location: "Thane",
    rating: 5,
    text: "Exceptional service quality and genuine products. The installation team was skilled and completed everything on time!",
    savings: "₹9,800/month",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers saving money and the planet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Saves</p>
                    <p className="font-bold text-accent">{testimonial.savings}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              6000+
            </div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              25MW+
            </div>
            <p className="text-muted-foreground">Solar Capacity Installed</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              20+
            </div>
            <p className="text-muted-foreground">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};
