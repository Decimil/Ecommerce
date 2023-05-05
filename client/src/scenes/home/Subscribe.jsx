import { Box, InputBase, Divider, Typography, IconButton,Button} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState, useEffect} from "react";
import {
  message,
} from "antd";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./scss/Newsletter.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
const Subscribe = () => {
  // const [email, setEmail] = useState("");

  // useEffect(() => {if(localStorage.getItem('email')){
  //   setEmail(true);
    
  // }console.log(email);},[email])


  //   const handleSubscibe = (e) => {
  //     setEmail("");
  //     message.success(`Subscribed`);
  //     if (email) {
  //       console.log('email :>> ', email);
  //     }
  //   };

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_ej1r39p', 'template_dr7exjs', form.current, 'vOXmsT4HqrEzzCDgS')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8004/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            console.log("Email sent")
            message.success(`Subscribed`);
        }
    }
  

  return (

 

//     <div className="newsletter-section">
//     <div className="newsletter-content">
//         <span className="small-text">Newsletter</span>
//         <span className="big-text">
//             Sign up for latest updates and offers
//         </span>
//         <div className="form">
//             <input type="text" placeholder="Email Address" />
//             <button onClick={handleSubscibe}>Subscribe</button>
//         </div>
//         <span className="text">
//             Will be used in accordance with our Privacy Policy
//         </span>
//         <span className="social-icons">
//             <div className="icon">
//                 <FaLinkedinIn size={14} />
//             </div>
//             <div className="icon">
//                 <FaFacebookF size={14} />
//             </div>
//             <div className="icon">
//                 <FaTwitter size={14} />
//             </div>
//             <div className="icon">
//                 <FaInstagram size={14} />
//             </div>
//         </span>
//     </div>
// </div>
    <Box width="80%" margin="80px auto" textAlign="center" >
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive Rs 200 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
        
      >
        {/* <div className="d-flex justify-content-center">
                    <Form className='mt-2 col-lg-6'>
                        <Form.Group >
                            <Form.Control type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />                       
                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Subscribe
                        </Button>
                        </Form.Group>
                    </Form>
        </div> */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px", ":hover": { cursor: "pointer"}}}
          onClick = {sendEmail}>
          Subscribe
        </IconButton>
      </Box>
    </Box>
  );
};

export default Subscribe;
