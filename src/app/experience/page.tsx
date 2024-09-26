import { VStack, Box, Text, Grid } from "@chakra-ui/react";
import { promises as fs } from "fs";

import ExperienceCard from "../components/experiencecard";

interface Experience {
  company: string;
  title: string;
  timerange: string;
  type: string;
  achievements: string[];
}

export default async function Experience() {
  const file = await fs.readFile(
    process.cwd() + "/public/experiences.json",
    "utf8"
  );
  const experiences = JSON.parse(file);

  const internships: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "internship"
  );
  const jobs: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "job"
  );
  const extracurriculars: Experience[] = experiences.experiences.filter(
    (exp: Experience) => exp.type === "extracurricular"
  );

  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <VStack spacing={4} align="stretch" p={5} borderRadius="md">
        <Text fontSize="3xl" fontWeight="extrabold" textDecoration="underline">
          Internships
        </Text>
        {internships.map((exp: Experience, index: number) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            title={exp.title}
            timerange={exp.timerange}
            type={exp.type}
            achievements={exp.achievements}
          />
        ))}
      </VStack>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={6}>
        <VStack spacing={4} align="stretch" p={5} borderRadius="md">
          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            textDecoration="underline"
          >
            Extracurriculars
          </Text>
          {extracurriculars.map((exp: Experience, index: number) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              timerange={exp.timerange}
              type={exp.type}
              achievements={exp.achievements}
            />
          ))}
        </VStack>
        <VStack spacing={4} align="stretch" p={5} borderRadius="md">
          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            textDecoration="underline"
          >
            Jobs
          </Text>
          {jobs.map((exp: Experience, index: number) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              timerange={exp.timerange}
              type={exp.type}
              achievements={exp.achievements}
            />
          ))}
        </VStack>
      </Grid>
    </div>
  );
}
