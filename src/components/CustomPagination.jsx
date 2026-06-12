import { Box, Button, Stack } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';

const CustomPagination = ({
  totalPages,
  currentPage,
  goToPage,
  nextPage,
  isBtnDisabled,
}) => {
  return (
    <Stack
      direction='row'
      spacing={3}
      alignItems='center'
      justifyContent='center'
    >
      {/* أرقام الصفحات */}
      {Array.from({ length: totalPages }).map((_, i) => (
        <Button
          key={i}
          onClick={() => goToPage(i)}
          sx={{
            width: 'fit-content',
            borderRadius: 0,
            p: 0,
            minWidth: 'unset',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: i === currentPage ? '#000e0c' : '#8c9ea0',
            borderBottom: i === currentPage ? '2px solid #000e0c' : 'none',
            fontSize: '16px',
            '&:hover': {
              color: '#000e0c',
            },
          }}
        >
          {i + 1}
        </Button>
      ))}

      {/* Next Button */}
      <button
        onClick={nextPage}
        disabled={isBtnDisabled}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          border: 'none',
          background: 'transparent',
          cursor: isBtnDisabled ? 'not-allowed' : 'pointer',
          color: isBtnDisabled ? '#b5b5b5' : '#000e0c',
          fontSize: '16px',
        }}
      >
        <span>التالي</span>

        <IoIosArrowBack
          style={{
            fill: isBtnDisabled ? '#b5b5b5' : '#000e0c',
            marginTop: '4px',
          }}
        />
      </button>
    </Stack>
  );
};

export default CustomPagination;
