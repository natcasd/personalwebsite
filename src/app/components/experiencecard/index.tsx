"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  List,
  ListItem,
  Box,
  ListIcon,
  Divider,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface ExperienceCardProps {
  company: string;
  title: string;
  timerange: string;
  type: string;
  achievements: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, title, timerange, type, achievements } = props;
  return (
    <>
      <Card transition="box-shadow 0.2s ease" _hover={{ boxShadow: "lg" }}>
        <CardHeader>
          <Heading size="md">{company}</Heading>
          <Heading size="sm">{title}</Heading>
          <i>{timerange}</i>
        </CardHeader>
        <Divider />
        <CardBody>
          <UnorderedList spacing={2}>
            {achievements.map((item, index) => (
              <ListItem key={index}>
                {/* <ListIcon
                  as={ChevronRightIcon}
                  marginRight={2}
                  verticalAlign="middle"
                /> */}
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
    </>
  );
};

export default ExperienceCard;
