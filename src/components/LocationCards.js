import React from 'react'
import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { shopping1 as cardLocation } from 'data/mock-data';
import CarouselCard from './CarouselCard';

const LocationCards = () => {
    const [cards]=React.useState(cardLocation);
    if(!cards.length){
        return null;
    }
    return(
        <Box sx={{ mx:2}}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            {
             cards.map((kind) =>{
                return(
                    <Grid key={kind.id} xs={12} sm={4} md={4} lg={3}>
                       <CarouselCard kind={kind}/>
                    </Grid>
                );
             })   
            }
          </Grid>

        </Box>

    )
};
export default LocationCards;