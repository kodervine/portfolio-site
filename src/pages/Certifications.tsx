import {
  Accordion,
  Anchor,
  Badge,
  Box,
  createStyles,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import { AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";
import { certificationsData } from "../data";
import { nanoid } from "nanoid";

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
      // transform: "scale(1.0002)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,

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

type Props = {};

const Certifications = () => {
  const { classes } = useStyles();
  return (
    <>
      <Title order={3}>Certifications</Title>
      <Accordion
        chevron={<AiFillCaretDown size={16} />}
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
        defaultValue={certificationsData[0].year}
      >
        {certificationsData.map((certItems) => {
          const { certifications, year } = certItems;
          return (
            <Accordion.Item value={year} key={nanoid()}>
              <Accordion.Control>{year}</Accordion.Control>
              {certifications?.map((certs) => {
                const { link, organisation, title, date } = certs;
                return (
                  <Accordion.Panel key={nanoid()}>
                    <Text weight="bold">{title}</Text>
                    <Flex align="Center" gap="10px">
                      <Text> Issued by: </Text>
                      <Badge color="purple" size="sm" variant="dot">
                        {organisation}
                      </Badge>
                      <Text>
                        ● {"  "}
                        {date}
                      </Text>
                    </Flex>
                    <Box>
                      <Anchor href={link} target="_blank">
                        See credentials
                      </Anchor>
                    </Box>
                  </Accordion.Panel>
                );
              })}
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default Certifications;
