import React from 'react';
import HeroImage from "../../../../public/Home-HeroIcons/HomeHeroPic.png"
import CardImage from "../../../../public/Home-HeroIcons/image 13 (1).png"
import CardImage1 from "../../../../public/Home-HeroIcons/image 14 (1).png"
import Star from "../../../../public/Home-HeroIcons/fi-sr-star.svg"
import EmptyStar from "../../../../public/Home-HeroIcons/fi-br-star.svg"
import Image from "next/image";
import { Grid, CardContent, Button, Typography, Box, Stack } from '@mui/material'; 

const HomeHero = () => {
  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <CardContent>
          <Typography variant="h1">
            Discover and <br />
            Find Your Own <br /> Fashion!
          </Typography>
          <Typography variant="h6">
            Explore our curated collection of stylish <br /> clothing and
            accessories tailored to your <br />
            unique taste.
          </Typography>
          <Button variant="contained">Explore Now</Button>
        </CardContent>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <CardContent>
          
        <Box sx={{ bgcolor: "#39DB4A", borderRadius: "50%", width: "500px", height: "500px", margin: "0 auto" }}>
            <Image src={HeroImage} width={500} height={500} alt="" />
          </Box>
        <Box sx={{bgcolor:"red",display:"flex" ,flexDirection:"row",justifySelf:"center",justifyContent:"space-between",marginBottom:"25px",marginTop:"-55px",marginLeft:"-15px  "}}>

        <Box sx={{display:"flex",flexDirection:"row",  bgcolor: "lightblue", p: 2, borderRadius: "25px" ,margin:"25px 10px 25px 10px"}}>
           
        <Box>  
              <Image src={CardImage1} width={120} height={110} alt="" />
              </Box>


            <Box sx={{marginLeft:"25px",marginRight:"10px",width:"125px"}}>
            <Typography sx={{marginBottom:"10px",fontSize:"19px",fontWeight:"850px"}} >Spicy noodles</Typography>
            <Stack direction="row" justifyContent="space between"  sx={{marginBottom:"10px"}}>
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={EmptyStar} width={16} height={16} alt="" />
            </Stack>
            <Typography variant="h6"> <span style={{color:"red",fontSize:"16px"}}>$</span> 18.00</Typography>
            </Box>
          </Box>

         <Box sx={{display:"flex",flexDirection:"row",  bgcolor: "pink", p: 2, borderRadius: "25px" ,margin:"25px 0px 25px 10px"}}>
           
        <Box>  
              <Image src={CardImage1} width={120} height={110} alt="" />
              </Box>


            <Box sx={{marginLeft:"25px",marginRight:"19px",width:"145px"}}>
            <Typography sx={{marginBottom:"10px",fontSize:"19px",fontWeight:"850px",paddingRight:"-10px"}} >
            Vegetarian salad</Typography>
            <Stack direction="row" justifyContent="space between"  sx={{marginBottom:"10px"}}>
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={Star} width={16} height={16} alt="" />
            <Image src={EmptyStar} width={16} height={16} alt="" />
            </Stack>
            <Typography variant="h6"> <span style={{color:"red",fontSize:"16px"}}>$</span> 18.00</Typography>
            </Box>
          </Box>
        </Box>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default HomeHero;
