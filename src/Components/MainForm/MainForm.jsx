import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MainForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [ansOne, setAnsOne] = useState(1);
  const [ansTwo, setAnsTwo] = useState(1);
  const [ansThree, setAnsThree] = useState(1);
  const [ansFour, setAnsFour] = useState(1);
  const [ansFive, setAnsFive] = useState(1);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      setNameError(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setEmailError(false);
    }
  };

  function getValueAlphabet(value) {
    switch (value) {
      case 1:
        return "A";
      case 2:
        return "B";
      case 3:
        return "C";
      case 4:
        return "D";
      case 5:
        return "E";
      case 6:
        return "F";
      case 7:
        return "G";
      case 8:
        return "H";
      case 9:
        return "I";
      case 10:
        return "J";
      default:
        return "";
    }
  }

  function sliderOneHandle(value) {
    setAnsOne(value);
  }
  function sliderTwoHandle(value) {
    setAnsTwo(value);
  }
  function sliderThreeHandle(value) {
    setAnsThree(value);
  }
  function sliderFourHandle(value) {
    setAnsFour(value);
  }
  function sliderFiveHandle(value) {
    setAnsFive(value);
  }

  const handleSubmit = () => {
    if (!name) {
      setNameError("Name is Required");
    }
    if (!email) {
      setEmailError("Email is Required");
    }
    if (name && email) {
      const answerOne = getValueAlphabet(ansOne);
      const answerTwo = getValueAlphabet(ansTwo);
      const answerThree = getValueAlphabet(ansThree);
      const answerFour = getValueAlphabet(ansFour);
      const answerFive = getValueAlphabet(ansFive);

      const formData = {
        name,
        email,
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        answerFive,
      };

      console.log(formData);
      setName("");
      setEmail("");
      setAnsOne(1);
      setAnsTwo(1);
      setAnsThree(1);
      setAnsFour(1);
      setAnsFive(1);
    }
  };

  return (
    <Box
      sx={{
        width: {
          xs: "95%",
          sm: "80%",
          md: "70%",
        },
        maxWidth: "600px",
        padding: "30px 30px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "30px",
          mb: "30px",
        }}
      >
        Please Submit The Form
      </Typography>
      <Box component="form" sx={{ display: "block" }}>
        <Box sx={{ mb: "20px" }}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            required
            sx={{ width: "100%" }}
            type="text"
            error={nameError ? true : false}
          />
          {nameError && <Typography sx={{color:'red', fontSize:'13px', mt:'5px'}}>{nameError}</Typography>}
        </Box>
        <Box sx={{ mb: "20px" }}>
          <TextField
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            required
            sx={{ width: "100%" }}
            type="email"
            error={emailError ? true : false}
          />
             {emailError && <Typography sx={{color:'red', fontSize:'13px', mt:'5px'}}>{nameError}</Typography>}
        </Box>
        <Box
          sx={{
            mb: "20px",
            padding: "5px 15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "15px", mb: "10px", pt: "5px" }}>
            Q1: On a scale of 1 to 10, how much do you enjoy traveling?
          </Typography>
          <Slider
            value={ansOne}
            onChange={(event, newValue) => setAnsOne(newValue)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Box
          sx={{
            mb: "20px",
            padding: "5px 15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "15px", mb: "10px", pt: "5px" }}>
            Q2: How would you rate your cooking skills from 1 to 10?
          </Typography>
          <Slider
            value={ansTwo}
            onChange={(event, newValue) => setAnsTwo(newValue)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Box
          sx={{
            mb: "20px",
            padding: "5px 15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "15px", mb: "10px", pt: "5px" }}>
            Q3: On a scale of 1 to 10, how likely are you to try a new hobby?
          </Typography>
          <Slider
            value={ansThree}
            onChange={(event, newValue) => setAnsThree(newValue)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Box
          sx={{
            mb: "20px",
            padding: "5px 15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "15px", mb: "10px", pt: "5px" }}>
            Q4: On a scale of 1 to 10, how much do you enjoy reading books?
          </Typography>
          <Slider
            value={ansFour}
            onChange={(event, newValue) => setAnsFour(newValue)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Box
          sx={{
            mb: "20px",
            padding: "5px 15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "15px", mb: "10px", pt: "5px" }}>
            Q4: On a scale of 1 to 10, how organized would you say your
            workspace is?
          </Typography>
          <Slider
            value={ansFive}
            onChange={(event, newValue) => setAnsFive(newValue)}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainForm;
