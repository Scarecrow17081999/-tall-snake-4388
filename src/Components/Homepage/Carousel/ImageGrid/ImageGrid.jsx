import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export function ImageGrid1({ data }) {
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Grid>
        {data?.map((e) => {
          return (
            <Grid item xs={2}>
              <Item>
                <img src={e.img} alt={e.title} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default function ImageGrid({ data }) {
  const [spacing] = React.useState(2);
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <h1 style={{ color: "#010101", fontSize: "3rem" }}>{data[0].title}</h1>
        <p style={{ color: "#010101", fontSize: "1.8rem" }}>{data[0].detail}</p>
      </Box>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {data[1]?.map((value) => (
              <Grid key={value.title} item>
                <img src={value.img} alt={value.title} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
