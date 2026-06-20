import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';

const defaultStyles = {
  width: '100%',

  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#fff',

    // border الافتراضي
    '& fieldset': {
      borderColor: '#D1D5DB',
    },
  },

  // hover (خفيف وآمن)
  '&:hover .MuiOutlinedInput-root fieldset': {
    borderColor: '#9CA3AF',
  },

  // focus
  '& .Mui-focused fieldset': {
    borderColor: '#4F46E5',
    borderWidth: '1.5px',
  },

  // disabled (آمن)
  '& .Mui-disabled': {
    backgroundColor: '#F5F6F8',
  },

  '& input, & textarea': {
    fontFamily: 'Cairo',
    color: '#374151',
    fontSize: '14px',
  },
};

const Textarea = ({
  label,
  placeholder,
  value,
  setValue,
  inputType,
  styles,
  isNestedState,
  errorMsg,
  isRequired = false,
}) => {
  const customStyles = {
    ...defaultStyles,
    ...(styles || {}),
  };
  return (
    <FormControl sx={{ ...customStyles, height: styles?.height ?? '195px' }}>
      <Typography
        sx={{
          mb: 1,
          color: '#374151',
          fontFamily: 'Cairo',
        }}
      >
        {label}
        {isRequired && <span style={{ color: 'var(--error-color)' }}>*</span>}
      </Typography>
      {inputType === 'textarea' ? (
        <TextField
          placeholder={placeholder}
          multiline
          variant='outlined'
          fullWidth
          value={value}
          onChange={(e) =>
            isNestedState ? setValue(e) : setValue(e.target.value)
          }
          error={!!errorMsg}
          sx={{
            height: '100%',
            '& .MuiOutlinedInput-root': {
              height: '100%',
              alignItems: 'flex-start',
            },
            '& textarea': {
              height: '100% !important',
              overflowY: 'auto !important',
            },
          }}
        />
      ) : (
        <TextField
          placeholder={placeholder}
          variant='standard'
          fullWidth
          value={value}
          onChange={(e) =>
            isNestedState ? setValue(e) : setValue(e.target.value)
          }
          error={!!errorMsg}
        />
      )}
      {errorMsg && (
        <FormHelperText
          error={!!errorMsg}
          sx={{ color: '#9AA0A6', marginLeft: '0px' }}
        >
          {errorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Textarea;
