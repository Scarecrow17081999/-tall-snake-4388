import React from "react";
import { Link } from "react-router-dom";

const style = {

    backgroundColor: "#fffff",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    border: "1px solid #e6e6e6",
    borderRadius: "5px",
};
export default function EmptyCartComponent() {
  return (
    <div>
      <img
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" ,marginTop:'3rem'}}
        src="https://www.tatacliq.com/src/cart/components/img/emptycard.png"
        alt=""
      />
      <Link to="/">
        <button
          style={{ color: "white", border: "none", backgroundColor: "#ff1744" ,padding: "15px" ,borderRadius: "2rem",cursor: "pointer",marginTop:'3rem',fontSize: "1.5rem"}}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
