import React from "react";
import { Box, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import TextArea from "antd/es/input/TextArea";
import Form from "antd/es/form/Form";
import Typography from '@mui/material/Typography';

const ContactUs = () =>
{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    
      

 return (
    <Box>
        <Stack marginTop={8}>
        <Item>
        <Typography variant="h1" color={"black"}>
        Contact Us
        </Typography>
        </Item>
        <Item>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29417.088147657025!2d86.2043532595632!3d22.83445667806346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3b1f5b396c9%3A0x539badcdb2141d1d!2sDelhi%20Darbar!5e0!3m2!1sen!2sin!4v1682777019183!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                loading="lazy" 
        >
        </iframe>
        </Item>
    <Box>
    <Box>
    <Typography variant="h3" color={"black"} align="center" marginTop={4}>
        Send Us Your Query
        </Typography>
            <div className="create">
            <div className="contact-form">
            <form action="https://formspree.io/f/myyaoypo" method = "POST" className ="contact-inputs">
            
                <input 
                type="text" 
                placeholder="Username" 
                name="Username" 
                autoComplete="off"/>
             
                <input 
                type="email" 
                placeholder="Email" 
                name="Email" 
                autoComplete="off"
                required/>
             
                <textarea 
                name = "Message" 
                cols = '20'
                rows = '8'
                required
                autoComplete="off"
                placeholder="Enter your Message"> 
                </textarea>
              
                <Button 
                variant="contained"
                type="submit"
                sx={{}} 
                endIcon={<SendIcon />}>
                Send
                </Button>
              
                </form>
                </div>
            </div>
           
        </Box>  
 </Box>
</Stack>
</Box> );   
};

export default ContactUs;