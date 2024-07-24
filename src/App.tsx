import { FC, useState } from "react";
import Router from "./routes/Route";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Box,
} from "@mantine/core";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const App: FC<{ opened: boolean }> = ({ opened }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: "Crete Round, serif",
            colors: {
              dark: [
                "#d5d7e0",
                "#acaebf",
                "#8c8fa3",
                "#666980",
                "#4d4f66",
                "#34354a",
                "#2b2c3d",
                "#1d1e30",
                "#0c0d21",
                "#01010a",
              ],
            },
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
            fontSizes: {
              xs: 10,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 20,
            },
          }}
          withGlobalStyles
        >
          <Router />
          {/* <Tooltip label={colorScheme === "dark" ? "Day mode" : "Nigt mode"}> */}
          <Box
            onClick={() => {
              toggleColorScheme();
            }}
            style={{
              position: "fixed",
              bottom: 20,
              right: 30,
              cursor: "pointer",
              border: "2px solid gray",
              padding: "5px 5px 0px 5px",
              borderRadius: "5px",
            }}
          >
            {colorScheme === "dark" ? (
              <BsFillSunFill size={20} />
            ) : (
              <BsFillMoonStarsFill size={20} />
            )}
          </Box>{" "}
          {/* </Tooltip> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
