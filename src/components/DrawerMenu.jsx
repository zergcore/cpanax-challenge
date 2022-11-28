import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DrawerMenu({items, handleDrawerToggle}) {
    
    return (
        
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    CPANAX
                </Typography>
                <Divider />
                <List>
                    {items.map((item, i) => (
                        <Link 
                            to={'/'+item.toLocaleLowerCase()} 
                            key={`${item}${i}`} 
                            style={{textDecoration:"none"}}
                        >
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        
    )
}