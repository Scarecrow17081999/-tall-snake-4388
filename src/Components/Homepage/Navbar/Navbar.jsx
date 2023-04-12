import React, { useEffect } from "react";
import  {CartTotalItems} from '../../../Contexts/CartTotalItems';
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { FormControl, Input, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";

import { AuthContext } from "../../../Contexts/AuthContext";
import { useContext } from "react";
function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout, isAuthenticated } = useContext(AuthContext);
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
        {isAuthenticated ? (
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
        ) : (
          <TransitionsModal />
        )}
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
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
function InputWithIcon() {
  const [setSearchInput] = React.useState("");

  const submitFunction = () => {
    <Navigate to="/searchpage" replace={true} />;
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, width: "100%" }}>
      <form onSubmit={submitFunction} sx={{ width: "250%" }}>
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
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
        <Link to="/searchpage">Button</Link>
      </form>
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
  const { cartTotalProductsNumber } = useContext(CartTotalItems);


return (
  <Box id="navbarContainer" sx={{ position: "sticky", top: 0, zIndex: "999" }}>
    <Box id="topNavContainer">
      <Box>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Tata CLiQ Luxury
        </Link>
      </Box>
      <Box sx={{ width: "50%" }}>
        <AccountMenu />
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
          badgeContent={window.localStorage.getItem("cartTotalProductsNumber")}
          color="primary"
          max={100}
        >
          <IconButton
            sx={{
              color: "white",
              padding: "0",
              margin: "0",
            }}
            aria-label="delete"
          >
            <Link to="/cart">
              <LocalMallIcon sx={{ color: "white" }} />
            </Link>
          </IconButton>
        </Badge>
      </div>
    </Box>
  </Box>
);
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: "1.5rem",
  boxShadow: 24,
  p: 4,
};

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [numberOrMobile, setNumberOrMobile] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { login } = useContext(AuthContext);
  return (
    <div>
      <LoginIcon
        sx={{ color: "white", fontSize: "2.5rem" }}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {numberOrMobile ? (
              <Box sx={{ textAlign: "center", p: "30px" }}>
                <Typography sx={{ fontSize: "2.5rem" }}>
                  Welcome to Tata CLiQ
                </Typography>
                <Typography sx={{ color: "#ccc", marginBottom: "3rem" }}>
                  Please enter your email address
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="my-input">
                    Enter Email Address
                  </InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <Div
                    onClick={() => {
                      setNumberOrMobile(false);
                    }}
                    sx={{
                      cursor: "pointer",
                      color: "red",
                      textAlign: "center",
                      margin: "15px auto",
                    }}
                  >
                    {"Use Mobile Number"}
                  </Div>
                  <Box sx={{ textAlign: "start", fontSize: "0.7rem" }}>
                    <p>
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy andTerms of Service apply.
                    </p>
                    <p>
                      By continuing, you agree to our Terms of Use and Privacy
                      Policy.
                    </p>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ margin: "15px auto", width: "100%" }}
                    type="submit"
                    onClick={login}
                  >
                    Continue
                  </Button>
                </FormControl>
              </Box>
            ) : (
              <Box sx={{ textAlign: "center", p: "30px" }}>
                <Typography sx={{ fontSize: "2.5rem" }}>
                  Welcome to Tata CLiQ
                </Typography>
                <Typography sx={{ color: "#ccc", marginBottom: "3rem" }}>
                  Please enter your mobile number
                </Typography>

                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="my-input">
                    Enter Mobile Number
                  </InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <Div
                    onClick={() => {
                      setNumberOrMobile(true);
                    }}
                    sx={{
                      cursor: "pointer",
                      color: "red",
                      textAlign: "center",
                      margin: "15px auto",
                    }}
                  >
                    {"Use Email Address"}
                  </Div>
                  <Box sx={{ textAlign: "start", fontSize: "0.7rem" }}>
                    <p>
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy andTerms of Service apply.
                    </p>
                    <p>
                      By continuing, you agree to our Terms of Use and Privacy
                      Policy.
                    </p>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ margin: "15px auto", width: "100%" }}
                    type="submit"
                    onClick={login}
                  >
                    Continue
                  </Button>
                </FormControl>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
