import { Box, Container, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const breadcrumbItems = [{ label: 'الرئيسية', path: '/' }];

const BreadCrumb = ({ dynamicItems = [] }) => {
  const items = [...breadcrumbItems, ...dynamicItems];

  return (
    <Box
      sx={{
        backgroundColor: '#EEF2F3',
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          height: 72,
          px: { xs: 2, md: 6, lg: 10 },
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              {/* ICON + LINK */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {item.path === '/' && (
                  <HomeIcon sx={{ fontSize: 18, color: '#6B7280' }} />
                )}

                <Typography
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: isLast ? 600 : 400,
                    color: isLast ? '#374151' : '#6B7280',
                    transition: '0.3s',
                    '&:hover': {
                      color: '#374151',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>

              {/* ARROW */}
              {!isLast && (
                <IoIosArrowBack style={{ fontSize: 18, color: '#6B7280' }} />
              )}
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default BreadCrumb;
