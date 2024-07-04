import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ImageMasonry() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const promises = Array.from({ length: 10 }).map(() =>
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        );
        const responses = await Promise.all(promises);
        const drinks = responses.map(response => response.data.drinks[0]);
        setCocktails(drinks);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <div><h1>Random Cocktail</h1></div>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {cocktails.map((cocktail, index) => (
          <div key={index}>
            <Label>{cocktail.strDrink}</Label>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
            <Item>
              <Typography variant="body2">{cocktail.strInstructions}</Typography>
              <Typography variant="body2">Category: {cocktail.strCategory}</Typography>
              <Typography variant="body2">Alcoholic: {cocktail.strAlcoholic}</Typography>
              <Typography variant="body2">Glass: {cocktail.strGlass}</Typography>
            </Item>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default ImageMasonry;
