import React from "react";
import "./CheckOutNav.css";
import { Link } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaymentsIcon from "@mui/icons-material/Payments";
import SecurityIcon from "@mui/icons-material/Security";
import img1 from "./pwa_NB_HDFC.svg";
import img2 from "./pwa_NB_ICICI.svg";
import img3 from "./indusind.svg";
import img4 from "./kotak.svg";
import img5 from "./pwa_NB_DUMMY.svg";
import img6 from "./pwa_NB_SBI.svg";
import { AccountMenu } from "../Cart";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  ChakraProvider,
  Image,
  Stack,
  Select,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
export default function CheckOutNav() {
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
      </div>
      <div id="checkoutCartContainerMain">
        <div id="cartContainerMainLeft">
          <h1>Checkout</h1>
          <Accordian />
        </div>
        <div id="cartContainerMainRight">
          <div style={{display:'flex',alignItems:'center',position:'sticky',top:'155px',textAlign:'start'}}>
            <SecurityIcon style={{marginRight:'1rem'}}/>
            <p>
              Safe and secure payments. Easy returns. 100% Authentic products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const bankIcons = [img1, img2, img3, img4, img5, img6];
function Accordian() {
  return (
    <ChakraProvider>
      <Accordion
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
        allowToggle
      >
        <Box
          style={{
            fontSize: "1.5rem",
            textAlign: "start",
            // marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Payment Method
        </Box>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <CreditCardIcon
                sx={{ marginRight: "1rem", fontSize: "1.8rem" }}
              />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                Credit Card
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CreditCardInput />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <CreditScoreIcon
                sx={{ marginRight: "1rem", fontSize: "1.8rem" }}
              />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                Debit Card
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CreditCardInput />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <CalendarTodayIcon
                sx={{ marginRight: "1rem", fontSize: "1.8rem" }}
              />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                EMI
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CreditCardInput />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <PaymentsIcon sx={{ marginRight: "1rem", fontSize: "1.8rem" }} />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                UPI ID
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <UPIInput />
              <Button>Pay Now</Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccountBalanceIcon
                sx={{ marginRight: "1rem", fontSize: "1.8rem" }}
              />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                Netbanking
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              {bankIcons.map((e) => {
                return (
                  <Image
                    boxSize="90px"
                    objectFit="cover"
                    style={{ border: "1px solid #ccc" }}
                    src={e}
                    alt={e}
                  />
                );
              })}
            </Stack>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
                width: "80%",
              }}
            >
              <Select placeholder="Select option">
                <option value="option1">Bank of Baroda</option>
                <option value="option2">Bank of India</option>
                <option value="option3">Bank of Maharastra</option>
                <option value="option1">Catholic Syrian Bank</option>
                <option value="option2">Cosmos Bank</option>
                <option value="option3">Canara Bank</option>
                <option value="option1">Central Bank of India</option>
                <option value="option2">City Union</option>
                <option value="option3">Corporate Bank</option>
                <option value="option1">Federal Bank</option>
                <option value="option2">Karnataka Bank</option>
                <option value="option3">Reserve Bank of India</option>
              </Select>
              <Button style={{ marginLeft: "2rem" }}>Place Order</Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <CurrencyRupeeIcon
                sx={{ marginRight: "1rem", fontSize: "1.8rem" }}
              />
              <Box
                style={{ fontSize: "1.5rem" }}
                as="span"
                flex="1"
                textAlign="left"
              >
                Cash On Delivery
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>Pay with Cash when your order is delivered</div>
              <Button>Place Order</Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ChakraProvider>
  );
}

function UPIInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup width={"70%"} size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Enter Your Registered UIP ID*"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          Verify
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function CreditCardInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup style={{ display: "flex", flexDirection: "column" }} size="md">
      <Input
        pr="4.5rem"
        maxLength={16}
        type={show ? "text" : "password"}
        placeholder="Card Number*"
        style={{ margin: "1rem auto" }}
      />

      <Input
        pr="4.5rem"
        type={"text"}
        placeholder="Name on Card*"
        style={{ margin: "1rem auto" }}
      />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem auto",
        }}
      >
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="CVV*"
          maxLength={3}
          style={{ width: "30%" }}
        />
        <Box style={{ width: "30%" }}>
          <Select placeholder="Expiration Month">
            <option value="option1">01</option>
            <option value="option1">02</option>
            <option value="option1">03</option>
            <option value="option1">04</option>
            <option value="option1">05</option>
            <option value="option1">06</option>
            <option value="option1">07</option>
            <option value="option1">08</option>
            <option value="option1">09</option>
            <option value="option1">10</option>
            <option value="option1">11</option>
            <option value="option1">12</option>
          </Select>
        </Box>
        <Box style={{ width: "30%" }}>
          <Select placeholder="Expiration Year">
            <option value="option1">2023</option>
            <option value="option1">2024</option>
            <option value="option1">2025</option>
            <option value="option1">2026</option>
            <option value="option1">2027</option>
            <option value="option1">2028</option>
            <option value="option1">2029</option>
            <option value="option1">2030</option>
            <option value="option1">2031</option>
            <option value="option1">2032</option>
            <option value="option1">2033</option>
            <option value="option1">2034</option>
            <option value="option1">2035</option>
            <option value="option1">2036</option>
            <option value="option1">2037</option>
            <option value="option1">2038</option>
            <option value="option1">2039</option>
            <option value="option1">2040</option>
            <option value="option1">2041</option>
            <option value="option1">2042</option>
            <option value="option1">2043</option>
          </Select>
        </Box>
      </Box>
      <Button>Place Order</Button>
    </InputGroup>
  );
}
