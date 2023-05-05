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
        <Box width="clamp(50%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Shopify
          </Typography>
          <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ad, himenaeos nunc mollis lectus at ac sociis 
          vehicula eu, cursus bibendum congue ridiculus conubia rutrum netus. Dapibus mi rutrum quisque 
          curabitur ligula nulla varius lacus vestibulum, litora primis parturient molestie netus velit
           morbi placerat. Tempus nullam praesent primis curae pulvinar tincidunt per habitasse blandit 
           felis sed hac, convallis dictum congue magna ad volutpat leo ac vehicula varius ante.
          </div>
        </Box>

       

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px"
    
            sx={{ textDecoration: 'none' }} onClick={contact}>
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
