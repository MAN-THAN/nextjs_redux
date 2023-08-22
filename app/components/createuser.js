"use client";
import React, { useEffect, useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/addUserSlice";
import { useFormik } from "formik";
import * as yup from "yup";

const CreateUser = () => {

  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addUser({ email: values.email }));
      formik.resetForm()
    },
  });
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
          name="email"
          id='email'
          type="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        ></TextField>
        <Button sx={{height : "4em", width : "8em"}} variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateUser;
