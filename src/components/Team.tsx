import { Card, CardContent } from "@/components/ui/card";
import altamashPhoto from "@/assets/Altamash Ahmad.jpeg";
import awaisPhoto from "@/assets/Awais Ali.jpeg";

const founders = [
  {
    name: "Altamash Ahmad",
    designation: "Founder, SolarX Energy",
    photo: altamashPhoto,
    isFounder: true,
  },
  {
    name: "Awais Ali",
    designation: "Founder, SolarX Energy",
    photo: awaisPhoto,
    isFounder: true,
  },
];

const teamMembers = [
  { name: "Priya Sharma", designation: "Sales Manager" },
  { name: "Mohammed Iqbal", designation: "Operations Head" },
  { name: "Sneha Patil", designation: "HR Specialist" },
  { name: "Rahul Deshmukh", designation: "Lead Technician" },
  { name: "Fatima Khan", designation: "Customer Relations Manager" },
  { name: "Aditya Kulkarni", designation: "Project Manager" },
  { name: "Zainab Shaikh", designation: "Quality Assurance Lead" },
  { name: "Vikram Pawar", designation: "Senior Installation Engineer" },
  { name: "Ananya Joshi", designation: "Finance Manager" },
  { name: "Arif Ansari", designation: "Technical Support Lead" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Driven by passion, powered by expertise. Our team is committed to delivering excellence in solar energy solutions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Founders</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">{founder.name}</h4>
                  <p className="text-lg font-semibold text-foreground">{founder.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Our Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border hover:border-secondary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-3xl font-bold text-secondary group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
