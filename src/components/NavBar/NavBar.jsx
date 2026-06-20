import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import DonateButton from '../DonateButton/DonateButton';

const pages = [
  { name: 'الرئيسية', path: '/' },
  { name: 'حولنا', path: '/about' },
  { name: 'الحملات', path: '/campaigns' },
  { name: 'آخر الأخبار', path: '/news' },
  { name: 'تواصل معنا', path: '/contactUs' },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  // const [anchorElDonate, setAnchorElDonate] = React.useState(null);

  // const handleOpenDonateMenu = (event) => {
  //   setAnchorElDonate(event.currentTarget);
  // };

  // const handleCloseDonateMenu = () => {
  //   setAnchorElDonate(null);
  // };

  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: '#fff',
        color: '#000',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        fontSize: '16px',
      }}
      className='nav-bar'
    >
      <Container
        maxWidth='xl'
        sx={{
          py: 0.5,
          px: { xs: 2, md: 6, lg: 10 },
        }}
      >
        <Toolbar disableGutters sx={{ width: '100%' }}>
          {/* LOGO - Desktop */}
          <Typography
            variant='h5'
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 'bold',
            }}
          >
            LOGO
          </Typography>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path}>{page.name}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO - Mobile */}
          <Typography
            variant='h6'
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 'bold',
            }}
          >
            LOGO
          </Typography>

          {/* Links - Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                component={NavLink}
                to={page.path}
                color='inherit'
                sx={{
                  fontSize: '16px',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Donate Button */}
          <DonateButton
            options={[
              {
                label: "تبرع مادي",
                onClick: () => navigate("/campaigns"),
              },
              {
                label: "تبرع عيني",
                onClick: () => navigate("/in-kind-donation"),
              },
            ]}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
