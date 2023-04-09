import React from "react";
import "./CartMainContainer.css";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CartFooter from "./CartFooter";
const data = [
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
  {
    img: "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016000649_437Wx649H_202301080231401.jpeg",
    title: "Campus Womens CAMP DENVER White Sneakers",
    price: "20.00",
  },
];
export default function CartMainContainer() {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <div style={{ width: "70%" }}>
        {data.map((e) => {
          return <CartCard data={e} key={Math.random()} />;
        })}
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
            top: "105px",

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
            <Divider />
          </div>
          <div>
            <div>
              <h1>Total</h1>
              <h3>₹300.00</h3>
            </div>
            <div style={{}}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartCard({ data }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", marginBottom: "15px", boxShadow: "none" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            `₹{data.price}`
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
