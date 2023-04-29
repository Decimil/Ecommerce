import { useDispatch, useSelector } from "react-redux";
import {
  message,
} from "antd";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { Button, Space } from "antd";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { removeToken } from "../../helper";
import { setToken } from "../../helper";
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';


const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const  [isLogin, setLogin] = useState(false);
  
  useEffect(() => {if(localStorage.getItem('isLogin')){
    setLogin(true);
    
  }console.log(isLogin);},[isLogin])
 
  const handleLogout = () => {
    removeToken();
    localStorage.clear();
    setLogin(false);
    navigate("/", { replace: true });
    window.location.reload(true);
  
  };

  const handleLogin =() => {
    navigate("/signin");
  }

  const handleProfile =() => {
    navigate("/profile");
  }

  const handleProfilenotavailable =() => {
    message.success(`Please Log In`);
  }


  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          ECOMMERCE
        </Box>

        
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}
          onClick={() => 
            isLogin ? handleLogout() : handleLogin()
          }
          >
          {isLogin ? <LogoutIcon /> : <PersonOutline /> }
           
          </IconButton>


          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}
          
            onClick={() => 
            isLogin ? handleProfile() : handleProfilenotavailable()}
          >
            <Person2Icon />
          </IconButton>
        </Box>
      </Box>
    </Box>
    
      );
    };



  

export default AppHeader;
