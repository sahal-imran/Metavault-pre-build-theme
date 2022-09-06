import { React, useState } from "react";
import { Box, Container } from "@mui/system";
import AnchorLink from "@mui/material/Link";
import Image from "next/image";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Link } from "react-scroll";
import Typography from "@mui/material/Typography";
import CustomButton from "../common/Button/CustomButton";
import Hamburger from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FileCopyIcon from "@mui/icons-material/FileCopy";

function Navbar() {
  // States
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: { md: "1.5rem", xs: "1rem" },
          px: { lg: "7.5rem", xs: "unset" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(5px)",
          position: "fixed",
          zIndex:100
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Image src={"/Logo.svg"} width={160} height={60} objectFit="fill" />
          </Box>

          {/* Middle */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  lineHeight: "26px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  mr: 3,
                }}
              >
                Roadmap
                <Image
                  src={"/svg/ArrowUp.svg"}
                  width={30}
                  height={30}
                  objectFit="fill"
                />
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  lineHeight: "26px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  mr: 3,
                }}
              >
                Docs
                <Image
                  src={"/svg/ArrowUp.svg"}
                  width={30}
                  height={30}
                  objectFit="fill"
                />
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  lineHeight: "26px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                Trade
                <Image
                  src={"/svg/ArrowUp.svg"}
                  width={30}
                  height={30}
                  objectFit="fill"
                />
              </Typography>
            </Link>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnchorLink
              sx={{ mr: 3, cursor: "pointer", width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Telegram.svg"}
                width={24}
                height={24}
                objectFit="fill"
              />
            </AnchorLink>
            <AnchorLink
              sx={{ mr: 3, cursor: "pointer", width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Twitter.svg"}
                width={24}
                height={24}
                objectFit="fill"
              />
            </AnchorLink>
            <AnchorLink
              sx={{ cursor: "pointer", mr: 8, width: "24px", height: "24px" }}
            >
              <Image
                src={"/svg/Discord.svg"}
                width={24}
                height={24}
                objectFit="fill"
              />
            </AnchorLink>
            <CustomButton
              paddingX="1rem"
              paddingY="0.8rem"
              text="Enter App"
              fontSize="1rem"
            />
          </Box>

          {/* Humburger */}
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            {isOpen ? null : (
              <CustomButton
                paddingX="1rem"
                paddingY="0rem"
                text="Enter App"
                fontSize="1rem"
                marginRight="0rem"
              />
            )}
            <Hamburger
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              size={20}
            />
          </Box>
        </Container>
        <Drawer
          open={isOpen}
          onClose={() => setOpen(false)}
          direction="left"
          className="Drawer"
          style={{
            width: "100%",
            background: "rgb(2,0,36)",
            padding: "0px 15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "1rem",
              px: "10px",
            }}
          >
            {/* Logo */}
            <Image src={"/Logo.svg"} width={160} height={60} objectFit="fill" />

            <Hamburger
              color="white"
              toggled={isOpen}
              toggle={setOpen}
              size={20}
            />
          </Box>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
            }}
          >
            <RocketLaunchIcon
              sx={{ color: "white", fontSize: "28px", mr: 2 }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Roadmap
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
              />
            </Box>
          </AnchorLink>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
            }}
          >
            <FileCopyIcon sx={{ color: "white", fontSize: "28px", mr: 2 }} />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                mr: 25,
              }}
            >
              Docs
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
              />
            </Box>
          </AnchorLink>
          <AnchorLink
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "none",
              mt: 5,
              borderBottom: "1px solid white ",
              mb: 6,
            }}
          >
            <FileCopyIcon sx={{ color: "white", fontSize: "28px", mr: 2 }} />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                mr: 25,
              }}
            >
              Trade
            </Typography>
            <Box sx={{ position: "absolute", right: "15px" }}>
              <Image
                src={"/svg/ArrowUp.svg"}
                width={38}
                height={38}
                objectFit="fill"
              />
            </Box>
          </AnchorLink>

          <Button
            sx={{
              width: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textDecoration: "none",
              color: "white",
              borderRadius: "1.5rem",
              border: "2px solid white",
            }}
          >
            <Image
              src={"/svg/Trade.svg"}
              width={48}
              height={49}
              objectFit="fill"
            />
            <Typography
              sx={{
                color: "rgb(255, 170, 39)",
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "capitalize",
                fontFamily: "Inter",
                letterSpacing: "1px",
                my: 1.5,
              }}
            >
              Try Metavault.Trade
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 500,
                textTransform: "none",
                textAlign: "left",
              }}
            >
              Trade top cryptocurrencies with up to 30x leverage directly from
              your private wallet.
            </Typography>
          </Button>
          {/* Footer */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position:'absolute',
              bottom:'4rem',
            }}
          >
            <AnchorLink
              sx={{ mr: 8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Telegram.svg"}
                width={30}
                height={30}
                objectFit="fill"
              />
            </AnchorLink>
            <AnchorLink
              sx={{ mr: 8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Twitter.svg"}
                width={30}
                height={30}
                objectFit="fill"
              />
            </AnchorLink>
            <AnchorLink
              sx={{ cursor: "pointer", mr: 8, width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Discord.svg"}
                width={30}
                height={30}
                objectFit="fill"
              />
            </AnchorLink>
            <AnchorLink
              sx={{ mr:3.8, cursor: "pointer", width: "30px", height: "30px" }}
            >
              <Image
                src={"/svg/Github.svg"}
                width={30}
                height={30}
                objectFit="fill"
              />
            </AnchorLink>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
