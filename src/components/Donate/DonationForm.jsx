import { Box, Button, Chip, MenuItem, Stack, Typography } from '@mui/material';
import Textarea from '../common/Textarea';
import CustomInput from '../common/CustomInput';
import { donateBtnStyles } from '../../utils/styles';
import { getCurrency } from '../../utils/methods';

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

const DonationForm = ({ formData, setFormData, onNext }) => {
  const suggestedAmounts = getSuggestedAmounts(
    formData?.currency_type || 'SYP',
  );
  return (
    <>
      {/* TITLE */}
      <Typography variant='h5' sx={{ fontWeight: 700, mb: 4 }}>
        بيانات التبرع
      </Typography>

      <Box sx={{ height: '417px', overflowY: 'auto' }}>
        {/* 🔥 CURRENCY SELECT */}
        <CustomInput
          inputType='select'
          label='العملة'
          value={formData?.currency_type}
          setValue={(e) =>
            setFormData((prev) => ({ ...prev, currency_type: e.target.value }))
          }
          styles={{ mb: 3 }}
          isNestedState={true}
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
        <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
          {suggestedAmounts.map((value) => {
            const isSelected = Number(formData?.contribution_amount) === value;

            return (
              <Chip
                key={value}
                label={`${value.toLocaleString()} ${getCurrency(formData?.currency_type)}`}
                clickable
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contribution_amount: value,
                  }))
                }
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
                    backgroundColor: isSelected
                      ? 'var(--main-color)'
                      : '#e5e7eb',
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
          value={formData?.contribution_amount}
          setValue={(e) => {
            const value = e.target.value;

            if (/^\d*$/.test(value)) {
              setFormData((prev) => ({
                ...prev,
                contribution_amount: value,
              }));
            }
          }}
          isNestedState={true}
          styles={{ mb: 3 }}
          isNestedState={true}
        />

        {/* TEXTAREA */}
        <Textarea
          label='ملاحظات (اختياري)'
          value={formData?.contribution_details}
          setValue={(e) =>
            setFormData((prev) => ({
              ...prev,
              contribution_details: e.target.value,
            }))
          }
          inputType='textarea'
          isNestedState={true}
        />
      </Box>

      {/* BUTTON */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant='contained'
          onClick={onNext}
          disabled={!formData?.contribution_amount}
          sx={donateBtnStyles}
        >
          متابعة الدفع
        </Button>
      </Box>
    </>
  );
};

export default DonationForm;
