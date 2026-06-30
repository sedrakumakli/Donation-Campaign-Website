const disabledBtnStyles = {
  opacity: 0.6,
  cursor: 'not-allowed !important',
  backgroundColor: '#7aa6af !important',
  color: '#f5f7f8 !important',
  boxShadow: 'none',
  transform: 'none',
};
const btnHoverStyles = {
  opacity: 0.9,
  transform: 'translateY(-1px)',
  transition: '0.2s',
};
export const donateBtnStyles = {
  borderRadius: 2,
  backgroundColor: 'var(--main-color)',
  '&.Mui-disabled': disabledBtnStyles,
  '&:hover': btnHoverStyles,
};
export const backBtnStyles = {
  borderRadius: '8px',
  padding: '8px 24px',
  border: 'none',
  color: '#8c9ea0',
  '&:hover': btnHoverStyles,
};
