import React, { Children } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import DrawerMenu from '../components/DrawerMenu'
import Header from '../components/Header'

function Layout({children},props) {
    
    const drawerWidth = 240;
    const navItems = ['Usuarios', 'Productos', 'Flow'];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header items={navItems} handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav">
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
                <DrawerMenu items={navItems} handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, width:'80vh', minWidth: '80vh' }}>
        <Toolbar />
        {/* ____________________________________________________________________________________________________________________________ */}
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
