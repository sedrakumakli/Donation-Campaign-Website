import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import CustomContainer from '../common/CustomContainer';
import { FiSearch } from 'react-icons/fi';
import { LuUserRound } from 'react-icons/lu';
import { Stack } from '@mui/material';
import { MdOutlineNotificationsNone } from 'react-icons/md';

const pages = [
  { name: 'الرئيسية', path: '/' },
  { name: 'حولنا', path: '/about' },
  { name: 'الحملات', path: '/campaigns' },
  { name: 'آخر الأخبار', path: '/news' },
  { name: 'تواصل معنا', path: '/contactUs' },
  {name:'الأسئلة الشائعة' , path:'/FAQSection'}
];

const iconStyles = { color: 'black', fontSize: '22px' };

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
      <CustomContainer
        styles={{
          py: 1,
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
              <NavLink
                key={page.path}
                component={NavLink}
                to={page.path}
                color='inherit'
                className='nav-link'
              >
                {page.name}
              </NavLink>
            ))}
          </Box>

          {/* Donate Button */}
          <Stack spacing={1} direction='row'>
            {/* زر الأيقونة */}
            <IconButton>
              <LuUserRound style={iconStyles} />
            </IconButton>
            <IconButton onClick={() => navigate('/cart')}>
              <MdOutlineNotificationsNone style={iconStyles} />
            </IconButton>
            <IconButton onClick={() => navigate('/shop')}>
              <FiSearch style={iconStyles} />
            </IconButton>
          </Stack>
        </Toolbar>
      </CustomContainer>
    </AppBar>
  );
}

export default NavBar;
