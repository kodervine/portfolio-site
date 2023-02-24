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
import { fetchBlogs } from "../queries/BlogQuery";
import Navbar from "../components/Navbar";

type Props = {};

const Blog = (props: Props) => {
  const { hovered, ref } = useHover();
  const [blogData, setBlogData] = useState<any>([]);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetchBlogs();
      setBlogData(response);
    };
    getBlogs();
  }, []);

  return (
    <Box px={20}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={3} mt="md">
        Published blogs
      </Title>
      <Grid align="center" justify="center">
        {blogData.map((blogs: any, index: number) => {
          const { title, brief, slug, coverImage, dateAdded } = blogs;
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
                    src={coverImage}
                    height={200}
                    alt="course certification images"
                  />
                </Card.Section>

                <Flex direction="column" align="start">
                  <Text weight={500} size="lg" my="md">
                    {title}
                  </Text>
                  <Badge color="yellow" size="sm" variant="dot" mr="10px">
                    {dateAdded}
                  </Badge>

                  <Text mt="xs" color="dimmed" size="sm">
                    {brief}{" "}
                    <a
                      href={`https://kodervine.hashnode.dev/${slug}`}
                      target="_blank"
                    >
                      Read more
                    </a>
                  </Text>
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
      <Button>
        <Anchor
          href="https://kodervine.hashnode.dev"
          target="_blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Read more articles
        </Anchor>
      </Button>
    </Box>
  );
};

export default Blog;
