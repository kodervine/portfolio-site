import {
  createStyles,
  Container,
  Group,
  Box,
  ActionIcon,
  Anchor,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconItem, iconData } from "./../data";
import { nanoid } from "nanoid";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
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

  anchor: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[8],
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  const copyrightYear: number = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <Box className={classes.inner} px={20}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          {iconData.map((icons: IconItem) => {
            const { icon, link, text } = icons;
            return (
              <ActionIcon key={nanoid()} size="lg">
                <Tooltip label={text}>
                  <Anchor href={link} size={20} className={classes.anchor}>
                    {icon}
                  </Anchor>
                </Tooltip>
              </ActionIcon>
            );
          })}
        </Group>
        <Text size={12}>&copy; Chinenye Anikwenze, {copyrightYear}</Text>
      </Box>
    </div>
  );
};

export default Footer;
