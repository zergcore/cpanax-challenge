import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = ({items, handleDrawerToggle}) => {

	return (
		<>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        CPANAX
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {items.map((item, i) => (
                            <Link 
                                to={'/'+item.toLocaleLowerCase()} 
                                key={`${item}${i}`} 
                                style={{textDecoration:"none"}}
                            >
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
	);
}

export default Header;