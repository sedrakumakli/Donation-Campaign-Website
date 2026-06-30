import { useState } from 'react';
import { Button, Menu, MenuItem, Divider } from '@mui/material';
import { Banknote, Gift } from 'lucide-react';

const icons = {
  'تبرع مادي': <Banknote size={22} />,
  'تبرع عيني': <Gift size={22} />,
};

const DonateButton = ({ options, buttonText = 'تبرع الآن', sx = {} }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonWidth, setButtonWidth] = useState(200);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant='contained'
        onClick={(e) => {
          setButtonWidth(e.currentTarget.offsetWidth);
          setAnchorEl(e.currentTarget);
        }}
        sx={{
          borderRadius: '8px',
          px: 4,
          background: 'linear-gradient(135deg, var(--teal-800), var(--teal-600))',
          color: 'var(--bg)',
          ...sx,
        }}
      >
        {buttonText}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 0.75,
              width: buttonWidth,
              borderRadius: '10px',
              border: '1px solid rgba(1, 74, 91, 0.12)',
              boxShadow: '0 6px 24px rgba(1, 74, 91, 0.13)',
              overflow: 'hidden',
              '& .MuiList-root': { p: 0.5 },
            },
          },
        }}
      >
        {options.map((option, index) => (
          <div key={option.label}>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                option.onClick();
              }}
              sx={{
                borderRadius: '7px',
                py: 0.9,
                px: 1.5,
                gap: 1.2,
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 600,
                fontSize: '13px',
                color: '#014a5b',
                display: 'flex',
                alignItems: 'center',
                minHeight: 'unset',
                transition: 'background 0.15s ease',
                '&:hover': {
                  bgcolor: 'rgba(1, 74, 91, 0.07)',
                },
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 26,
                  height: 26,
                  borderRadius: '6px',
                  background: 'rgba(1, 74, 91, 0.08)',
                  color: 'var(--gold)',
                  flexShrink: 0,
                }}
              >
                {icons[option.label] ?? <Gift size={15} />}
              </span>
              {option.label}
            </MenuItem>

            {index < options.length - 1 && (
              <Divider sx={{ my: 0.4, borderColor: 'rgba(1, 74, 91, 0.15)', borderBottomWidth: '1px' }} />
            )}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default DonateButton;