import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#071a45", color: "#ffff" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Typography>XYZ Industries</Typography>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Typography>Quick Links</Typography>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Typography>Customer Support</Typography>{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Typography>Subscribe Us</Typography>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
