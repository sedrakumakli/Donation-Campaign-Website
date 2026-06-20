import { Step, StepLabel, Stepper } from '@mui/material';

const steps = ['بيانات التبرع', 'الدفع', 'إثبات الدفع'];

const DonateStepper = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{
        mb: 5,

        '& .MuiStepIcon-root.Mui-active': {
          color: 'var(--main-color)',
        },

        '& .MuiStepIcon-root.Mui-completed': {
          color: 'var(--main-color)',
        },

        '& .MuiStepLabel-label.Mui-active': {
          fontWeight: 700,
        },
      }}
    >
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default DonateStepper;
