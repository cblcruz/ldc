import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Typography, 
  Menu, 
  MenuItem,
  Fade 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Add this type definition at the top of your component
type ServiceCategories = 'Cribl' | 'Splunk';

const Navbar = () => {
  // State for managing dropdown menus
  const [capabilitiesAnchor, setCapabilitiesAnchor] = useState<null | HTMLElement>(null);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  // Menu items data
  const capabilitiesItems = [
    { title: 'Log Management & Analytics', path: '/capabilities/log-management' },
    { title: 'Observability Solutions', path: '/capabilities/observability-solutions' },
    { title: 'Cybersecurity Insights', path: '/capabilities/cybersecurity-insights' }
  ];

  // Update servicesItems to use the type
  const servicesItems: Record<ServiceCategories, Array<{ title: string; path: string }>> = {
    Cribl: [
      { title: 'Consulting', path: '/services/cribl/consulting' },
      { title: 'Enablement', path: '/services/cribl/enablement' },
      { title: 'Activations', path: '/services/cribl/activations' },
      { title: 'Pack Development', path: '/services/cribl/pack-development' }
    ],
    Splunk: [
      { title: 'Consulting', path: '/services/splunk/consulting' },
      { title: 'Enablement', path: '/services/splunk/enablement' },
      { title: 'Activations', path: '/services/splunk/activations' },
      { title: 'Splunk App Development', path: '/services/splunk/app-development' }
    ]
  };

  // Shared styles for menu items
  const menuItemStyle = {
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-4px',
      left: '50%',
      background: 'linear-gradient(90deg, #646cff 0%, #42b883 100%)',
      transition: 'all 0.3s ease-in-out',
      transform: 'translateX(-50%)',
    },
    '&:hover:after': {
      width: '100%',
    }
  };

  // Handle menu switches
  const handleMenuEnter = (
    event: React.MouseEvent<HTMLElement>,
    menu: 'capabilities' | 'services'
  ) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    
    if (menu === 'capabilities') {
      setServicesAnchor(null);
      setCapabilitiesAnchor(event.currentTarget);
    } else if (menu === 'services') {
      setCapabilitiesAnchor(null);
      setServicesAnchor(event.currentTarget);
    }
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setCapabilitiesAnchor(null);
      setServicesAnchor(null);
    }, 1000); // Increased to 1 second
    setCloseTimeout(timeout);
  };

  const handleMenuEnterAgain = () => {
    // Clear the close timeout if user returns to the menu
    if (closeTimeout) clearTimeout(closeTimeout);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(18, 18, 18, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        borderBottom: 'none',
        zIndex: 9999
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 24px',
          minHeight: '60px',
        }}
      >
        {/* Left: Logo */}
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            fontSize: '32px',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #646cff 30%, #42b883 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            textShadow: '0 0 20px rgba(100, 108, 255, 0.3)',
          }}
        >
          LDC Observability
        </Typography>

        {/* Right side: Menu + Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Box sx={{ display: 'flex', gap: '40px' }}>
            {/* Capabilities */}
            <Typography 
              sx={menuItemStyle}
              onMouseEnter={(e) => handleMenuEnter(e, 'capabilities')}
            >
              Capabilities
            </Typography>
            <Menu
              anchorEl={capabilitiesAnchor}
              open={Boolean(capabilitiesAnchor)}
              onClose={() => handleMenuLeave()}
              TransitionComponent={Fade}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(10, 10, 10, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  mt: 1
                }
              }}
              MenuListProps={{
                onMouseLeave: () => handleMenuLeave()
              }}
            >
              {capabilitiesItems.map((item) => (
                <MenuItem 
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={() => handleMenuLeave()}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>

            {/* Services */}
            <Typography 
              sx={menuItemStyle}
              onMouseEnter={(e) => handleMenuEnter(e, 'services')}
            >
              Services
            </Typography>
            <Menu
              anchorEl={servicesAnchor}
              open={Boolean(servicesAnchor)}
              onClose={() => handleMenuLeave()}
              TransitionComponent={Fade}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(10, 10, 10, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  mt: 1,
                  minWidth: '300px'
                }
              }}
              MenuListProps={{
                onMouseLeave: () => {
                  setServicesAnchor(null);
                  setCapabilitiesAnchor(null);
                },
                onMouseEnter: handleMenuEnterAgain,
                dense: true
              }}
            >
              {Object.entries(servicesItems).map(([category, items]) => (
                <Box key={category}>
                  <MenuItem
                    onClick={() => handleMenuLeave()}
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {category}
                    <span style={{ marginLeft: 'auto', fontSize: '0.8em' }}>›</span>
                  </MenuItem>
                  {items.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      onClick={() => handleMenuLeave()}
                      sx={{
                        color: 'white',
                        pl: 4,
                        fontSize: '0.95em',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Box>
              ))}
            </Menu>

            {/* Blog */}
            <Typography sx={menuItemStyle}>
              Blog
            </Typography>

            {/* About Us */}
            <Typography sx={menuItemStyle}>
              About Us
            </Typography>

            {/* Contact */}
            <Typography sx={menuItemStyle}>
              Contact
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'rgba(255, 255, 255, 0.7)',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              borderRadius: '8px',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#7B3FE4',
                color: '#FFFFFF',
                transform: 'translateY(-2px)',
              },
              '&:active': {
                backgroundColor: '#6032B2',
                color: '#FFFFFF',
              }
            }}
          >
            GET STARTED
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;