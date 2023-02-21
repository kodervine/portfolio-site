import React from "react";
import profileImg from "../assets/profile-pic.jpg";
import Footer from "../components/Footer";
import { Anchor, Badge, Grid, Image, Text, Title } from "@mantine/core";
import HireMe from "../components/HireMe";

interface Props {
  techStack: string[];
}

const techStack = [
  "react",
  "javascript",
  "typescript",
  "Scss",
  "tailwind",
  "bootstrap",
  "css",
  "html",
];

const Home = () => {
  return (
    <Grid align="center" justify="center">
      <Grid.Col md={6} lg={5} order={2} orderSm={2} orderLg={1}>
        {" "}
        <main>
          <Title order={4}>Hiiii! I am...</Title>
          <Title order={1} weight={900}>
            CHINENYE ANIKWENZE
          </Title>
          <Text align="justify">
            I am a resourceful and detail-oriented Frontend Developer proficient
            in HTML, CSS, JavaScript and popular frameworks such as React. I
            love creating visually stunning and user-friendly websites that
            engage and ease users experience. I'm constantly learning new
            technologies to stay up-to-date with the industry standards and
            trends. Available for remote or on-site internship
          </Text>
          <Title order={6} mt={10}>
            Tech Stack:{" "}
          </Title>
          {techStack.map((stack) => {
            return (
              <Badge color="pink" size="sm" variant="dot" mr="10px">
                {stack}
              </Badge>
            );
          })}
          <HireMe />
          <Footer />
        </main>
      </Grid.Col>
      <Grid.Col md={6} lg={5} order={1} orderSm={1} orderLg={2}>
        {" "}
        <Image src={profileImg} radius="lg" />
      </Grid.Col>
    </Grid>
  );
};

export default Home;
