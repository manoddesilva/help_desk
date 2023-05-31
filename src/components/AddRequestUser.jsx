import React, { useState } from "react";
import Modal from "react-modal";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { Height } from "@mui/icons-material";
import masla_logo from "../Assests/masla_logo.png";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Unstable_Grid2';




// Set the app element for accessibility
Modal.setAppElement("#root");

const customModalStyles = {
  content: {
    width: "60%", // Set the desired width
    height: "90vh", // Set the desired height
    margin: "auto", // Center the modal horizontally
    padding: "0",
  },
};

const AddRequestUser = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const openModal = () => {
  //     setIsOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  const [employeeNumber, setEmployeeNumber] = useState("");
  const [empNumberError, setEmpNumberError] = useState(false);
  const [empNumberHelperText, setEmpNumberHelperText] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setEmployeeNumber("");
    setEmpNumberError(false);
  };

  const handleIdChange = (event) => {
    setEmployeeNumber(event.target.value);
  };

  const validateEmplyeeNumber = () => {
    if (employeeNumber.length === 0) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID is required");
    } else if (employeeNumber.length !== 5) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID must be 5 digits");
    } else if (!/^\d+$/.test(employeeNumber)) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID must be digits only");
    } else {
      setEmpNumberError(false);
      setEmpNumberHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Popup</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        <Container style={{ height: "100%", width: "100%", margin: "0" }}>
          <Row style={{ height: "15%", backgroundColor: "#1F294A" }}>
            <Container style={{ height: "100%" }}>
              <img src={masla_logo} alt="logo" height={"100%"} />
            </Container>
          </Row>
          <Row
            style={{
              height: "77%",
              justifyContent: "center",
              display: "flex",
              verticalAlign: "center",
            }}
          >
            <Container
              style={{
                width: "90%",
                height: "90%",
                backgroundColor: "#D9D9D9",
                justifyContent: "center",

                marginTop: "3%",
                borderRadius: "7px",
              }}
            >
              <Row style={{ height: "50%", padding: "1%" }}>
                <Row style={{ fontWeight: "bold" }}>Personal Information</Row>

                <Grid container spacing={2}>
                  <Grid item xs={4} style={{display: "flex", alignItems: "center"}}>
                    <item >Employee Number :</item>
                  </Grid>
                  <Grid item xs={8}>  
                    <TextField 
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Employee Number"
                      value={employeeNumber}
                      onChange={handleIdChange}
                      error={empNumberError}
                      helperText={empNumberHelperText}
                      variant="filled"

                      size="small"
                      
                    />
                  </Grid>
                </Grid>

                {/* <Row style={{height:"20%"}} fluid>
                  <Col>Employee Number :</Col>
                  <Col sm="9">
                    <TextField

                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Employee Number"
                      value={employeeNumber}
                      onChange={handleIdChange}
                      error={empNumberError}
                      helperText={empNumberHelperText}
                      variant="filled"

                      size="small"
                      
                    />
                  </Col>
                </Row> */}

                <Row style={{height:"20%"}} fluid>  <Col sm="3">Employee Name :</Col></Row>
              </Row>

              <Row style={{ height: "50%", padding: "1%" }}>sdf</Row>
            </Container>
          </Row>

          <Row
            style={{
              height: "8%",
              backgroundColor: "#1F294A",
              justifyContent: "center",
            }}
          >
            <Container
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                variant="contained"
                style={{
                  height: "70%",
                  width: "10%",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "1%",
                  backgroundColor: "#FB6340",
                }}
                onClick={validateEmplyeeNumber}
              >
                ADD
              </Button>
              <Button
                variant="contained"
                style={{
                  height: "70%",
                  width: "10%",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "1%",
                  backgroundColor: "#FB6340",
                }}
                onClick={closeModal}
              >
                Cancel
              </Button>
            </Container>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default AddRequestUser;
