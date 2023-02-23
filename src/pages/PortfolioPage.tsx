import { FC } from "react";
import { portfolioData, PortfolioInterface } from "../data";
import {
  Accordion,
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  createStyles,
  Flex,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../components/Footer";

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
    width: "80px",
    height: "100px",
  },
}));

const PortfolioPage: FC = () => {
  const { classes } = useStyles();
  return (
    <div style={{ padding: "10px 20px" }}>
      <Title order={4} pb={10}>
        Projects
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
        classNames={classes}
        className={classes.root}
        defaultValue={portfolioData[0].title}
      >
        {portfolioData.map((item: PortfolioInterface) => (
          <Accordion.Item value={item.title} key={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <Grid justify="flex-start" align="center">
                {/* Image grid */}
                <Grid.Col md={6} lg={5}>
                  <Grid>
                    <Grid.Col md={6} lg={5}>
                      {" "}
                      <Image
                        src={item.image1}
                        width={387}
                        height={290}
                        fit="contain"
                      />
                    </Grid.Col>
                    <Grid.Col md={6} lg={2}>
                      {" "}
                      <Image
                        src={item.image2}
                        width={387}
                        height={290}
                        fit="contain"
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
                {/* portfolio text grid */}
                <Grid.Col md={6} lg={5}>
                  <Flex></Flex>
                  <Text>{item.description}</Text>

                  <Box>
                    <Anchor href={item.githubLink} target="_blank">
                      More details
                    </Anchor>
                  </Box>

                  <Box>
                    <Text weight="bold">Technologies used:</Text>

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
        ))}
      </Accordion>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
