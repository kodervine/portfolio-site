import {
  Accordion,
  Anchor,
  Badge,
  Box,
  createStyles,
  Flex,
  keyframes,
  Text,
  Title,
} from "@mantine/core";

const ring = keyframes({
  "0%": {
    transform: "rotate(0deg)",
    boxShadow: "1px 5px 2px #e65c00",
  },
  "50%": {
    transform: "rotate(18)",
    boxShadow: "1px 5px 2px #18b201",
  },
  "100%": {
    transform: "rotate(360deg)",
    boxShadow: "1px 5px 2px #0456c8",
  },
});

const text = keyframes({
  "50%": {
    color: "white",
  },
});
const darktext = keyframes({
  "50%": {
    color: "#1D1E30",
  },
});

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
    margin: 0,
    padding: 0,
  },

  center: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },

  ring: {
    position: "absolute",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    animation: `${ring} 2s linear infinite`,

    // https://github.com/mui/material-ui/issues/14153#issuecomment-453605145 for the content
    "&:before": {
      position: "absolute",
      content: '""',
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      boxShadow:
        theme.colorScheme === "dark"
          ? "0 0 5px rgba(255,255,255, .3)"
          : "0 0 5px rgba(0,0,0, .3)",
      borderRadius: "50%",
    },
  },
  span: {
    color: "#737373",
    fontSize: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    lineHeight: "200px",
    animation:
      theme.colorScheme === "dark"
        ? `${darktext} 3s ease-in-out infinite`
        : `${text} 3s ease-in-out infinite`,
  },
}));

type Props = {};

const Loading = () => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.center}>
        <Box className={classes.ring}></Box>{" "}
        <span className={classes.span}>Loading...</span>
      </Box>
    </>
  );
};

export default Loading;
