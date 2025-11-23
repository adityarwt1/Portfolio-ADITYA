import { mongoconnect } from "@/lib/mongodb";
import Project, { ProjectInterface } from "@/models/Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = async () => {
  await mongoconnect();

  const projects = await Project.find().lean<ProjectInterface[]>();

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10">
      {projects.map((project) => (
        <Card key={project.title} className="shadow-md border rounded-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* LEFT → Thumbnail */}
              <div className="w-full md:w-1/3">
                <Image
                  src={project.thumbNail}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              {/* RIGHT → Info */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold">{project.title}</h2>

                <p className="text-gray-700 text-sm">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="font-medium mb-2">Key Features:</h3>
                  <ul className="list-disc ml-6 text-sm space-y-1">
                    {project.keyFeature.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <Button asChild>
                    <a href={project.liveLink} target="_blank">
                      Live Demo
                    </a>
                  </Button>

                  <Button variant="outline" asChild>
                    <a href={project.gitHubLink} target="_blank">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
