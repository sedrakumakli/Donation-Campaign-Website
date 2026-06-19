import { Chip } from '@mui/material';

const NewsChip = ({ label, styles }) => {
  return (
    <Chip
      label={label}
      size='small'
      sx={{
        backgroundColor: 'rgba(1, 74, 91, 0.08)',
        color: '#6f8285',
        fontWeight: 600,
        borderRadius: '6px',
        fontSize: '12px',
        height: 22,
        ...styles,
      }}
    />
  );
};

export default NewsChip;
