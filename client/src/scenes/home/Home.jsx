import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import AppHeader from "../global/AppHeader";
import Category from "./Category/Category";
import Products from "../../Products/Products"; 
import { Context } from "../../hooks/context";
import { fetchDataFromApi } from "../../hooks/api";
import React, { useEffect, useContext } from "react";
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import "./scss/Home.scss"

const Home = () => {

const { products, setProducts, categories, setCategories } =
useContext(Context);
useEffect(() => {
  getProducts();
  getCategories();
}, []);

const getProducts = () => {
  fetchDataFromApi("/api/items?populate=*").then((res) => {
      setProducts(res);
  });
};
const getCategories = () => {
  fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
  });
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <div className="home">

      <AppHeader />
      <MainCarousel />
      <Box sx={{ width: '100%' }}>
      <Stack
      spacing={1}
      >
              <Item>
                      <Typography variant="h2"  textAlign="center" marginTop={2}>
                       Top <b>Categories</b>
                      </Typography>
              </Item>
              <Item>   
              <div className="main-content">
                <div className="layout">   
                      <Category categories={categories} />
                </div>
              </div>
              </Item>
        </Stack>
        </Box>            
                      <ShoppingList />
                      <Subscribe />  
    </div>
  );
}

export default Home;
