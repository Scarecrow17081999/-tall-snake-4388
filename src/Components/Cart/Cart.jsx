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
import { FormControl, InputLabel, Input } from "@mui/material";
import "./Cart.css";
import CartFooter from "./CartFooter";
export default function Cart() {
  return (
    <div id="cartNavBarParent">
      <div
        id="cartNavBarFullWidth"
        style={{ position: "sticky", top: 0, zIndex: "999" }}
      >
        <div id="cartNavBar">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
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
        <h4>
          Apply a relevant coupon code here to avail any additional discount.
          Applicable cashback if any will be credited to your account as per
          T&C.
        </h4>
        <CartMainContainer />
      </div>
      <CartFooter />
    </div>
  );
}

function AccountMenu() {
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
