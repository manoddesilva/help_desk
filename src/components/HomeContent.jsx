import React, { useState } from "react";
import "./HomeContent.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Row } from "react-bootstrap";
import HomeTable from "./HomeTable";
import HomeTable1 from "./HomeTable1";
import Button from "@mui/material/Button";
import AddRequestUser from "./AddRequestUser";
import zIndex from "@mui/material/styles/zIndex";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(taskId, raisedBy, department, date, category, status) {
  return { taskId, raisedBy, department, date, category, status };
}

const rowsCurrent = [
  createData("23053001", "Silva", "Cutting", "2023/05/30", "other", "pending approval"),
  createData("23053002", "shiran", "sampling", "2023/05/30", "part and machinery", "send to manager"),
  createData("23053003", "shiran", "Cutting", "2023/05/30", "fabrication", "started"),
  createData("23053004", "shiran", "Cutting", "2023/05/30", "furniture", "approved"),
  createData("23053005", "shiran", "Cutting", "2023/05/30", "health and safety", "staff assigned"),
  
];

const rowsPrevious = [
  
  createData("23053005", "shiran", "Cutting", "2023/05/30", "health and safety", "completed"),
  
];

export default function HomeContent() {
  const [value, setValue] = React.useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const handleChange = (event, Value) => {
    setValue(Value);
  };

  return (
    <>
    
    
    <AddRequestUser isOpen={isOpen} setIsOpen={setIsOpen}></AddRequestUser>
    
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Current Tasks" {...a11yProps(0)} />
          <Tab label="Previous Tasks" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
        <Row>
          <HomeTable1 rows={rowsCurrent}/>
        </Row>
        <Row>
          <Button
            variant="contained"
            style={{
              backgroundColor: " #FB6340",
              position: "absolute",
              marginLeft: "85%",
              marginTop: "10px",
            }}
            onClick={openPopup}

          >
            
            ADD REQUEST
          </Button>
          
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Row>
          <HomeTable1 rows={rowsPrevious}/>
        </Row>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
    </>
  );
}
