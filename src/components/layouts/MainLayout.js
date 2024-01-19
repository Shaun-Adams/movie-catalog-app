import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, ThemeProvider } from '@mui/material';
import TopNavBar from '../TopNavBar';
import Sidebar from '../Sidebar';
import theme from './Theme'; 

const drawerWidth = 240;

const MainLayout = ({ children, onSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopNavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} onSearch={onSearch} />
        <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Sidebar handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 6,
          pt: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },   
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {children}
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
