import TeamMemberCard from "./TeamMemberCard";
import SectionLabel from "./SectionLabel";

const headTeamMembers = [
  { name: "Sule Abdullahi Abdul", role: "Director I", image: "/director.jpg" },
  { name: "Usman Muhammad Gali", role: "Director II", image: "/director-2.jpeg" },
  { name: "Surajo Sani", role: "General Manager", image: "/g-manager.jpeg" },
  { name: "Abba Yahaya Warawa", role: "Senior Advisor", image: "/advicer.jpg" },
];

export default function HeadTeam() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex flex-col gap-2 max-w-xl mb-12">
          <SectionLabel text="Leadership Team" />
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            The People Driving Our Success
          </h2>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {headTeamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}