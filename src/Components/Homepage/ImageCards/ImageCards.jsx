import React from "react";
import Box from "@mui/material/Box";

export default function ImageCards({ data }) {
  return (
    <Box>
      <Box style={{margin:'90px auto'}}>
        <h1 style={{ color: "#010101", fontSize: "3rem" }}>{data[0].title}</h1>
        <p style={{ color: "#010101", fontSize: "1.8rem" }}>{data[0].detail}</p>
      </Box>
      <Box>
        {data[1].map((e) => {
          return <img key={e.img} src={e.img} alt={e.title} />;
        })}
      </Box>
    </Box>
  );
}
