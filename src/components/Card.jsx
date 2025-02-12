import React from "react";
import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const Card = ({ title, value, backgroundColor }) => {
  return (
    <Box
      sx={{
        backgroundColor,
        p: orange,
        borderRadius: 2,
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
  );
};

export default Card;