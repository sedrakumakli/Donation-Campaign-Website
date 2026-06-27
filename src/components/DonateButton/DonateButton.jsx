import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const DonateButton = ({ options, buttonText = 'تبرع الآن', sx = {} }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Button
        variant='contained'
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          borderRadius: '8px',
          px: 4,
          background:
            'linear-gradient(135deg, var(--teal-800), var(--teal-600))',
          color: 'var(--bg)',
          ...sx,
        }}
      >
        {buttonText}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => {
              setAnchorEl(null);
              option.onClick();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DonateButton;
