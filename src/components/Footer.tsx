import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Anchor,
} from "@mantine/core";
import { IconItem, iconData } from "./../data";
import { nanoid } from "nanoid";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          {iconData.map((icons: IconItem) => {
            const { icon, link } = icons;
            return (
              <ActionIcon key={nanoid()} size="lg">
                <Anchor href={link}>{icon}</Anchor>
              </ActionIcon>
            );
          })}
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
