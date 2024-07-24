import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Badge,
  Card,
  Grid,
  Flex,
  Image,
  Text,
  createStyles,
  Title,
} from "@mantine/core";
import { publicationsData } from "../data";
import { nanoid } from "nanoid";
import { useHover } from "@mantine/hooks";

type PublicationsProps = {
  dateAdded: string;
  link: string;
  title: string;
  organisation: string;
  coverImg: string;
};

const useStyles = createStyles((theme) => ({
  item: {
    height: "550px",
  },

  textColor: {
    color: theme.colorScheme === "dark" ? "#ffffff" : "purple",
  },
}));

const Publications = () => {
  const { hovered, ref } = useHover();
  const { classes } = useStyles();
  return (
    <main style={{ padding: "10px 20px" }}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={3} mt="md">
        Publications
      </Title>
      <Grid align="center" justify="center">
        {publicationsData.slice(0, 6).map((article: PublicationsProps) => {
          const { title, dateAdded, link, organisation, coverImg } = article;
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
                    {dateAdded}
                  </Badge>
                </Flex>
                <Card.Section>
                  <Image src={coverImg} alt="publications image" />
                </Card.Section>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      <Footer />
    </main>
  );
};

export default Publications;
