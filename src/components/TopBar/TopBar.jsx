import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, flex } from '@mui/system';
import Stack from '@mui/material/Stack';
import './TopBar.css';

function TopBar() {
  return (
    <div className='top-bar'>
      <Container
        maxWidth='xl'
        sx={{
          py: 1,
          px: { xs: 2, md: 6, lg: 10 },
        }}
        className='container'
      >
        <div className='right'>
          <p> ساهم معنا</p>
        </div>
        <div className='left'>
          <div className='phone'>
            <p>+963 994153570</p>
            <PhoneIcon fontSize='small' />
          </div>
          <div className='email'>
            <p>uper@gmail.com </p>
            <EmailIcon fontSize='small' />
          </div>
        </div>
      </Container>
    </div>
    //       <Box
    //   sx={{
    //     bgcolor: "#8C9EA0",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     py: 1,
    //   }}
    // >
    //   <Container>
    //     <Stack
    //       direction="row"
    //       justifyContent="space-between"
    //       alignItems="center"
    //       sx={{color:"#FFFFFF"}}
    //       spacing={4}
    //     >
    //       {/* اليمين */}
    //       <Typography variant="body2">
    //         مرحباً بكم في منصة التبرعات
    //       </Typography>

    //       {/* اليسار */}
    //       <Stack direction="row" spacing={3} sx={{color:"#FFFFFF"}}>
    //         <Stack direction="row" spacing={1} alignItems="center">
    //           <PhoneIcon fontSize="small" />
    //           <Typography variant="body2">
    //             +970 123 456 789
    //           </Typography>
    //         </Stack>

    //         <Stack direction="row" spacing={1} alignItems="center">
    //           <EmailIcon fontSize="small" />
    //           <Typography variant="body2">
    //             info@example.com
    //           </Typography>
    //         </Stack>
    //       </Stack>
    //     </Stack>
    //   </Container>
    // </Box>
  );
}

export default TopBar;
