import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CartSnackBar({ data }) {
   const [open, setOpen] = React.useState(false);
   console.log(data.addToBagFunction);
   const handleClick = () => {
     setOpen(true);
   };

   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };

   return (
     <>
       <button
         style={{
           border: "1px solid #da1c5c",
           color: "white",
           width: "38%",
           backgroundColor: "#da1c5c",
           padding: "0.7rem",
           borderRadius: "0.5rem",
           fontSize: "1.2rem",
           cursor: "pointer",
         }}
         onClick={() => {
           data.addToBagFunction();
           handleClick();
         }}
       >
         Add To Cart
       </button>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
           Product Added To Cart
         </Alert>
       </Snackbar>
       {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
     </>
   );
 }
