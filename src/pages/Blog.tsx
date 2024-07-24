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
import Footer from "../components/Footer";
import Loading from "../components/Loading";

type IBlog = {
  node: {
    title: string;
    brief: string;
    slug: string;
    url: string;
    coverImage: {
      url: string;
    };
    publishedAt: number;
  };
};

const Blog = () => {
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
        Articles
      </Title>

      {blogData.length === 0 ? (
        <Loading />
      ) : (
        <Grid align="center" justify="center">
          {blogData.slice(0, 9).map((blog: IBlog) => {
            const {
              title,
              brief,
              slug,
              url: blogUrl,
              coverImage: { url },
              publishedAt,
            } = blog.node;
            const date = new Date(publishedAt);
            const options: any = {
              // weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            console.log(slug, blog);
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
                      src={url}
                      height={200}
                      alt="course certification images"
                    />
                  </Card.Section>

                  <Flex direction="column" align="start">
                    <Text weight={500} size="lg" my="md">
                      {title}
                    </Text>
                    <Badge
                      color="yellow"
                      size="sm"
                      variant="dot"
                      mr="10px"
                      mb="sm"
                    >
                      {textDate}
                    </Badge>

                    <Text mt="xs" color="dimmed" size="sm">
                      {brief}{" "}
                      <a href={blogUrl} target="_blank">
                        Read more
                      </a>
                    </Text>
                  </Flex>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      )}

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
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
      <Footer />
    </Box>
  );
};

export default Blog;
