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
  const [employeeName, setEmployeeName] = useState("");
  const [empNameError, setEmpNameError] = useState(false);
  const [empNameHelperText, setEmpNameHelperText] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentError, setDepartmentError] = useState(false);
  const [departmentHelperText, setDepartmentHelperText] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setemailHelperText] = useState("");
  const [mobile, setMobilel] = useState("");
  const [mobileError, setMobileErrorr] = useState(false);
  const [mobileHelperText, setMobileHelperText] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setEmployeeNumber("");
    setEmpNumberError(false);
    setEmpNumberHelperText("");
    setEmployeeName("");
    setEmpNameError(false);
    setEmpNameHelperText("");
    setDepartment("");
    setDepartmentError(false);
    setDepartmentHelperText("");
    setEmail("");
    setEmailError(false);
    setemailHelperText("");
    setMobilel("");
    setMobileErrorr(false);
    setMobileHelperText("");
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

  

   
      
      const handleNameChange = (event) => {
      setEmployeeName(event.target.value);
    }

    const validateEmplyeeName = () => {
      if (employeeName.length === 0) {
        setEmpNameError(true);
        setEmpNameHelperText("Name is required");
      }  else {
        setEmpNameError(false);
        setEmpNameHelperText("");
        // Perform any additional validation or submit the form here
      }
    };

    const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
    }

    const validateDepartment = () => {
      if (department.length === 0) {
        setDepartmentError(true);
        setDepartmentHelperText("Department is required");
      }  else {
        setDepartmentError(false);
        setDepartmentHelperText("");
        // Perform any additional validation or submit the form here
      }
    };


    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }

    const validateEmail = () => {
      if (email.length === 0) {
        setEmailError(true);
        setemailHelperText("E - Mail is required");
      }  else {
        setEmailError(false);
        setemailHelperText("");
        // Perform any additional validation or submit the form here
      }
    };

    const handleMobileChange = (event) => {
      setMobilel(event.target.value);
    }

    const validateMobile = () => {
      if (mobile.length === 0) {
        setMobileErrorr(true);
        setMobileHelperText("Mobile number is required");
      }  else if(mobile.length !== 10){
        setMobileErrorr(true);
        setMobileHelperText("Mobile number must be 10 digits");
      } else if (!/^\d+$/.test(mobile)) {
        setMobileErrorr(true);
        setMobileHelperText("Mobile number must be digits only");
      } else {
        setMobileErrorr(false);
        setMobileHelperText("");
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

                <Grid container spacing={1} sx={{height:'95%'}}>
                  <Grid item xs={3} style={{display: "flex", alignItems: "center"}}>
                    <item >Employee Number :</item>
                  </Grid>
                  <Grid item xs={9}>  
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
                  <Grid item xs={3} style={{display: "flex", alignItems: "center"}}>
                    <item >Employee Name :</item>
                  </Grid>
                  <Grid item xs={9}>  
                    <TextField 
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Employee Name"
                      value={employeeName}
                      onChange={handleNameChange}
                      error={empNameError}
                      helperText={empNameHelperText}
                      variant="filled"

                      size="small"
                      
                    />
                  </Grid>

                  <Grid item xs={3} style={{display: "flex", alignItems: "center"}}>
                    <item >Department :</item>
                  </Grid>
                  <Grid item xs={9}>  
                    <TextField 
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Department"
                      value={department}
                      onChange={handleDepartmentChange}
                      error={departmentError}
                      helperText={departmentHelperText}
                      variant="filled"

                      size="small"
                      
                    />
                  </Grid>

                  <Grid item xs={3} style={{display: "flex", alignItems: "center"}}>
                    <item >e - mail :</item>
                  </Grid>
                  <Grid item xs={9}>  
                    <TextField 
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="E - mail"
                      value={email}
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={emailHelperText}
                      variant="filled"

                      size="small"
                      
                    />
                  </Grid>

                  <Grid item xs={3} style={{display: "flex", alignItems: "center"}}>
                    <item >mobile no :</item>
                  </Grid>
                  <Grid item xs={9}>  
                    <TextField 
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="mobile no"
                      value={mobile}
                      onChange={handleMobileChange}
                      error={mobileError}
                      helperText={mobileHelperText}
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
                onClick={() => {
                  validateEmplyeeNumber();
                  validateEmplyeeName();
                  validateDepartment();
                  validateEmail();
                  validateMobile();
                }}
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
