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
  Image,
  Text,
} from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";

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
      transform: "scale(1.02)",
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
    <div>
      <h1>Portfolio</h1>

      {portfolioData.map((item: PortfolioInterface) => (
        <Accordion
          chevron={<AiOutlinePlus size={16} />}
          styles={{
            chevron: {
              "&[data-rotate]": {
                transform: "rotate(45deg)",
              },
            },
          }}
          mx="10px"
          variant="filled"
          classNames={classes}
          className={classes.root}
          defaultValue="Ceendit -  an invoice generator"
        >
          <Accordion.Item value={item.title} key={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <Flex
                direction={innerWidth < 700 ? "column-reverse" : "row-reverse"}
              >
                <Box>
                  <Text size="14px">{item.description}</Text>

                  <Box>
                    <Anchor href={item.githubLink} target="_blank">
                      More details
                    </Anchor>
                  </Box>

                  <Box>
                    <Text weight="bold" size="14px">
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
                </Box>

                <Flex
                  direction={innerWidth < 700 ? "column-reverse" : "row"}
                  justify="center"
                  align="center"
                >
                  <Image
                    src={item.image1}
                    width={387}
                    height={290}
                    fit="contain"
                  />
                  <Image
                    src={item.image2}
                    width={387}
                    height={290}
                    fit="contain"
                  />
                </Flex>
              </Flex>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default PortfolioPage;
