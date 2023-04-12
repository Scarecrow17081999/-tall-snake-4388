import React from "react";
import { Box, Button } from "@mui/material";
import "./Footer.css";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          width: "80%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "120px",
          }}
        >
          <img
            src="https://www.tatacliq.com/src/general/components/img/Frame22222.svg"
            alt=""
          />
          <img
            style={{
              width: "35%",

              display: "block",
              margin: "auto",
              border: "1px solid #ccc",
              borderRadius: "20px",
              position: "relative",
              top: "-130px",
            }}
            src="https://www.tatacliq.com/src/general/components/img/trustFrame.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
            height: "120px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <img
              style={{ width: "55px" }}
              src="https://www.tatacliq.com/src/general/components/img/feedBackIcons.svg"
              alt=""
            />
            <p>
              <h4>Let us Know how you feel</h4>
              <h4>It’ll only take 2 minutes</h4>
            </p>
            <Button
              color="primary"
              sx={{ height: "60px", width: "200px" }}
              variant="outlined"
            >
              Give Feedback
            </Button>
          </Box>
        </Box>
      </Box>
      <Box id="bottomFooter" sx={{ width: "80%", margin: "auto" }}>
        <Box className="footerLists" sx={{ width: "600px", marginTop: "10px" }}>
          <ul>
            <a href="/">
              <li>Tata Marketplace</li>
            </a>
            <a href="/">
              <li>About Us</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
            <a href="/">
              <li>Sell With Us</li>
            </a>
            <a href="/">
              <li>Terms of Use</li>
            </a>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
            <a href="/">
              <li>Affiliates</li>
            </a>
            <a href="/">
              <li>Sitemap</li>
            </a>
          </ul>
          <ul>
            <a href="/">
              <li>Customer Service</li>
            </a>
            <a href="/">
              <li>Shopping</li>
            </a>
            <a href="/">
              <li>Offers and Promitions</li>
            </a>
            <a href="/">
              <li>Payments</li>
            </a>
            <a href="/">
              <li>Cancellation</li>
            </a>
            <a href="/">
              <li>Return and Refunds</li>
            </a>
            <a href="/">
              <li>Return to store</li>
            </a>
            <a href="/">
              <li>Electronic return policy</li>
            </a>
            <a href="/">
              <li>Contact Us</li>
            </a>
            <a href="/">
              <li>Review Guidlines</li>
            </a>
            <a href="/">
              <li>Furniture Return Policy</li>
            </a>
          </ul>
          <ul>
            <a href="/">
              <li>My Tata CLiQ</li>
            </a>
            <a href="/">
              <li>My Account</li>
            </a>
            <a href="/">
              <li>My Orders</li>
            </a>
            <a href="/">
              <li>My Shopping Bag</li>
            </a>
            <a href="/">
              <li>My Whislist</li>
            </a>
          </ul>
        </Box>
        <Box className="footerLists2" sx={{ width: "500px" }}>
          <h4>Tata CLiQ Offerings</h4>
          <p>
            Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men
            | Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen
            Solly | Sparx Shoes | Gold Rings | Formal Shoes for Men | Sports
            Shoes for Men | Wallets for Men | Ladies Watches | Trolley Bags |
            Handbags for Women | Sling Bags for Women | Casual Shoes for Men |
            Boots for Men | Digital Watches | Sonata Watches | Sneakers for
            Women | Running Shoes | Puma Shoes | Boots for Women | Skechers |
            Malabargold | Fabindia | Utsa | Vark | Gia | LOV | Sitemap
          </p>
        </Box>
      </Box>
      <Box id="bottomFooterImageSection">
        <div id="bottomFooterImageSectionChild">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Download App</p>
            <AdbIcon sx={{ marginRight: "15px" }} />
            <AppleIcon sx={{ marginRight: "15px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FacebookIcon sx={{ marginRight: "15px" }} />
            <TwitterIcon sx={{ marginRight: "15px" }} />
            <InstagramIcon sx={{ marginRight: "15px" }} />
            <YouTubeIcon sx={{ marginRight: "15px" }} />
            <LinkedInIcon sx={{ marginRight: "15px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>© 2023 Tata CLiQ | All rights reserved</p>
          </div>
        </div>
      </Box>
      <Box id="bottomFooterDetailSection">
        <div>
          <div>
            <h4>
              TATA CLiQ: Shop Online with India's most trusted destination
            </h4>
            <p>
              Genuine products from all the top brands get delivered right to
              your doorstep. Our sleek, immersive design allows you to easily
              navigate between categories and brand stores so that you can find
              a wide selection of womenswear, menswear, kidswear, footwear,
              watches, accessories, footwear, watches and accessories online.
              You can also check our great offers and get the best prices on
              various products across lifestyle, fashion, and more.
            </p>
          </div>
          <div>
            <h4>
              Online Shopping: Fast & convenient with the click of a button
            </h4>
            <p>
              The upside of online shopping at TATA CLiQ online store, is that
              you'll save on time and most importantly money with TataCliq
              offers. It's as simple as comparing products and prices online
              before making the right buy. What's more, you also have the option
              to pay for your favourite brands and products using our easy EMI
              options. Of course, you can buy and try - in the convenience of
              your home. Returns are easy too: We'll pick up your returns for
              free or you can also drop off the goods at the nearest brand
              store.
            </p>
          </div>
          <div>
            <h4>Tata CLiQ Shopping App: just a few clicks on Android & iOS</h4>
            <p>
              Download the Android app from the Play Store or the iOS app from
              Apple App Store and get set to enjoy a range of benefits. Apart
              from the best deals, amazing offers and the latest styles online,
              the app also gives you the flexibility to shop at your
              convenience. Use the easy share options to share your shopping
              with your friends and family to ensure you're buying something
              perfect. With constant updates and a host of new features being
              introduced constantly, enjoy a shopping experience that you'll
              love.
            </p>
          </div>
          <div>
            <h4>TATA CLiQ: The most genuine place for Fashion and Lifestyle</h4>
            <p>
              With an exclusive Brand Store for Westside Online we have most of
              your trendy shopping needs taken care of. Make TATA CLiQ your
              online shopping destination and get the best deals on your
              favourite brands, with 100% genuine products. Be it jewellery or
              makeup, you can count on TATA CLiQ for receiving only the most
              authentic products.
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
}
