"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ExperienceProps {
  companyName: string;
  joinedDate: number;
  description: string;
  achives: string[];
  techStack: string[];
  techAchives: string[];
  companyLogo:string
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  companyName,
  joinedDate,
  description,
  achives,
  techStack,
  techAchives,
  companyLogo
}) => {
  return (
    <Card className="w-full p-4 shadow-md border border-white/10">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold">{companyName}</CardTitle>
            <p className="text-sm opacity-70">
              Joined: {new Date(joinedDate).toDateString()}
            </p>
          </div>

          {/* Company Logo */}
          {companyLogo && (
            <Image
              src={companyLogo}
              width={100}
              height={100}
              alt={`${companyName} logo`}
              className="w-[100px] h-[100px] object-contain rounded-lg"
            />
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <p className="text-base">{description}</p>

        <Separator />

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <ul className="list-disc ml-5 space-y-1">
            {achives.map((item, idx) => (
              <li key={idx} className="opacity-90">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
          <div className="flex gap-2 flex-wrap">
            {techStack.map((t, idx) => (
              <Badge key={idx} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Technical Achievements */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Technical Achievements</h3>
          <ul className="list-disc ml-5 space-y-1">
            {techAchives.map((item, idx) => (
              <li key={idx} className="opacity-90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
