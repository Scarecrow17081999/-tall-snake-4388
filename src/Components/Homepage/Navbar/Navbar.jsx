import React from "react";
import { Link,Navigate } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControl from "@mui/material/FormControl";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Cart from '../.././Cart/Cart';
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
      <Box
        sx={{
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "0 15px",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          CLiQ Cash
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          CLiQ Card
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          CLiQ Care
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Track Orders
        </Link>
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
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Order History</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>My Wishlist</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Alerts & Coupoun</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Gift Cards</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>CLiQ Cash</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, width: "100%" }}>
      <FormControl sx={{ width: "250%" }}>
        <input
          id="searchInput"
          placeholder="Search for products"
          style={{
            height: "40px",
            width: "100%",
            backgroundColor: "#4a4a4a",
            borderRadius: "4px",
            border: "1px solid #4a4a4a",
            color: "white",
            fontSize: "16px",
          }}
        />
      </FormControl>
    </Box>
  );
}

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
  },
}));

function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onMouseEnter={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          background: "transparent",
          backgroundColor: "none",
          color: "white",
        }}
      >
        Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
function CustomizedMenus2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onMouseEnter={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          background: "transparent",
          backgroundColor: "none",
          color: "white",
        }}
      >
        Brands
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
export default function Navbar() {
  return (
    <Box id="navbarContainer">
      <Box id="topNavContainer">
        <Box>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Tata CLiQ Luxury
          </Link>
        </Box>
        <Box sx={{ width: "50%" }}>
          <AccountMenu />
          <Box></Box>
        </Box>
      </Box>
      <Box id="bottomNavContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <CustomizedMenus />
          <CustomizedMenus2 />
          <InputWithIcon />
        </div>
        <div style={{ margin: "auto 9px" }}>
          <IconButton aria-label="delete">
            <FavoriteBorderIcon sx={{ color: "white" }} />
          </IconButton>
          <Badge
            sx={{
              margin: "0 0 0 15px",
            }}
            badgeContent={1}
            color="primary"
            max={10}
          >
            <IconButton
              sx={{
                color: "white",
                padding: "0",
                margin: "0",
              }}
              aria-label="delete"
            >
              <Navigate to={<Cart />}>
                <LocalMallIcon sx={{ color: "white" }} />
              </Navigate>
            </IconButton>
          </Badge>
        </div>
      </Box>
    </Box>
  );
}
