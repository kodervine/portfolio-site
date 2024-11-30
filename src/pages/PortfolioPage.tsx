import { portfolioData, PortfolioInterface } from "../data";
import {
  Accordion,
  Anchor,
  Badge,
  Box,
  createStyles,
  Flex,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface PortfolioPageClasses {
  root: string;
  item: string;
  chevron: string;
  imageClass: string;
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.0002)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },

  imageClass: {
    width: theme.breakpoints.sm ? "auto" : "387px",
    height: theme.breakpoints.sm ? "auto" : "290px",
  },
  link: {
    cursor: "pointer",
  },
}));

const PortfolioPage = () => {
  const { classes } = useStyles();
  return (
    <div style={{ padding: "10px 20px" }}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={4} pb={10} mt="md">
        Works
      </Title>
      <Accordion
        chevron={<AiOutlinePlus size={16} />}
        styles={{
          chevron: {
            "&[data-rotate]": {
              transform: "rotate(45deg)",
            },
          },
        }}
        variant="filled"
        classNames={classes as PortfolioPageClasses}
        className={classes.root}
        defaultValue={portfolioData[0].title}
      >
        {portfolioData.map((item: PortfolioInterface) => {
          console.log(item.link);
          return (
            <Accordion.Item value={item.title} key={item.title}>
              <Accordion.Control style={{ fontSize: "16px" }}>
                {item.title}
              </Accordion.Control>
              <Accordion.Panel>
                <Grid justify="flex-start" align="center">
                  <Grid.Col md={6} lg={5}>
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Image grid */}
                      <Grid gutter="xl">
                        <Grid.Col md={6} lg={5}>
                          <Image
                            src={item.image1}
                            width={innerWidth < 700 ? 300 : 387}
                            height={290}
                            fit="contain"
                          />
                        </Grid.Col>
                        <Grid.Col md={6} lg={2}>
                          <Image
                            src={item.image2}
                            width={innerWidth < 700 ? 300 : 387}
                            height={290}
                            className={classes.imageClass}
                            fit="contain"
                          />
                        </Grid.Col>
                      </Grid>
                    </a>
                  </Grid.Col>
                  <Grid.Col md={6} lg={5}>
                    <Flex />
                    <Text>{item.description}</Text>
                    <Group my={3} spacing="xl">
                      {item.githubLink && (
                        <Anchor
                          href={item.githubLink}
                          target="_blank"
                          className={classes.link}
                        >
                          Github link
                        </Anchor>
                      )}
                      {item.link && (
                        <Anchor
                          href={item.link}
                          target="_blank"
                          className={classes.link}
                        >
                          {item.link}
                          {/* Link */}
                        </Anchor>
                      )}
                    </Group>
                    <Box>
                      <Text weight="bold" mt={2}>
                        Technologies used:
                      </Text>

                      {item.technologiesUsed.map((btn, index) => {
                        return (
                          <Badge
                            color="orange"
                            size="sm"
                            variant="dot"
                            key={index}
                            mr="10px"
                          >
                            {btn}
                          </Badge>
                        );
                      })}
                    </Box>
                  </Grid.Col>
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
