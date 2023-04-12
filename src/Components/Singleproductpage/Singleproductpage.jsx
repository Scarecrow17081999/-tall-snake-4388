import React from "react";
import "./Singleproductpage.css";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import { Divider } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Button from "@mui/material/Button";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
export default function Singleproductpage({ data }) {
  const [singleProduct, setSingleProduct] = React.useState({});
  let { id } = useParams();

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setSingleProduct(data);
  };

  React.useEffect(() => {
    fetchProducts();
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div id="singleProductParentPage">
        <div id="singleProductChildPage">
          <div id="singleProductTopContainer">
            <div id="singleProductTopContainer1">
              <div>
                <img
                  src={
                    singleProduct.images !== undefined
                      ? singleProduct.images[0]
                      : ""
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    singleProduct.images !== undefined
                      ? singleProduct.images[1]
                      : ""
                  }
                  alt=""
                />
              </div>
            </div>
            <div id="singleProductTopContainer2">
              <div>
                <p
                  style={{
                    border: "none",
                    width: "50%",
                    padding: "0.5rem",
                    borderRadius: "2rem",
                    backgroundColor: "#fdf4f7",
                  }}
                >
                  Popular: Recently wishlisted 297 times
                </p>
              </div>
              <div>
                <h4
                  style={{
                    textAlign: "start",
                  }}
                >
                  {singleProduct.title !== undefined ? singleProduct.title : ""}
                </h4>
                <div
                  style={{
                    textAlign: "start",
                  }}
                >
                  <p>
                    {" "}
                    {singleProduct.description !== undefined
                      ? singleProduct.description
                      : ""}
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h4>
                    {singleProduct.price !== undefined
                      ? `₹${singleProduct.price}`
                      : ""}
                  </h4>
                  <p>Inclusive of all taxes</p>
                </div>
                <div
                  style={{
                    textAlign: "start",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      background: "#49a862",
                      fontSize: "1.2rem",
                      padding: "0rem 0.5rem",
                      marginRight: "15px",
                      height: "1.8rem",
                      borderRadius: "1.5rem",
                      boxShadow: "none",
                    }}
                    variant="contained"
                    endIcon={<StarOutlineIcon />}
                  >
                    3.5
                  </Button>
                  <p>27Ratings & 1Review</p>
                </div>
                <div>
                  <p
                    style={{
                      border: "none",
                      width: "55%",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "#fdf4f7",
                    }}
                  >
                    Price dropped by ₹3502 recently
                  </p>
                </div>
                <Divider />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocalOfferIcon
                      sx={{ textAlign: "start", color: "#f6cc1e" }}
                    />

                    <h4
                      style={{
                        marginLeft: "1rem",
                      }}
                    >
                      Flat 10% off on all UPI transactions
                    </h4>
                  </div>
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "-15px",
                      marginLeft: "2.5rem",
                    }}
                  >
                    <p> Use Code: UPI | Min Purchase: ₹1000</p>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocalOfferIcon
                      sx={{ textAlign: "start", color: "#f6cc1e" }}
                    />

                    <h4
                      style={{
                        marginLeft: "1rem",
                      }}
                    >
                      15% off on AU Small Finance Bank Limited Debit & Credit
                      Cards.
                    </h4>
                  </div>
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "-15px",
                      marginLeft: "2.5rem",
                    }}
                  >
                    <p> Use Code: AUCLIQ300 | Min Purchase: ₹500</p>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocalOfferIcon
                      sx={{ textAlign: "start", color: "#f6cc1e" }}
                    />

                    <h4
                      style={{
                        marginLeft: "1rem",
                      }}
                    >
                      FGet flat Rs. 200 off on your first order.
                    </h4>
                  </div>
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "-15px",
                      marginLeft: "2.5rem",
                    }}
                  >
                    <p> Use Code: FIRSTCLIQ | Min Purchase: ₹1200</p>
                  </div>
                </div>
                <Divider />
                <div>
                  <h4 style={{ textAlign: "start" }}>From The Brand</h4>
                  <div
                    style={{
                      backgroundColor: "#fbe8ef",
                      padding: "1.2rem",
                      borderRadius: "1rem",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "start",
                        backgroundColor: "white",
                        padding: "1rem",
                        borderRadius: "1rem",
                      }}
                    >
                      <h4>
                        {singleProduct.title !== undefined
                          ? singleProduct.title
                          : ""}
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.8",
                        }}
                      >
                        {singleProduct.description !== undefined
                          ? singleProduct.description
                          : ""}
                      </p>
                      <button
                        style={{
                          color: "#da1c5c",
                          border: "1px solid #da1c5c",
                          width: "100%",
                          backgroundColor: "white",
                          padding: "0.7rem",
                          borderRadius: "0.5rem",
                          fontSize: "1.2rem",
                          cursor: "pointer",
                        }}
                      >
                        Visit Store
                      </button>
                    </div>
                  </div>
                </div>
                <Divider sx={{ margin: "1.5rem 0" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ShareOutlinedIcon
                    sx={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                      fontSize: "1.8rem",
                    }}
                  />

                  <FavoriteBorderOutlinedIcon
                    sx={{
                      border: "1px solid #ccc",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                      fontSize: "1.8rem",
                    }}
                  />

                  <button
                    style={{
                      color: "#da1c5c",
                      border: "1px solid #da1c5c",
                      width: "38%",
                      backgroundColor: "white",
                      padding: "0.7rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    style={{
                      // color: "#da1c5c",
                      border: "1px solid #da1c5c",
                      color: "white",
                      width: "38%",
                      backgroundColor: "#da1c5c",
                      padding: "0.7rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    Add To Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="singleProductBottomContainer">
            <div>
              <div>
                <PersonOutlineSharpIcon style={{ marginRight: "0.2rem" }} />
                <p style={{ marginRight: "0.7rem" }}>Muni</p>
                <DoneSharpIcon style={{ marginRight: "0.2rem" }} />
                <p style={{ marginRight: "0.7rem" }}>Verified Buyer</p>
                <Button
                  sx={{
                    background: "#49a862",
                    fontSize: "1.2rem",
                    padding: "0rem 0.1rem",
                    borderRadius: "1rem",
                    width: "10px",
                    backgroundColor: "#fff9e4",
                    color: "black",
                    boxShadow: "none",
                  }}
                  variant="contained"
                  endIcon={<StarPurple500SharpIcon sx={{ color: "#f5d727" }} />}
                >
                  1
                </Button>
              </div>
              <div>
                <p>12 Mar, 2023</p>
              </div>
            </div>
            <Divider />
            <div style={{ display: "block" }}>
              <p>
                This shoe is definitely not worth 4k+ the sole was the hardest
                as it would otherwise be with a non branded shoe the grips felt
                more plastic to touch thats how bad it was invest in something
                else
              </p>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Light Weight"
                  sx={{
                    backgroundColor: "#da1c5c",
                    color: "white",
                    fontWeight: "700",
                  }}
                />
                <Chip
                  label="Comfort"
                  sx={{
                    backgroundColor: "#da1c5c",
                    color: "white",
                    fontWeight: "700",
                  }}
                />
                <Chip
                  label="Size"
                  sx={{
                    backgroundColor: "#da1c5c",
                    color: "white",
                    fontWeight: "700",
                  }}
                />
                <Chip
                  label="Performance"
                  sx={{
                    backgroundColor: "#da1c5c",
                    color: "white",
                    fontWeight: "700",
                  }}
                />
                <Chip
                  label="Delivery"
                  sx={{
                    backgroundColor: "#da1c5c",
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
