import React, { useState } from "react";
import { Button } from "@mui/material";

export default function CategoryButton(props) {
  const category = props.category;

  if (category == "part and machinery") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#C9F3E1",
          color: "#21B174",
          height: "25px",
          width: "150px",
          fontSize: "80%"
        }}
      >
        part & machinery
      </Button>
    );
  }

  if (category == "building") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#5CF8E5",
          color: "#28746B",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        building
      </Button>
    );
  }

  if (category == "fabrication") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#F0939C",
          color: "#6B393D",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        fabrication
      </Button>
    );
  }

  if (category == "health and safety") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#F7F198",
          color: "#858250",
          height: "25px",
          width: "150px",
          fontSize: "70%",
        }}
      >
        health & safety
      </Button>
    );
  }

  if (category == "furniture") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#73C6E9",
          color: "#2B5060",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        furniture
      </Button>
    );
  }

  if (category == "other") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#B8BFCC",
          color: "#5A5E66",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        other
      </Button>
    );
  }

  
}