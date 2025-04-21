import React from 'react'

import {Box, Container,Grid, Typography, Link } from  "@mui/material"

function Footer() {
    const FooterData = [
        {
            Title:"About us",
            links:['Investors ', 'Features', 'Book a demo', 'Security']
        },
        {
            Title:"Product",
            links:['Credits Cards ', 'Gift Cards', 'Savings accounts', 'NFT']
        },
        {
            Title:"Useful Links",
            links:['Free rewards ', 'Documentation', 'Affiliate program']
        },
        {
            Title:"Social",
            links:['Changelog ', 'License', 'Site Maps', 'News']
        }

    ]; 


  return (
    <Box sx={{bgcolor:"#3D3D54/25",marginTop:"150px", color:"#fff", py:6}}>
        <Container maxWidth="lg">
            <Grid  container spacing={4} sx={{display:"flex",justifyContent:"space-between"}}>
                
               <Grid item xs={12} md={3}>
                   <Typography>
                        <img src="/logos.png" alt="" />
                   </Typography>
                   <Typography sx={{maxWidth:"300px",marginTop:"20px"}}>
                   Discover the power of our secure and rewarding credit cards
                   </Typography>
               </Grid> 

                {
                  FooterData.map((section, index)=> (
                       <Grid item xs={6} md={2} key={index}>
                            <Typography>
                                {section.Title}
                            </Typography>
                            {section.links.map((link, linkIndex)=> (
                                <Box key={linkIndex}>
                                    <Link href="#" underline='none' color='inherit ' display="block" sx={{my:1}}>
                                        {link}
                                    </Link>
                                </Box>
                            ))}
                       </Grid> 
                  )) }
            </Grid>
        </Container>
    </Box>
  )
}

export default Footer