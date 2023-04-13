import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import CartMainContainer from "./CartMainContainer";
import EmptyCartComponent from "./EmptyCartComponent";
import { FormControl, InputLabel, Input } from "@mui/material";
import "./Cart.css";
import CartFooter from "./CartFooter";
import { Link } from "react-router-dom";
import { CartTotalItems } from "../../Contexts/CartTotalItems";
import { useContext } from "react";
export default function Cart() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    let data1 = JSON.parse(window.localStorage.getItem("cartData"));
    setCartItems(data1);
  }, [cartItems]);


  React.useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div id="cartNavBarParent">
      <div
        id="cartNavBarFullWidth"
        style={{ position: "sticky", top: 0, zIndex: "999" }}
      >
        <div id="cartNavBar">
          <Link style={{ height: "100%" }} to="/">
            <img
              style={{ height: "100%" }}
              src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png"
              alt=""
            />
          </Link>
          <AccountMenu />
        </div>
        <div id="cartNavBarBottom">
          <div>
            <h1>MY BAG</h1>
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Change PIN number</InputLabel>
                <Input
                  sx={{ width: "200px" }}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div id="cartContainerMain">
        
        <Box >

        {cartItems.length !== 0||null ? (
          <>
          <h4>
          Apply a relevant coupon code here to avail any additional discount.
          Applicable cashback if any will be credited to your account as per
          T&C.
        </h4>
          <CartMainContainer />
          </>
        ) : (
          <EmptyCartComponent />
          )}
          </Box>
      
      </div>
      <Box style={{position:'absolute',width:'100%',marginTop:'2rem'}}>

      {cartItems.length !== 0||null ? <CartFooter  /> : null}
      </Box>
    </div>
  );
}

 export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
