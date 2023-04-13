import "./CartContainerMainLeftComponent.css";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function CartContainerMainLeftComponent() {
  return (
    <div id="addressCartContainerMainLeft">
      <h1>Checkout</h1>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "48%",

            // height: "100%",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "space-between",
            // border: "1px solid red",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem auto",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="First Name(Required)"
              sx={{ width: "48%" }}

              // defaultValue="Hello World"
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name(Required)"
              sx={{ width: "48%" }}
              // defaultValue="Hello World"
            />
          </Box>
          <Box
            sx={{
              margin: "1rem auto",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="City/District(Required)"
              sx={{ width: "100%" }}
              // defaultValue="Hello World"
            />
          </Box>
          <Box
            sx={{
              margin: "1rem auto",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="State(Required)"
              sx={{ width: "100%" }}
              // defaultValue="Hello World"
            />
          </Box>
          <Box
            sx={{
              margin: "1rem auto",
            }}
          >
            <TextField
              id="outlined-required"
              label="LandMark"
              sx={{ width: "100%" }}
              // defaultValue="Hello World"
            />
          </Box>
          <Box
            sx={{
              margin: "1rem auto",
            }}
          >
            <RowRadioButtonsGroup />
          </Box>
        </Box>
        <Box sx={{ width: "48%" }}>
          <TextField
            required
            id="outlined-required"
            label="Enter your PIN code(Required)"
            sx={{ width: "100%", margin: "1rem auto" }}

            // defaultValue="Hello World"
          />

          <Box
            sx={
              {
                //   margin: "1rem auto",
              }
            }
          >
            <MultilineTextFields />
          </Box>
          <Box
            sx={{
              margin: "1rem auto",
            }}
          >
            <TextField
              required
              label="Phone/Mobile Number(Required)"
              id="outlined-start-adornment"
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </FormControl>
      <Divider />
      <div id="cancelAndSaveAddressButton">
        <button>Cancel</button>
        <Link to='/checkout'>
          <button
            style={{
            //   marginLeft: "5%",
              cursor: "pointer",
              padding: "15px",
              color: "white",
              backgroundColor: "#ff1744",
              borderRadius: "3rem",
              border: "none",
              fontSize: "1rem",
            }}
          >
            Save & Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Home" control={<Radio />} label="Home" />
        <FormControlLabel value="Office" control={<Radio />} label="Office" />
      </RadioGroup>
    </FormControl>
  );
}

function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-multiline-static"
          label="Address(Required)"
          multiline
          rows={4.2}
        />
      </div>
    </Box>
  );
}
