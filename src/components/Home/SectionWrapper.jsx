// components/common/SectionWrapper.jsx

import { Box, Button, Typography } from '@mui/material';
import CustomContainer from '../common/CustomContainer';

const SectionWrapper = ({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
  styles = {},
  buttonProps = {},
}) => {
  return (
    <CustomContainer styles={{ my: 10, ...styles }}>
      {(title || buttonText) && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
            mb: 5,
          }}
        >
          <Box>
            {title && (
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                }}
              >
                {title}
              </Typography>
            )}

            {description && (
              <Typography
                sx={{
                  mt: 1,
                  color: 'var(--desc-color)',
                  maxWidth: 600,
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

          {buttonText && (
            <Button
              variant='outlined'
              onClick={onButtonClick}
              sx={{
                color: 'var(--main-color)',
                borderColor: 'var(--main-color)',
                borderRadius: 2,
                py: 1,
                transition: '0.5s',
                '&:hover': {
                  backgroundColor: 'var(--main-color)',
                  color: 'white',
                },
              }}
              {...buttonProps}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      )}

      {children}
    </CustomContainer>
  );
};

export default SectionWrapper;
