import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";

const SearchBlock = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   // marginLeft: theme.spacing(3),
    //   width: "auto",
    // },
    // border: "1px black solid",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));

  return (
    <div>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Поиск..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </div>
  );
};

export default SearchBlock;
