import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AnchorLink from "@mui/material/Link";

function Deposit() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight:'100vh',
        py:{md:0,xs:8}
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          {/* left part */}
          <Box
            sx={{
              width: { md: "30%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { md: 4, xs: 0 },
              mb: { md: 0, xs: 4 },
            }}
          >
            <Box sx={{ flexGrow: 1, width: "100%"}}>
              <Grid
                container
                columnSpacing={{ md: 0, xs: 0 }}
                rowSpacing={{ md: 4.5, xs: 2 }}
              >
                {deposit.map((item, index) => {
                  return (
                    <Grid key={index} item md={12} sm={6} xs={12}>
                      <Box
                        id="depositBg"
                        sx={{
                          width: "100%",
                          height: "298px",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          border: "1px solid white",
                          borderRadius: "1.2rem",
                          p: 3,
                        }}
                      >
                        <Image
                          src={item.icon}
                          width={105}
                          height={105}
                          objectFit="contain"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            ml: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontFamily: "Inter",
                              lineHeight: "26px",
                              fontSize: {md:"35px", xs:'30px'},
                              fontWeight: 600,
                              color: "white",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <AnchorLink
                            sx={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              textDecoration: "none",
                              color: "white",
                              mt: 2,
                              cursor: "pointer",
                            }}
                          >
                            See more
                            <Image
                              src="/svg/SeeMore.svg"
                              width={24}
                              height={24}
                              objectFit="contain"
                            ></Image>
                          </AnchorLink>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
          {/* Right part */}
          <Box
            sx={{
              width: { md: "67%", xs: "100%" },
              border: "1px solid white",
              borderRadius: "1.3rem",
              height: "630px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "60%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Image
                src={"/svg/Deposite3.svg"}
                layout="fill"
                objectFit="contain"
              ></Image>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                mt: { md: 0, xs: -5 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  lineHeight: { md: "45.99px", xs: "37px" },
                  fontSize: { md: "2.2rem", xs: "1.8rem" },
                  fontWeight: 600,
                  pl: { md: 0, xs: 3 },
                  color: "white",
                }}
              >
                Deposit using Ethereum
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  lineHeight: { md: "26px", xs: "24px" },
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "white",
                  mt: 2,
                  textAlign: { md: "center", xs: "left" },
                  mb: { md: -2, xs: 2 },
                  pl: { md: 0, xs: 3 },
                }}
              >
                You can deposit and redeem against treasury assets using our
                website. This avoids frontrunning and market making cost.
              </Typography>
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
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Deposit;

const deposit = [
  {
    icon: "/Png/Deposit1.png",
    title: "Docs",
  },
  {
    icon: "/Png/Deposit2.png",
    title: "Roadmap",
  },
];
