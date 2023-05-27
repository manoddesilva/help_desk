import React, { useState } from "react";
import { Button } from "@mui/material";

export default function StatusButton(props) {
  const status = props.status;

  if (status == "pending") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#DDE378",
          color: "#7B7E3C",
          height: "25px",
          width: "150px",
        }}
      >
        Pending
      </Button>
    );
  }

  if (status == "staff assigned") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#68DFDE",
          color: "#2A6261",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        Staff Assigned
      </Button>
    );
  }

  if (status == "send to manager") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#009563",
          color: "#005438",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        send to manager
      </Button>
    );
  }

  if (status == "pending approval") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FEDC00",
          color: "#816F00",
          height: "25px",
          width: "150px",
          fontSize: "70%",
        }}
      >
        pending approval
      </Button>
    );
  }

  if (status == "approved") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FFA723",
          color: "#80571A",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        approved
      </Button>
    );
  }

  if (status == "rejected") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#94000B",
          color: "#2B0003",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        rejected
      </Button>
    );
  }

  if (status == "completed") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#0B2B37",
          color: "#02070A",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        completed
      </Button>
    );
  }

  if (status == "started") {
    return (
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FF2A00",
          color: "#580F00",
          height: "25px",
          width: "150px",
          fontSize: "80%",
        }}
      >
        started
      </Button>
    );
  }
}
