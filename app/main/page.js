"use client"
import React from "react";
import { Box } from "@mui/material";
import UserList from "../components/userlist";
import CreateUser from "../components/createuser";

const Main = () => {
  return (
    <Box>
      <CreateUser />
      <UserList />
    </Box>
  );
};

export default Main;
