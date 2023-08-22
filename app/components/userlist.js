"use client"
import React from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const UserList = () => {
const rows=[{email : "manthantyagi@gmail.com"}];
const userData =  useSelector((state) => state);
console.log(userData)
  return (
    <Box sx={{marginTop : 4}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell align="center">Email </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((e, ind) => (
              <TableRow
                key={ind}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align='center'>
                  {e.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
