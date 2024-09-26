import { SimpleGrid } from "@chakra-ui/react";
import { promises as fs } from "fs";

import ProjectCard from "../components/projectcard";

export default async function Projects() {
  const file = await fs.readFile(
    process.cwd() + "/public/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);
  const projectsArr: JSX.Element[] = [];
  projects.projects.forEach(
    (
      item: {
        title: string;
        language: string[];
        description: string;
        link?: string;
        emoji: string;
      },
      index: number
    ) => {
      projectsArr.push(
        <ProjectCard
          key={index}
          title={item.title}
          language={item.language}
          description={item.description}
          link={item.link}
          emoji={item.emoji}
        ></ProjectCard>
      );
    }
  );
  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <SimpleGrid
        mt="4"
        mx="4"
        spacing={4}
        templateColumns={{
          base: "repeat(auto-fill, minmax(280px, 1fr))",
          md: "repeat(auto-fill, minmax(400px, 1fr))",
        }}
      >
        {projectsArr}
      </SimpleGrid>
    </div>
  );
}
