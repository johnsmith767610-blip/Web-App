import "./trusted-companies.css";

const brands = [
  { id: 1, name: "D'Decor", color: "bg-orange-500" },
  { id: 2, name: "Prince Piping Systems", color: "bg-blue-600" },
  { id: 3, name: "TVS", color: "bg-purple-600" },
  { id: 4, name: "UltraTech Cement", color: "bg-green-600" },
  { id: 5, name: "Johnson & Johnson", color: "bg-red-500" },
  { id: 6, name: "Mahindra", color: "bg-blue-500" },
  { id: 7, name: "Bajaj", color: "bg-yellow-600" },
  { id: 8, name: "L&T", color: "bg-cyan-600" },
  { id: 9, name: "Tata Group", color: "bg-indigo-700" },
  { id: 10, name: "Adani Group", color: "bg-emerald-600" },
  { id: 11, name: "Havells", color: "bg-orange-600" },
  { id: 12, name: "Polycab", color: "bg-red-600" },
  { id: 13, name: "Asian Paints", color: "bg-orange-500" },
  { id: 14, name: "Godrej", color: "bg-teal-600" },
  { id: 15, name: "JSW Group", color: "bg-blue-700" },
];

export const TrustedCompanies = () => {
  return (
    <section id="trusted-companies" className="py-20 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="text-orange-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are proud to power some of India's most respected brands with clean solar energy
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="carousel-container">
            <div className="carousel-track">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className={`carousel-item ${brand.color} px-6 py-3 rounded-full text-white font-semibold text-sm md:text-base whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {brand.name}
                </div>
              ))}
              {brands.map((brand) => (
                <div
                  key={`duplicate-${brand.id}`}
                  className={`carousel-item ${brand.color} px-6 py-3 rounded-full text-white font-semibold text-sm md:text-base whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Trusted by 6000+ satisfied customers across India for clean, affordable solar energy
          </p>
        </div>
      </div>
    </section>
  );
};
