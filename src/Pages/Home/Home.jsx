import Navbar from "../../Components/Navbar/Navbar";
import { Box, Container } from "@mui/material";
import MainForm from "../../Components/MainForm/MainForm";

const Home = () => {

  return (
    <>
      <Navbar />
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "50px",
            pb: "100px",
          }}
        >
          <MainForm />
        </Box>
      </Container>
    </>
  );
};

export default Home;
