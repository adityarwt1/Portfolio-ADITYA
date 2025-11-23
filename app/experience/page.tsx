import { mongoconnect } from "@/lib/mongodb";
import Experience, { ExperienceInterface } from "@/models/Experience";
import ExperienceCard from "@/components/Experience/ExperienceCard";

const Page = async () => {
  await mongoconnect();

  const experiences = await Experience.find({}).lean<ExperienceInterface[]>(); // important: convert to JSON-safe

  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-center">My Experience</h1>

      <div className="flex flex-col gap-6">
        {experiences.map((exp: ExperienceInterface) => (
          <ExperienceCard
            key={exp.joinedDate }
            companyName={exp.companyName}
            joinedDate={exp.joinedDate}
            description={exp.description}
            achives={exp.achives}
            techStack={exp.techStack}
            techAchives={exp.techAchives}
            companyLogo={exp.companyLogo}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
