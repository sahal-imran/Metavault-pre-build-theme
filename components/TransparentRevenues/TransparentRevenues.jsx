import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function TransparentRevenues() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py:{md:0,xs:4}
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* right */}
        <Box
          id="TransparentRevenuesLeftBG"
          sx={{
            width: { md: "50%", xs: "100%" },
            height: { sm: "590px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mr: { md: 2 },
            border: "1px solid white",
            borderRadius: "1.2rem",
            overflow: "hidden",
            pb:{md:'unset',xs:4}
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { sm: "50%", xs: "200px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={"/Png/coin1.png"} layout="fill" objectFit="cover" />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: {md:"start",xs:'center'},
              alignItems: "center",
              flexDirection: "column",
              px: 3,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: "45.99px",
                fontSize: { md: "2.2rem", xs: "1.8rem" },
                fontWeight: 600,
                color: "white",
              }}
            >
              Transparent Revenues
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Inter",
                lineHeight: { md: "26px", xs: "24px" },
                fontSize: { md: "18px", xs: "16px" },
                fontWeight: 500,
                color: "white",
                mt: 2,
              }}
            >
              Participate in proprietary yield strategies with Metavault DAO!
              Our team is constantly scouring the crypto landscape for new and
              potentially disruptive projects, protocols and strategies. We
              allocate treasury funds to the most promising projects at an early
              stage to capture the best rewards for our investors.
            </Typography>
          </Box>
        </Box>
        {/* left */}
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            ml: { md: 2 },
            mt: { md: 0, xs: 4 },
          }}
        >
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Grid container spacing={{md:4,xs:2}}>
              {Cards.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} md={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "280px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        border: "1px solid white",
                        borderRadius: "1.2rem",
                        p: 2,
                      }}
                    >
                      <Image
                        src={item.Ico}
                        width={54}
                        height={54}
                        objectFit="contain"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontFamily: "Inter",
                          lineHeight: "26px",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "hsla(0,0%,100%,.7)",
                          mt: 1,
                        }}
                      >
                        {item.Title}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontFamily: "Inter",
                          lineHeight: "28px",
                          fontSize: "20px",
                          fontWeight: 600,
                          color: "white",
                          mt: 1,
                        }}
                      >
                        {item.Price}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TransparentRevenues;

const Cards = [
  {
    Ico: "/svg/Bank.svg",
    Title: "Treasury Balance",
    Price: "$ 316,311",
  },
  {
    Ico: "/svg/Bank.svg",
    Title: "Treasury Balance",
    Price: "$ 316,311",
  },
  {
    Ico: "/svg/Bank.svg",
    Title: "Treasury Balance",
    Price: "$ 316,311",
  },
  {
    Ico: "/svg/Bank.svg",
    Title: "Treasury Balance",
    Price: "$ 316,311",
  },
];
