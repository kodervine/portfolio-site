import React from "react";
import profileImg from "../assets/profile-pic.jpg";
import Footer from "../components/Footer";
import { Anchor, Badge, Grid, Image, Text, Title } from "@mantine/core";
import HireMe from "../components/HireMe";
import Navbar from "../components/Navbar";

interface Props {
  techStack: string[];
  techTools: string[];
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

const techTools = [
  "git",
  "github",
  "chakra ui",
  "mantine ui",
  "netlify",
  "firebase",
];

const Home = () => {
  return (
    <>
      <Navbar title="" />
      <Grid
        align="center"
        justify="center"
        my="lg"
        style={{ padding: "10px 20px" }}
      >
        <Grid.Col md={6} lg={5} order={2} orderSm={2} orderLg={1}>
          {" "}
          <main>
            <Title order={4}>Hiiii! My name is</Title>
            <Title order={1} weight={900} my="sm">
              CHINENYE ANIKWENZE
            </Title>
            <Text align="justify">
              I am a resourceful Software Developer proficient in HTML, CSS,
              JavaScript and React. I love creating visually stunning and
              user-friendly websites that engage and ease users' experience.
            </Text>
            <Title order={6} my="sm">
              Tech Stack:{" "}
            </Title>
            {techStack.map((stack, index) => {
              return (
                <Badge
                  color="pink"
                  size="sm"
                  variant="dot"
                  mr="10px"
                  key={index}
                >
                  {stack}
                </Badge>
              );
            })}

            <Title order={6} my="sm">
              Tools:
            </Title>
            {techTools.map((tool, index) => {
              return (
                <Badge
                  color="lime"
                  size="sm"
                  radius="sm"
                  variant="dot"
                  mr="10px"
                  key={index}
                >
                  {tool}
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
    </>
  );
};

export default Home;
