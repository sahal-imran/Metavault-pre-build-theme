import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";


function InvestAndGovern() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { md: "100vh", xs: "auto" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { md: 0, xs: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "550px", xs: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            border: "1px solid white",
            borderRadius: "1.3rem",
            overflow: "hidden",
            height: "100%",
            mb: { md: 0, xs: 4 },
          }}
        >
          {/* Left part */}
          <Box
            id="InvestAndGovernBg"
            sx={{
              width: { md: "50%", xs: "100%" },
              height: { md: "100%", xs: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
          {/* Right part */}
          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              height: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              p: { md: 5, xs: 4 },
            }}
          >
            <Zoom cascade>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  lineHeight: "45.99px",
                  fontSize: { md: "2.2rem", xs: "1.8rem" },
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Invest & Govern!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  lineHeight: { md: "26px", xs: "24px" },
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "white",
                  mt: 2,
                }}
              >
                Metavault DAO allows anyone looking for exposure in the DeFi
                space to participate, without the need for substantial capital
                and connections, opening the latest innovations in the space to
                regular people. We invite anyone to enter further into the DeFi
                world and actually contribute to run a DAO, come help shape the
                direction of Metavault DAO!
              </Typography>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default InvestAndGovern;
