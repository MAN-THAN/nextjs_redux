"use client"
import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./slice/addUserSlice";

export const store = configureStore({
    reducer : addUserSlice
}) 