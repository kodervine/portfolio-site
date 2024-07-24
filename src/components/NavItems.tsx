import { Link } from "react-router-dom";
import { Navbar, Text, createStyles, Box } from "@mantine/core";
import { nanoid } from "nanoid";
import { ListItem, profileListItems } from "../data";
import Footer from "./Footer";

const useStyles = createStyles((theme) => ({
  nav: {
    height: "100vh",
    overflow: "hidden",
  },

  anchor: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.gray[9],
    textDecoration: "none",

    ":hover": {
      color: theme.colorScheme === "dark" ? "white" : "darkblue",
    },
  },
}));
const NavItems = ({ handleCloseNav }: any) => {
  const { classes } = useStyles();

  return (
    <Navbar display="flex" className={classes.nav}>
      {/* <Flex>
        <Image src={profileImg} radius={50} width="50px" height="50px" />
      </Flex> */}

      {profileListItems.map((listitems: ListItem) => {
        const { text, link } = listitems;
        return (
          <Text key={nanoid()} my={4} size={16}>
            <Box onClick={handleCloseNav}>
              <Link
                to={link}
                style={{ opacity: "0.8" }}
                className={classes.anchor}
              >
                {text}
              </Link>
            </Box>
          </Text>
        );
      })}
      <Footer />
    </Navbar>
  );
};

export default NavItems;
