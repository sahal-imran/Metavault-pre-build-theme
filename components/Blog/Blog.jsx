import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Blog() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          }}
        >
          {/* Grid */}
          <Box sx={{ flexGrow: 1, width: "33%" }}>
            <Grid container spacing={{ md: 1, xs: 1 }}>
              {Blog_Data.map((item, index) => {
                return (
                  <Grid key={index} item md={4} sm={6} xs={12}>
                    <Zoom cascade>
                      <Box
                        sx={{
                          width: "100%",
                          minHeight: "470px",
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          alignItems: { md: "start", xs: "center" },
                          flexDirection: "column",
                          borderRight: "1px solid rgb(31,31,34)",
                          borderLeft: "1px solid rgb(31,31,34)",
                          p: 4,
                        }}
                      >
                        <Image
                          src={item.icon}
                          width={84}
                          height={84}
                          objectFit="contain"
                        />
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            lineHeight: { md: "26px", xs: "30px" },
                            fontSize: { md: "25px", xs: "22px" },
                            fontWeight: 600,
                            color: "white",
                            textAlign: { md: "unset", xs: "center" },
                            mt: 3,
                            mb: 2,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontFamily: "Inter",
                            lineHeight: "28px",
                            fontSize: "16px",
                            fontWeight: 400,
                            textAlign: { md: "left", xs: "center" },
                            color: "white",
                          }}
                        >
                          {item.des}
                        </Typography>
                      </Box>
                    </Zoom>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <Box
                  id="blogBg"
                  sx={{
                    width: "100%",
                    height: { md: "510px", sm: "350px", xs: "510px" },

                    display: "flex",
                    flexDirection: { sm: "row", xs: "column" },
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1.5rem",
                  }}
                >
                  {/* left Box */}
                  <Box
                    sx={{
                      width: { md: "40%", xs: "100%" },
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      px: 5,
                    }}
                  >
                    <Zoom cascade>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          lineHeight: "45.99px",
                          fontSize: {
                            md: "2.7rem",
                            sm: "2.2rem",
                            xs: "1.8rem",
                          },
                          fontWeight: 600,
                          color: "white",
                        }}
                      >
                        Join the Metavault DAO
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          width: '300px',
                          paddingY: { md: "1.4rem", xs: "1.3rem" },
                          background: "#FFAA27",
                          color: "black",
                          borderRadius: ".8rem",
                          fontFamily: "Inter",
                          textTransform: "capitalize",
                          fontWeight: 600,
                          fontSize: { md: "1.5rem", xs: "1.2rem" },
                          mt: 4,
                          whiteSpace: "noWrap",
                          "&:hover": {
                            backgroundColor: "#FFAA27",
                          },
                        }}
                      >
                        Enter App
                      </Button>
                    </Zoom>
                  </Box>
                  {/* Right Box */}
                  <Box
                    sx={{
                      width: { md: "60%", xs: "100%" },
                      height: { md: "510px", sm: "350px", xs: "400px" },
                      pt: { sm: 3.5, xs: 3 },
                      pl: { sm: 0, xs: 2 },
                    }}
                  >
                    {/* Image Box */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Fade right cascade>
                        <Image
                          src={"/Png/BlogDesktop.png"}
                          layout="fill"
                          objectFit="fill"
                        ></Image>
                      </Fade>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              {/* Third grid portion */}
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    borderLeft: "1px solid rgb(31,31,34)",
                    pl: { md: 4.5, xs: 0 },
                  }}
                >
                  <Zoom cascade>
                    <Link
                      activeClass="active"
                      to=""
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Inter",
                          fontSize: {
                            md: "2.2rem",
                            sm: "1.3rem",
                            xs: "1.7rem",
                          },

                          lineHeight: "26px",
                          color: "white",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          alignItems: "center",
                          cursor: "pointer",
                          pt: { md: 9, xs: 4 },
                        }}
                      >
                        Metavault DAO
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "hsla(0,0%,100%,.7)",

                          fontWeight: 400,
                          display: "flex",
                          justifyContent: {
                            md: "start",
                            sm: "center",
                            xs: "center",
                          },
                          alignItems: "center",
                          mt: { md: 1, xs: 0 },
                        }}
                      >
                        you are here
                      </Typography>
                    </Link>
                  </Zoom>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    borderLeft: "1px solid rgb(31,31,34)",
                    pl: { md: 4.5, xs: 0 },
                  }}
                >
                  <Zoom cascade>
                    <Link
                      activeClass="active"
                      to=""
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Inter",
                          fontSize: {
                            md: "2.2rem",
                            sm: "1.3rem",
                            xs: "1.7rem",
                          },
                          lineHeight: "26px",
                          color: "white",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },
                          alignItems: "center",
                          cursor: "pointer",
                          pt: { md: 9, xs: 2.5 },
                        }}
                      >
                        Metavault Trade
                      </Typography>
                    </Link>
                  </Zoom>
                </Box>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    borderLeft: "1px solid rgb(31,31,34)",
                    borderRight: "1px solid rgb(31,31,34)",
                    pl: { md: 4.5, xs: 0 },
                  }}
                >
                  <Zoom cascade>
                    <Link
                      activeClass="active"
                      to=""
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Inter",
                          fontSize: {
                            md: "2.2rem",
                            sm: "1.3rem",
                            xs: "1.7rem",
                          },
                          lineHeight: "26px",
                          color: "white",
                          fontWeight: 600,
                          display: "flex",
                          justifyContent: { md: "start", xs: "center" },

                          alignItems: "center",
                          cursor: "pointer",
                          pt: { md: 9, xs: 4 },
                        }}
                      >
                        Metavault Options
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          lineHeight: "6px",
                          color: "hsla(0,0%,100%,.7)",
                          fontWeight: 400,
                          display: "flex",
                          justifyContent: {
                            md: "start",
                            sm: "center",
                            xs: "center",
                          },
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        common soon!
                      </Typography>
                    </Link>
                  </Zoom>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const Blog_Data = [
  {
    icon: "/svg/Blog1.svg",
    title: "A Winning Team",
    des: "Metavault has a highly experienced and motivated core team with in-depth market knowledge and a desire to disrupt the DeFi 2.0 space. Our highly skilled developers can analyze, develop, and deploy smart contracts to maximize earnings from open-source technologies.",
  },
  {
    icon: "/svg/Blog2.svg",
    title: "Sustainable Growth",
    des: "Metavault is focused on steady, sustainable growth for our community of investors through multiple income streams, including investments in the Web 3.0 projects and bonding/staking of our MVD token.",
  },
  {
    icon: "/svg/Blog3.svg",
    title: "Bulletproof Tokenomics",
    des: "Metavault's tokenomics have several safeguards and other features in place to avoid dilution of the supply, which leads to devaluation of the token. It is our aim to make the MVD token deflationary over time.",
  },
  {
    icon: "/svg/Blog4.svg",
    title: "Community Governance",
    des: "The Metavault DAO controls the operations of the protocol, deciding on everything from investment opportunities to treasury allocations. Every decision is voted on by the DAO members, who are rewarded for their participation .",
  },
  {
    icon: "/svg/Blog5.svg",
    title: "Fairness and Transparency",
    des: "Every decision taken for the protocol is done so with fairness and full transparency for all community members to verify. There are also mechanisms in place to ensure fair earning distributions to investors, while the open source nature of the proiect allows anyone to see the Metavault code. Our code also undergoes annual audits to ensure it remains secure and fair.",
  },
  {
    icon: "/svg/Blog6.svg",
    title: "Power of the DAO",
    des: "The DAO is the nerve center of the entire Metavault operation, encompassing Metavault.Trade, trading algorithms, a SaaS company and much more. The profits from all these ventures will always flow back to the DAO where they will be distributed fairly. This system is the embodiment of our decentralized ethos, and one that will remain at our core permanently.",
  },
];
export default Blog;
