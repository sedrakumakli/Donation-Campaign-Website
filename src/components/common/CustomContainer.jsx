import { Container } from '@mui/material';

const CustomContainer = ({ children, styles }) => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        px: { xs: 2, md: 6, lg: 10 },
        ...styles,
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
