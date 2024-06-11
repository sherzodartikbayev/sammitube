import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constands/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("")
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        p: 1,
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search.."
        className="search-bar"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{ padding: "5px", fontSize: "18px" }}
      />
      <IconButton type="submit"></IconButton>
    </Paper>
  );
};

export default SearchBar;
