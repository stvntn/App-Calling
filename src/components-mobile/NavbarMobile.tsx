import React from "react";
import style from "../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const NavbarMobile: React.FC<{
  handleSetMode: (mode: string) => void;
}> = ({ handleSetMode }) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar className={style.classNavbar}>
      <Toolbar className={style.classToolbar}>
        <div className={style.headToolbar}>
          <IconButton
            onClick={() => handleSetMode("video")}
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "rgba(129, 186, 255, 0.5)",
              borderRadius: "20%",
              marginRight: "10px",
            }}
          >
            <ArrowBackIosNewIcon
              color="primary"
              style={{ fontSize: "14px" }}
            />
          </IconButton>
          <Typography style={{ flexGrow: "1", fontSize: "21px" }}>
            Design Critique
          </Typography>
          <IconButton>
            <VideocamIcon
              fontSize="small"
              color="primary"
            />
          </IconButton>
          <IconButton>
            <PhoneIcon
              fontSize="small"
              color="primary"
            />
          </IconButton>
          <IconButton>
            <MoreVertIcon
              fontSize="small"
              color="primary"
            />
          </IconButton>
        </div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="ChatMobile"
            style={{ width: "100vw", display: "flex", color: "white" }}
          >
            <Tab
              value="one"
              label="Chat"
              wrapped
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "400",
                width: "33%",
                color: "white",
              }}
            />
            <Tab
              value="two"
              label="File"
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "400",
                width: "33%",
                color: "white",
              }}
            />
            <Tab
              value="three"
              label="Pole"
              style={{
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "400",
                width: "33%",
                color: "white",
              }}
            />
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
};
