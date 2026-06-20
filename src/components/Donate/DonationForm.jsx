import { Box, Button, Chip, MenuItem, Stack, Typography } from '@mui/material';
import Textarea from '../common/Textarea';
import CustomInput from '../common/CustomInput';

const currencies = [
  { label: 'الليرة السورية', value: 'SYP' },
  { label: 'الدولار الأمريكي', value: 'USD' },
  { label: 'اليورو', value: 'EUR' },
];

const getSuggestedAmounts = (currency) => {
  switch (currency) {
    case 'USD':
      return [5, 10, 25, 50, 100];

    case 'EUR':
      return [5, 10, 20, 50, 100];

    case 'SYP':
    default:
      return [5000, 10000, 25000, 50000, 100000];
  }
};

const DonationForm = ({
  amount,
  notes,
  setAmount,
  setNotes,
  currency = 'SYP',
  setCurrency,
  onNext,
  disabledBtnStyles,
}) => {
  const suggestedAmounts = getSuggestedAmounts(currency);
  return (
    <>
      {/* TITLE */}
      <Typography variant='h5' sx={{ fontWeight: 700, mb: 4 }}>
        بيانات التبرع
      </Typography>

      {/* 🔥 CURRENCY SELECT */}
      <CustomInput
        inputType='select'
        label='العملة'
        value={currency}
        setValue={setCurrency}
        styles={{ mb: 3 }}
      >
        {currencies.map((cur) => (
          <MenuItem key={cur.value} value={cur.value}>
            {cur.label}
          </MenuItem>
        ))}
      </CustomInput>

      {/* SUB TITLE */}
      <Typography sx={{ mb: 2, color: 'var(--secondary-color)' }}>
        اختر مبلغاً جاهزاً أو أدخل مبلغاً مخصصاً
      </Typography>

      {/* CHIPS */}
      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {suggestedAmounts.map((value) => {
          const isSelected = Number(amount) === value;

          return (
            <Chip
              key={value}
              label={`${value.toLocaleString()} ${currency}`}
              clickable
              onClick={() => setAmount(value)}
              sx={{
                cursor: 'pointer',
                fontWeight: 600,
                backgroundColor: isSelected ? 'var(--main-color)' : '#f3f4f6',
                color: isSelected ? '#fff' : '#374151',
                border: isSelected
                  ? '1px solid var(--main-color)'
                  : '1px solid #e5e7eb',
                transition: '0.2s',
                '&:hover': {
                  backgroundColor: isSelected ? 'var(--main-color)' : '#e5e7eb',
                },
              }}
            />
          );
        })}
      </Stack>

      {/* INPUT */}
      <CustomInput
        inputType='input'
        placeholder='مبلغ التبرع'
        value={amount}
        setValue={(e) => {
          const value = e.target.value;

          if (/^\d*$/.test(value)) {
            setAmount(value);
          }
        }}
        isNestedState={true}
        styles={{ mb: 3 }}
      />

      {/* TEXTAREA */}
      <Textarea
        label='ملاحظات (اختياري)'
        value={notes}
        setValue={setNotes}
        inputType='textarea'
      />

      {/* BUTTON */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant='contained'
          onClick={onNext}
          disabled={!amount}
          sx={{
            borderRadius: 1,
            backgroundColor: 'var(--main-color)',
            '&.Mui-disabled': disabledBtnStyles,
            '&:hover': {
              opacity: 0.9,
              transform: 'translateY(-1px)',
              transition: '0.2s',
            },
          }}
        >
          متابعة الدفع
        </Button>
      </Box>
    </>
  );
};

export default DonationForm;
