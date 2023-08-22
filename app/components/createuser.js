"use client";
import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/addUserSlice";

const CreateUser = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addUser({ email: email }));
    setEmail("")
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Email"
          variant="outlined"
        ></TextField>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateUser;
