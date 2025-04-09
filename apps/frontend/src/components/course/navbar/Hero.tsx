import React, { useState} from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Tabs, 
  Tab, 
  Box, 
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import { Link as RouterLink } from 'react-router-dom';

interface HeroProps {
  name: string;
}

export const Hero = ({ name }: HeroProps) => {
  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tabs = [
    { label: "Informacion", href: "#tab-information" },
    { label: "Horarios", href: "#tab-schedule" },
    { label: "Tareas", href: "#tab-tasks" },
    { label: "Mapa", href: "#tab-map" }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {name}
      </Typography>
      <List>
        {tabs.map((item, index) => (
          <ListItem key={index} component="a" href={item.href} disablePadding>
            <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
        <ListItem component="a" href="/subjects" disablePadding>
          <ListItemText primary="Regresar" sx={{ textAlign: 'center', color: theme.palette.primary.main }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {name}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {name}
              </Typography>
              <Tabs 
                value={value} 
                onChange={handleChange} 
                textColor="primary"
                indicatorColor="primary"
                sx={{ 
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    minWidth: 'auto',
                    px: 2
                  }
                }}
              >
                {tabs.map((tab, index) => (
                  <Tab 
                    key={index} 
                    label={tab.label} 
                    href={tab.href} 
                  />
                ))}
              </Tabs>
              <Button 
                color="primary" 
                component="a" 
                href="/subjects"
                sx={{ ml: 2 }}
              >
                Regresar
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};