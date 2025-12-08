import { Building2 } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Company 1",
    logo: "/src/assets/trusted-companies/company1.png",
    alt: "Company 1",
  },
  {
    id: 2,
    name: "Company 2",
    logo: "/src/assets/trusted-companies/company2.png",
    alt: "Company 2",
  },
  {
    id: 3,
    name: "Company 3",
    logo: "/src/assets/trusted-companies/company3.png",
    alt: "Company 3",
  },
  {
    id: 4,
    name: "Company 4",
    logo: "/src/assets/trusted-companies/company4.png",
    alt: "Company 4",
  },
  {
    id: 5,
    name: "Company 5",
    logo: "/src/assets/trusted-companies/company5.png",
    alt: "Company 5",
  },
  {
    id: 6,
    name: "Company 6",
    logo: "/src/assets/trusted-companies/company6.png",
    alt: "Company 6",
  },
];

export const TrustedCompanies = () => {
  return (
    <section id="trusted-companies" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Trusted Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering with India's most respected organizations in the solar and energy sector
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-6 rounded-xl border-2 border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-24 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join 6000+ satisfied customers and 100+ trusted partners in the solar revolution
          </p>
        </div>
      </div>
    </section>
  );
};
