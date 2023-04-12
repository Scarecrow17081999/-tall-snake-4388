import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DiscountRadioGroup from "./DiscountRadioGroup";
import PriceRadioGroup from "./PriceRadioGroup";
import DepartmentRadioGroup from "./DepartmentRadioGroup";
import BrandRadioGroup from "./BrandRadioGroup";
import ColorSelectGroup from "./ColorSelectGroup";
import SearchPageProducts from "./SearchPageProducts";
import { Button } from "@mui/material";
import "./SearchPageMain.css";
export default function SearchPageMain() {
  return (
    <div id="SearchPageMainParentContainer">
      <div id="SearchPageMainChildContainer">
        <div id="SearchPageMainChildContainerTop">
          <SelectSortType />
        </div>
        <div id="SearchPageMainChildContainerBottom">
          <div id="SearchPageMainChildContainerLeft">
            <Accordions />
          </div>
          <div id="SearchPageMainChildContainerRight">
            <SearchPageProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectSortType() {
  const [SelectSortType, setSelectSortType] = React.useState("");

  const handleChange = (event) => {
    setSelectSortType(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={SelectSortType}
          onChange={handleChange}
          sx={{ textAlign: "start" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Popularity</MenuItem>
          <MenuItem value={20}>Price Low to High</MenuItem>
          <MenuItem value={30}>Price High to Low</MenuItem>
          <MenuItem value={30}>New Arrivals</MenuItem>
          <MenuItem value={30}>Discounts</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:nth-child(2)": { borderRadius: "0.5rem 0.5rem 0rem 0rem" },
  "&:last-child": { borderRadius: "0rem 0rem 0.5rem 0.5rem" },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  height: "4rem",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",

  "&:last-child": { display: "flex", alignItems: "center" },
}));

function Accordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ width: "250px" }}>
      <div
        style={{
          textAlign: "start",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
        }}
      >
        <h4>Filters</h4>
        <Button>Clear All</Button>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DepartmentRadioGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BrandRadioGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ColorSelectGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PriceRadioGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DiscountRadioGroup />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{}}>
          <CheckCircleOutlineIcon
            sx={{ marginRight: "1rem", cursor: "pointer" }}
          />
          <Typography sx={{ cursor: "pointer" }}>
            Exclude out of stock
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
