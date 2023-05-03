import { useTheme } from "@emotion/react";
import { Box, InputBase, Typography } from "@mui/material";
import { shades } from "../../theme";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  const navigate = useNavigate();
  const contact=() => {
    navigate("/contactus");
  }


  return (
    <Box  padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            SHOPIFY
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(15%, 25%, 30%)">
          <Typography variant="h4" fontWeight="italic" mb="15px"
         >
          <IconButton onClick={contact}
            >Contact Us </IconButton>
          </Typography>
          <Typography mb="25px" ml='10px'>
            Road No 7 Azad Nagar Mango Jamshedpur
          </Typography>
          <Typography mb="30px" ml='10px' sx={{ wordWrap: "break-word" }}>
            Email: 1928038@kiit.ac.in
          </Typography>
          <Typography mb="30px" ml='10px'>(+91)9835462585</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
