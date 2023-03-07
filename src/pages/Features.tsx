import { useEffect, useState } from "react";
import {
  Badge,
  Card,
  Grid,
  Flex,
  Image,
  Text,
  Title,
  Button,
  Anchor,
  Box,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { featureData } from "../data";

type FeatureProps = {
  dateAdded: string;
  link: string;
  title: string;
  organisation: string;
  coverImg: string;
};

const Features = () => {
  const { hovered, ref } = useHover();

  return (
    <Box px={20}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={3} mt="md">
        Features
      </Title>

      <Grid align="center" justify="center">
        {featureData.slice(0, 6).map((blogs: FeatureProps) => {
          const { title, dateAdded, link, organisation, coverImg } = blogs;
          const numericDate = dateAdded;
          const date = new Date(numericDate);
          const options: any = {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const textDate = date.toLocaleDateString("en-UK", options);

          return (
            <Grid.Col md={6} lg={3.5} ref={ref} key={nanoid()}>
              <Card
                shadow={hovered ? "xl" : "md"}
                p="xl"
                px={20}
                component="a"
                key={nanoid()}
                my={10}
                mx={{ sm: 20, md: 10 }}
                radius="lg"
              >
                <Card.Section>
                  <Image
                    src={coverImg}
                    height={200}
                    alt="course certification images"
                  />
                </Card.Section>

                <Flex direction="column" align="start">
                  <Text weight={500} size="lg" my="md">
                    {title}
                  </Text>
                  <Badge color="yellow" size="sm" variant="dot" mr="10px">
                    {textDate}
                  </Badge>
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      ></Box>
      <Footer />
    </Box>
  );
};

export default Features;
