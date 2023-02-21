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
}));

const PortfolioPage: FC = () => {
  const { classes } = useStyles();
  return (
    <div>
      <h1>Portfolio</h1>

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
      >
        {portfolioData.map((item: PortfolioInterface) => (
          <Accordion.Item value={item.title} key={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>
              <Text size="14px">{item.description}</Text>

              <Box>
                <Anchor href={item.link} target="_blank">
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
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default PortfolioPage;
