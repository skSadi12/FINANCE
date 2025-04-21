import React, { useState } from 'react';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Navbarx() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const menuItems = ['Contacts'];

    return (
        <div className='bg-[#1A1E1C]'>
            <AppBar className='NavBar' position='static' sx={{ backgroundColor: '#1A1E1C', color: 'white' , maxWidth: "1400px", marginX: "auto" ,backgroundImage: "url(bg.svg) "}}>
                <Toolbar>
                    {isMobile ? (
                        <IconButton color='inherit' onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                            <Typography sx={{ flexGrow: 1 }}>
                                <img src="logo.png" alt="Logo" className='w-[19%]'/>
                            </Typography>
                            {menuItems.map((item) => (
                                <Button color='inherit' sx={{border: "2px solid #772AB3",color : "#772AB3" , borderRadius:"25px"}} key={item}>{item}</Button>
                            ))}
                            
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <List sx={{ backgroundColor: '#1A1E1C', color: 'white' ,backgroundImage: "url(bg.svg)"}}>
                    <ListItem>
                    <img src="logo.png" alt="Logo" />
                    </ListItem>
                    {menuItems.map((item) => (
                        <ListItem key={item} onClick={() => setOpen(false)} >
                            <ListItemButton sx={{border: "2px solid #772AB3",borderRadius: "25px"}}>
                                <ListItemText primary={item} sx={{color:"#772AB3"}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => setOpen(false)}>
                        
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Navbarx;
