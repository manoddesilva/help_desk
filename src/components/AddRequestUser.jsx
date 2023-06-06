import React, { useState } from "react";
import Modal from "react-modal";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { Height } from "@mui/icons-material";
import masla_logo from "../Assests/masla_logo.png";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryDropdown from "./mini/CategoryDropdown";

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
  const [modleVisibility, setModelVisibility] = useState(true);
  const [machineModel, setMachineModel] = useState("");
  const [description, setDescription] = useState("");

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
    setDescription("");
  };

  const handleIdChange = (event) => {
    const inputValue = event.target.value;
    setEmployeeNumber(inputValue);
    validateEmplyeeNumber(inputValue);
  };

  const validateEmplyeeNumber = (value) => {
    if (value.length === 0) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID is required");
    } else if (value.length !== 5) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID must be 5 digits");
    } else if (!/^\d+$/.test(value)) {
      setEmpNumberError(true);
      setEmpNumberHelperText("ID must be digits only");
    } else {
      setEmpNumberError(false);
      setEmpNumberHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setEmployeeName(inputValue);
    validateEmplyeeName(inputValue);
  };

  const validateEmplyeeName = (value) => {
    if (value.length === 0) {
      setEmpNameError(true);
      setEmpNameHelperText("Name is required");
    } else {
      setEmpNameError(false);
      setEmpNameHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  const handleDepartmentChange = (event) => {
    const inputValue = event.target.value;
    setDepartment(inputValue);
    validateDepartment(inputValue);
  };

  const validateDepartment = (value) => {
    if (value.length === 0) {
      setDepartmentError(true);
      setDepartmentHelperText("Department is required");
    } else {
      setDepartmentError(false);
      setDepartmentHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      setEmailError(true);
      setemailHelperText("E - Mail is required");
    } else if (!emailRegex.test(value)) {
      setEmailError(true);
      setemailHelperText("Invalid email format");
    } else {
      setEmailError(false);
      setemailHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  const handleMobileChange = (event) => {
    const inputValue = event.target.value;
    setMobilel(inputValue);
    validateMobile(inputValue);
  };

  const validateMobile = (value) => {
    if (value.length === 0) {
      setMobileErrorr(true);
      setMobileHelperText("Mobile number is required");
    } else if (value.length !== 10) {
      setMobileErrorr(true);
      setMobileHelperText("Mobile number must be 10 digits");
    } else if (!/^\d+$/.test(value)) {
      setMobileErrorr(true);
      setMobileHelperText("Mobile number must be digits only");
    } else {
      setMobileErrorr(false);
      setMobileHelperText("");
      // Perform any additional validation or submit the form here
    }
  };

  const handleCategoryChange = (selectedOption) => {
    if (selectedOption === "part_and_machinery") {
      setModelVisibility(false);
    } else {
      setModelVisibility(true);
    }
  };

  const handleMachineModelChange = (event) => {
    setMachineModel(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
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

                <Grid container spacing={1} sx={{ height: "95%" }}>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>Employee No :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Employee Number"
                      value={employeeNumber}
                      onFocus={handleIdChange}
                      onChange={handleIdChange}
                      error={empNumberError}
                      helperText={empNumberHelperText}
                      variant="filled"
                      size="small"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>Employee Name :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Employee Name"
                      value={employeeName}
                      onFocus={handleNameChange}
                      onChange={handleNameChange}
                      error={empNameError}
                      helperText={empNameHelperText}
                      variant="filled"
                      size="small"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>Department :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Department"
                      value={department}
                      onFocus={handleDepartmentChange}
                      onChange={handleDepartmentChange}
                      error={departmentError}
                      helperText={departmentHelperText}
                      variant="filled"
                      size="small"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>e - mail :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="E - mail"
                      value={email}
                      onFocus={handleEmailChange}
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={emailHelperText}
                      variant="filled"
                      size="small"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>mobile no :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="mobile no"
                      value={mobile}
                      onFocus={handleMobileChange}
                      onChange={handleMobileChange}
                      error={mobileError}
                      helperText={mobileHelperText}
                      variant="filled"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Row>

              <Row style={{ height: "50%", padding: "1%" }}>
                <Row style={{ fontWeight: "bold" }}>Request Detail</Row>

                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>category :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <CategoryDropdown
                      label="Category"
                      onOptionChange={handleCategoryChange}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>Machine Model :</item>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      hiddenLabel
                      disabled={modleVisibility}
                      id="filled-hidden-label-small"
                      label="Machine Model"
                      value={machineModel}
                      onChange={handleMachineModelChange}
                      variant="filled"
                      size="small"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <item>Description :</item>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      label="Description"
                      value={description}
                      onChange={handleDescriptionChange}
                      variant="filled"
                      size="small"
                      multiline
                      rows={2}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Row>
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
                  if (
                    !empNumberError &&
                    !empNameError &&
                    !departmentError &&
                    !emailError &&
                    !mobileError
                  ) {
                    closeModal();
                  }
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
