import React from "react";
import { Box, Container } from "@mui/system";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";
import { Button } from "@mui/material";

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
          pt: { md: 24, xs: 8.5 },
          pb: { md: "unset", xs: 12 },
        }}
      >
        <Fade bottom cascade>
          <Typography
            sx={{
              maxWidth: { md: "40rem", xs: "100%" },
              fontFamily: "Inter",
              textAlign: "center",
              lineHeight: { md: "4.2rem", xs: "3rem" },
              mt: { md: "-54px", xs: "5.5rem" },
              fontSize: { md: "3.8rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "rgb(255, 170, 39)",
            }}
          >
            Venture Investments & Incubation
          </Typography>
        </Fade>
        <Fade bottom delay={500} cascade>
          <Typography
            sx={{
              maxWidth: "62rem",
              mt: 3,
              textAlign: "center",
              fontFamily: "Inter",
              lineHeight: { md: "2rem", xs: "1.5rem" },
              fontSize: { md: "1.2rem", xs: "15px" },
              fontWeight: 500,
              color: "white",
            }}
          >
            Venture Metavault DAO is a blockchain-based, community governed
            investment platform and decentralized venture capital fund. It
            allows anyone to participate in the latest and most profitable DeFi
            projects and strategies and deploys a in-house development team for
            project incubation.
          </Typography>
        </Fade>
        <Fade bottom delay={800} cascade>
          <Button
            variant="contained"
            sx={{
              px: "6.5rem",
              py: "1.2rem",
              background: "#FFAA27",
              color: "black",
              borderRadius: ".8rem",
              fontFamily: "Inter",
              textTransform: "capitalize",
              mt: "2.5rem",
              fontWeight: 600,
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#FFAA27",
              },
            }}
          >
            Enter App
          </Button>
        </Fade>
        <Fade bottom delay={1300} cascade>
          <Box
            sx={{
              position: "relative",
              width: { md: "180px", xs: "130px" },
              height: { md: "180px", xs: "130px" },
            }}
          >
            <Image
              src={"/svg/EtheriumIcon.svg"}
              layout="fill"
              objectFit="contain"
            ></Image>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Hero;
