import React, { useEffect } from "react";
import "./CartMainContainer.css";
// import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { CartTotalItems } from "../../Contexts/CartTotalItems";
import { useContext } from "react";
export default function CartMainContainer() {
  const [cartItems, setCartItems] = React.useState(null);
 

  useEffect(() => {
    let data1= JSON.parse(window.localStorage.getItem("cartData"))
    setCartItems(data1);
    console.log(data1);
  }, [cartItems]);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "70%" }}>
        {cartItems?.map((e) => {
          return (
            <CartCard
              setItems={setCartItems}
              totalItems={cartItems}
              data={e}
              key={e.id}
            />
          );
        })}
        <Link to="/">
          <button
            style={{
              padding: "9px 25px",
              fontSize: "1.3rem",
              borderRadius: "3rem",
              border: "1px solid black",
              marginBottom: "15px",
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
      <div>
        <div
          id="productTotal"
          style={{
            width: "300px",
            backgroundColor: "white",
            padding: "25px",
            marginBottom: "1rem",
            borderRadius: "10px",
            position: "sticky",
            top: 175,
          }}
        >
          <div>
            <p>Bag Total</p> <p>`₹5000`</p>
          </div>
          <div>
            <p>Shipping Charge</p> <p>`FREE`</p>
          </div>
          <div>
            <p>Bag Subtotal</p> <p>`₹5000`</p>
          </div>
          <div>
            <p>Product Discount(s)</p> <p>`₹5000`</p>
          </div>
          <div>
            <p>You will save ₹300.00 on this order</p>
          </div>
          <div>
            <Divider sx={{ borderBottom: "1px solid #ccc", width: "100%" }} />
          </div>
          <div>
            <div>
              <h1>Total</h1>
              <h3>₹300.00</h3>
            </div>
            <div style={{}}>
              <Link to='/checkout'>
              <button
                style={{
                  padding: "9px 25px",
                  fontSize: "1.3rem",
                  borderRadius: "3rem",
                  border: "1px solid black",
                  marginBottom: "15px",
                  margin: "auto 0",
                }}
                >
                Checkout
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function CartCard({ data, setItems, totalItems }) {
  const { CartData, removeItem } = useContext(CartTotalItems);
  const removeItems = (id) => {

    let newData=totalItems.filter((e)=>e.id!==id);
    console.log(id, setItems, totalItems);
    window.localStorage.setItem("cartData", JSON.stringify(newData));
    removeItem();

  };

  return (
    <Card
      sx={{
        display: "flex",
        marginBottom: "15px",
        boxShadow: "none",
        justifyContent: "space-between",
        p: "0 20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "151px", padding: "15px", borderRadius: "18px" }}
        image={data.images ? data.images[0] : ""}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid black",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography sx={{ textAlign: "start" }} component="div" variant="h5">
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "start" }}
          >
            ₹{data.price}
          </Typography>
        </CardContent>
        <Divider sx={{ borderBottom: "1px solid #ccc", width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
            pt: 1,
          }}
        >
          <UseMenu />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="delete">
              <FavoriteBorderIcon sx={{ color: "black" }} />
            </IconButton>
            <p style={{ marginRight: "1rem" }}>Save to wishlist</p>
            <Button
              onClick={() => {
                removeItems(data.id);
              }}
              sx={{ border: "none", background: "transparent" }}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
function UseMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (num) => {
    setQuantity(num);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Quantity:
      </Button>
      <span style={{ marginLeft: "15px" }}>{quantity}</span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose(1);
          }}
        >
          1
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(2);
          }}
        >
          2
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(3);
          }}
        >
          3
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(4);
          }}
        >
          4
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose(5);
          }}
        >
          5
        </MenuItem>
      </Menu>
    </div>
  );
}
