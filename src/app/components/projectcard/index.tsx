"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { LinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  language: string[];
  description: string;
  link?: string;
  emoji: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, language, description, link, emoji } = props;
  const [isFlipped, setFlipped] = useState(false);

  return (
    <>
      <Card
        transition="box-shadow 0.2s ease"
        _hover={{ boxShadow: "lg" }}
        onClick={() => setFlipped(!isFlipped)}
        height={300}
        display="flex"
        flexDirection="column"
      >
        <CardHeader>
          <Heading size="md">{title + " " + emoji}</Heading>
          <p className="italic">{"made in " + language.join(", ")}</p>
          {link && (
            <Box position="absolute" top="4" right="4">
              <a target="_blank" href={link}>
                <LinkIcon />
              </a>
            </Box>
          )}
        </CardHeader>
        <Divider />
        <CardBody overflowY="auto" flex="1">
          <h1>{description}</h1>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
