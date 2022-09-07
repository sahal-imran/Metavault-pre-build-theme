import React from "react";
import { Box, Container, Button } from "@mui/system";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CustomButton from "../common/Button/CustomButton";

function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100vh" },
          pt: { md: 16, xs: 10 },
          pb: { md: "unset", xs: 12 },
        }}
      >
        <Typography
          sx={{
            maxWidth: { md: "40rem", xs: "100%" },
            fontFamily: "Inter",
            textAlign: "center",
            lineHeight: { md: "4.2rem", xs: "3rem" },
            mt: { md: "-54px", xs: "5.5rem" },
            fontSize: { md: "3.8rem", xs: "2rem" },
            fontWeight: 700,
            color: "rgb(255, 170, 39)",
          }}
        >
          Venture Investments & Incubation
        </Typography>
        <Typography
          sx={{
            maxWidth: "62rem",
            mt: 3,
            textAlign: "center",
            fontFamily: "Inter",
            lineHeight: "2rem",
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "white",
          }}
        >
          Venture Metavault DAO is a blockchain-based, community governed
          investment platform and decentralized venture capital fund. It allows
          anyone to participate in the latest and most profitable DeFi projects
          and strategies and deploys a in-house development team for project
          incubation.
        </Typography>
        <CustomButton
          text="Enter App"
          marginTop="2.5rem"
          paddingX="6.5rem"
          paddingY="1.2rem"
          fontSize="1.2rem"
        ></CustomButton>
        <Typography
          sx={{
            color: "white",
            fontSize: { md: "1.3rem", xs: "1rem" },
            fontFamily: "Inter",
            mt: 3.5,
            letterSpacing: "2px",
            fontWeight: 100,
          }}
        >
          ethereum
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
