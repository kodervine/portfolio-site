import { Badge, Card, Grid, Flex, Image, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { certificationsData } from "../data";
import { nanoid } from "nanoid";

type Props = {};

const Certifications = (props: Props) => {
  const { hovered, ref } = useHover();
  return (
    <>
      <Title order={3}>Courses and Certifications</Title>
      <Grid align="center" justify="center">
        {certificationsData.map((certs) => {
          const { link, image, organisation, title, description } = certs;
          return (
            <Grid.Col md={6} lg={3.5} ref={ref}>
              <Card
                shadow={hovered ? "xl" : "md"}
                p="xl"
                px={20}
                component="a"
                href={link}
                target="_blank"
                key={nanoid()}
                my={10}
                mx={{ sm: 20, md: 10 }}
                radius="lg"
              >
                <Card.Section>
                  <Image
                    src={image}
                    height={200}
                    alt="course certification images"
                  />
                </Card.Section>

                <Flex direction="column" align="start">
                  <Text weight={500} size="lg" my="md">
                    {title}
                  </Text>
                  <Badge color="yellow" size="sm" variant="dot" mr="10px">
                    {organisation}
                  </Badge>

                  <Text mt="xs" color="dimmed" size="sm">
                    {description}
                  </Text>
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default Certifications;
