import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Buttonoutline from "./ButtonOutline/Buttonoutline";
import Stack from "@mui/material/Stack";
import Banner1 from "../../assets/images/banner/banner1.png";
import ImageBanner from "./ImageBanner";
import { gridSpacing } from "store/constant";
export default function BannerAdmin() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid
      
        sx={{
          background: "linear-gradient(90deg, #1F3D8B 39.83%, #1F3D8B 83.07%)",
          borderRadius: "15px",
          display: "flex",
        }}
       
      >
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: { xs: "16px", sm: "16px", md: "20px!important" },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              color: "#FFFFFF",
            }}
          >
            Passport of Blockchain
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              letterSpacing: "0.01em",
              color: "#FFFFFF",
              opacity: 0.6,
            }}
          >
            TSS phát hành NFT Passport of Blockchain xác nhận thông tin cho
            những dự án, đơn vị/tổ chức đầu tư blockchain dựa trên những thông
            tin đã được đăng ký với TSS.
          </Typography>
          <Stack spacing={2} direction="row" sx={{mt:2}}>
            <Buttonoutline
              variant="contained"
              color="#1F3D8B"
              title="Tìm hiểu thêm"
              bg="white"
            ></Buttonoutline>
            <Buttonoutline
              variant="outlined"
              color="#fff"
              title="Giới thiệu"
              bg=""
              border="#fff"
            ></Buttonoutline>
          </Stack>
        </Grid>
        <Grid
          item
          pt={3}
          xs={6}
          sm={6}
          sx={{ position: "relative", top: "-25px", right: "10px",pt:0 }}
        >
          <ImageBanner src={Banner1} alt="computer"></ImageBanner>
        </Grid>
      </Grid>
    </Box>
  );
}
