import React, { useState, useRef, useEffect } from "react";
import style from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import Image from "next/image";

import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SendIcon from "@mui/icons-material/Send";
import { Participants } from "./Participants";

const BorderLinearProgress = styled(LinearProgress)(({}) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#FFFFFF20",
    borderRadius: 5,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
}));

export const Chat: React.FC = () => {
  interface Message {
    texto: string;
    autor: string;
    hora: string;
  }

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [showParticipants, setShowParticipants] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}`;
      setMessages([
        ...messages,
        { texto: inputText, autor: "You", hora: timeString },
      ]);
      setInputText("");
    }
  };

  useEffect(() => {
    scrollToBottom();

    const typingInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 4000);
    }, 10000);
    return () => clearInterval(typingInterval);
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleParticipants = () => {
    setShowParticipants(!showParticipants);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        console.log("Imagen seleccionada:", file);
      } else {
        alert("Por favor, seleccione solo archivos de imagen.");
      }
    }
  };

  const handleOpenFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={style.firstSectionChat}>
      <div className={style.headButtons}>
        <Button
          className={`${showParticipants ? style.secondHeadButton : style.firstHeadButton}`}
          onClick={toggleParticipants}
        >
          Messages (4)
        </Button>
        <Button
          className={`${!showParticipants ? style.secondHeadButton : style.firstHeadButton}`}
          onClick={toggleParticipants}
        >
          Participants
        </Button>
      </div>
      <Divider
        color="grey"
        sx={{ margin: "20px 0px", height: "2px" }}
      />

      {/* {showParticipants && <Participants />} */}

      {!showParticipants && (
        <>
          <div className={style.secondSectionChat}>
            <Typography
              style={{ color: "white", fontSize: "14px", marginBottom: "10px" }}
            >
              Use of Graphics
            </Typography>
            <Divider
              sx={{
                mb: "10px",
                width: "100%",
                bgcolor: "rgba(255, 255, 255, 0.5)",
              }}
            />
            <div className={style.firstSliderChat}>
              <BorderLinearProgress
                variant="determinate"
                value={25}
              />
              <Typography
                style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}
              >
                Illustrations
              </Typography>
            </div>
            <div className={style.secondSliderChat}>
              <BorderLinearProgress
                variant="determinate"
                value={75}
              />
              <Typography
                style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}
              >
                Images
              </Typography>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "20px", color: "white" }}>
            <Divider>
              <Typography style={{ color: "white", fontSize: "12px" }}>
                Messages
              </Typography>
            </Divider>
          </div>
          {/* chat1 */}
          <List
            id="chatEscritorio"
            style={{
              overflowX: "auto",
              maxHeight: "300px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar sx={{ marginRight: "10px", marginTop: "10px" }}>
                <Image
                  src="/assets/chat/Avatar1.png"
                  alt="avatar1"
                  width={46}
                  height={46}
                />
              </Avatar>
              <Box>
                <ListItemText
                  primary="Caesy"
                  style={{ color: "white" }}
                />
                <Paper
                  style={{
                    backgroundColor: "rgba(74, 87, 103, 1)",
                    borderRadius: "0px 6px 6px 6px",
                  }}
                >
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography style={{ color: "white", fontSize: "12px" }}>
                      Hello Guys! Whats your opinion?
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "8px",
                        marginLeft: "5px",
                        color: "rgba(191, 191, 191, 1)",
                      }}
                    >
                      12:02 pm
                    </Typography>
                  </ListItem>
                </Paper>
              </Box>
            </div>
            {/* chat2 */}
            <div style={{ display: "flex", marginTop: "10px" }}>
              <Avatar sx={{ marginRight: "10px", marginTop: "10px" }}>
                <Image
                  src="/assets/chat/Avatar2.png"
                  alt="avatar2"
                  width={46}
                  height={46}
                />
              </Avatar>
              <Box>
                <ListItemText
                  primary="John"
                  style={{ color: "white" }}
                />
                <Paper
                  style={{
                    backgroundColor: "rgba(74, 87, 103, 1)",
                    borderRadius: "0px 6px 6px 6px",
                  }}
                >
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography style={{ color: "white", fontSize: "12px" }}>
                      Images are better.
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "8px",
                        marginLeft: "5px",
                        color: "rgba(191, 191, 191, 1)",
                      }}
                    >
                      12:03 pm
                    </Typography>
                  </ListItem>
                </Paper>
              </Box>
            </div>
            {/* chat3 */}
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "end",
              }}
            >
              <Box>
                <ListItemText
                  primary="You"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "end",
                  }}
                />
                <Paper
                  style={{
                    backgroundColor: "rgba(74, 87, 103, 1)",
                    borderRadius: "6px 0px 6px 6px",
                  }}
                >
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography style={{ color: "white", fontSize: "12px" }}>
                      Yes, It will decrease the loading 👍
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "8px",
                        marginLeft: "5px",
                        color: "rgba(191, 191, 191, 1)",
                      }}
                    >
                      12:04 pm
                    </Typography>
                  </ListItem>
                </Paper>
              </Box>
            </div>
            {/* chat4 */}
            <div style={{ display: "flex", marginTop: "10px" }}>
              <Avatar sx={{ marginRight: "10px", marginTop: "10px" }}>
                <Image
                  src="/assets/chat/Avatar3.png"
                  alt="avatar3"
                  width={46}
                  height={46}
                />
              </Avatar>
              <Box>
                <ListItemText
                  primary="Jack"
                  style={{ color: "white" }}
                />
                <Paper
                  style={{
                    backgroundColor: "rgba(74, 87, 103, 1)",
                    borderRadius: "0px 6px 6px 6px",
                  }}
                >
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography style={{ color: "white", fontSize: "12px" }}>
                      Anyone is up for illustrations. I think there are less
                      relatable images according to our brand.
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "8px",
                        marginLeft: "5px",
                        color: "rgba(191, 191, 191, 1)",
                      }}
                    >
                      12:05 pm
                    </Typography>
                  </ListItem>
                </Paper>
              </Box>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: message.autor === "You" ? "end" : "start",
                }}
              >
                {message.autor !== "You"}
                <Box>
                  <ListItemText
                    primary={message.autor}
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  />
                  <Paper
                    style={{
                      backgroundColor: "rgba(74,  87,  103,  1)",
                      borderRadius: "6px  0px  6px  6px",
                    }}
                  >
                    <ListItem
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography style={{ color: "white", fontSize: "12px" }}>
                        {message.texto}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "8px",
                          marginLeft: "5px",
                          color: "rgba(191, 191, 191, 1)",
                        }}
                      >
                        {message.hora}
                      </Typography>
                    </ListItem>
                  </Paper>
                </Box>
              </div>
            ))}

            {isTyping && (
              <Box
                display="flex"
                marginTop="20px"
                sx={{ alignItems: "center" }}
              >
                <Image
                  src="/assets/chat/load.svg"
                  alt="load"
                  width={40}
                  height={40}
                />
                <Typography
                  style={{ fontSize: "10px", color: "rgba(191, 191, 191, 1)" }}
                >
                  John is typing..
                </Typography>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </List>

          <Paper
            style={{
              backgroundColor: "rgba(129, 186, 255, 0.5)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleOpenFileInput}>
              <InsertPhotoIcon style={{ color: "white" }} />
            </IconButton>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Divider
              color="white"
              sx={{ height: 28, m: 0.5 }}
              orientation="vertical"
            />
            <FormControl sx={{ flexGrow: "1", ml: "5px" }}>
              <InputBase
                placeholder="Write message here"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{ color: "white", fontSize: "12px" }}
              />
            </FormControl>
            <IconButton onClick={handleSendMessage}>
              <SendIcon
                fontSize="large"
                style={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  padding: "8px",
                }}
              />
            </IconButton>
          </Paper>
        </>
      )}
    </div>
  );
};
