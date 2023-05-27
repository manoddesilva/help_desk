import * as React from "react";
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

export default function HomeContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, Value) => {
    setValue(Value);
  };

  return (
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
          <HomeTable1 />
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
            

          >
            
            ADD REQUEST
          </Button>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Previous Tasks
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}
