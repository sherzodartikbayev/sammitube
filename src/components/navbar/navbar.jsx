import { Stack, Box, Link } from "@mui/material";
import { logo } from "../../constands/constands";
import { colors } from "../../constands/colors"
import { SearchBar } from "../"

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.primary }}
      >
      <Link to={"/"}>
          <img src={logo} alt="logo" height={50} style={{ cursor: "pointer" }} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
