import { useState } from 'react';

import { Grid, Paper } from '@mui/material';
import DonationSuccess from '../../components/Donate/DonationSuccess';
import DonateStepper from '../../components/Donate/DonateStepper';
import DonationForm from '../../components/Donate/DonationForm';
import ProofUploadStep from '../../components/Donate/ProofUploadStep';
import PaymentStep from '../../components/Donate/PaymentStep';
import DonationSummary from '../../components/Donate/DonationSummery';
import CustomContainer from '../../components/common/CustomContainer';

const disabledBtnStyles = {
  opacity: 0.6,
  cursor: 'not-allowed !important',
  backgroundColor: '#7aa6af !important',
  color: '#f5f7f8 !important',
  boxShadow: 'none',
  transform: 'none',
};

const DonatePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [amount, setAmount] = useState('');

  const [notes, setNotes] = useState('');

  const [proofImage, setProofImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [success, setSuccess] = useState(false);

  const nextStep = () => setActiveStep((prev) => prev + 1);

  const previousStep = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log({
      amount,
      notes,
      proofImage,
    });

    setSuccess(true);
  };

  if (success) {
    return <DonationSuccess onHome={() => window.location.reload()} />;
  }

  return (
    <CustomContainer styles={{ py: 6 }}>
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
            }}
          >
            <DonateStepper activeStep={activeStep} />

            {activeStep === 0 && (
              <DonationForm
                amount={amount}
                notes={notes}
                setAmount={setAmount}
                setNotes={setNotes}
                onNext={nextStep}
                disabledBtnStyles={disabledBtnStyles}
              />
            )}

            {activeStep === 1 && (
              <PaymentStep
                amount={amount}
                onBack={previousStep}
                onNext={nextStep}
              />
            )}

            {activeStep === 2 && (
              <ProofUploadStep
                proofImage={proofImage}
                setProofImage={setProofImage}
                preview={preview}
                setPreview={setPreview}
                onBack={previousStep}
                onSubmit={handleSubmit}
              />
            )}
          </Paper>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <DonationSummary amount={amount} activeStep={activeStep} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default DonatePage;
