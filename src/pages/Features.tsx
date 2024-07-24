import {
  Badge,
  Card,
  Grid,
  Flex,
  Image,
  Text,
  Title,
  Box,
  createStyles,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { featureData } from "../data";

interface IFeature {
  dateAdded: string;
  link: string;
  title: string;
  organisation: string;
  coverImg: string;
}

const useStyles = createStyles((theme) => ({
  item: {
    height: "550px",
  },

  textColor: {
    color: theme.colorScheme === "dark" ? "#ffffff" : "purple",
  },
}));

const Features = () => {
  const { hovered, ref } = useHover();
  const { classes } = useStyles();

  return (
    <Box px={20}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={3} mt="md">
        Features
      </Title>

      <Grid align="center" justify="center">
        {featureData.slice(0, 6).map((blogs: IFeature) => {
          const { title, dateAdded, link, organisation, coverImg } = blogs;
          const date = new Date(dateAdded);
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
                shadow={hovered ? "xl" : "xs"}
                p="xl"
                px={20}
                component="a"
                key={nanoid()}
                my={10}
                mx={{ sm: 20, md: 10 }}
                radius="lg"
                className={classes.item}
                href={link}
              >
                <Flex direction="column" align="start">
                  <Text
                    weight={500}
                    size="lg"
                    mt="md"
                    className={classes.textColor}
                  >
                    {organisation.toUpperCase()}
                  </Text>
                  <Text weight={400} size="lg">
                    {title}
                  </Text>
                  <Badge color="red" size="sm" variant="dot" mr="10px" mb="sm">
                    {textDate}
                  </Badge>
                </Flex>
                <Card.Section>
                  <Image src={coverImg} alt="feature image" />
                </Card.Section>
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
