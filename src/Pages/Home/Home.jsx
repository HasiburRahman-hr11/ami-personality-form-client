import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";
import { AuthContext } from "../../Context/AuthContext";
import MainForm from "../../Components/MainForm/MainForm";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Navbar />
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "50px",
            pb:'100px'
          }}
        >
          {user && user.email ? (
            <MainForm />
          ) : (
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                Login to Submit The Form
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Home;
