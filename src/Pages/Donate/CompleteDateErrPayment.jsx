import { useState } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import DonateStepper from '../../components/Donate/DonateStepper';
import ProofUploadStep from '../../components/Donate/ProofUploadStep';
import PaymentStep from '../../components/Donate/PaymentStep';
import DonationSummary from '../../components/Donate/DonationSummery';
import CustomContainer from '../../components/common/CustomContainer';
import { useMutationHandler } from '../../customHooks/reactQuery/useMutationHandler';
import { useNavigate, useParams } from 'react-router-dom';
import { payDateErr } from '../../services/donate';
import { toast } from 'react-toastify';
import ErrorMessage from '../../components/Messages/ErrorMessage';

const CompleteDateErrPayment = () => {
  const [activeStep, setActiveStep] = useState(1);

  const params = useParams();
  const id = params?.id;

  const [formData, setFormData] = useState({
    file: null,
  });

  const [preview, setPreview] = useState(null);

  const nextStep = () => setActiveStep((prev) => prev + 1);

  const previousStep = () => setActiveStep((prev) => prev - 1);

  const navigate = useNavigate();

  const {
    mutate: donate,
    isPending: isDonating,
    error: donationErr,
  } = useMutationHandler({
    mutationFn: (body) => payDateErr(id, body),

    onSuccess: () => {
      toast.success(
        'تم رفع الوصل الجديد. سيتم مراجعة إثبات الدفع واعتماد التبرع من قبل الإدارة.',
      );
      navigate('/');
    },

    onError: (error) => {
      console.log('Error:', error);
    },
  });
  const handleSubmit = () => {
    const data = new FormData();
    data.append('file', formData.file);
    donate(data);
  };

  return (
    <CustomContainer styles={{ py: 6 }}>
      {donationErr && (
        <ErrorMessage
          styles={{
            position: 'sticky',
            top: '126px',
            width: '100%',
            zIndex: 9999,
          }}
        >
          {donationErr?.message}
        </ErrorMessage>
      )}
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

            {activeStep === 1 && (
              <PaymentStep
                formData={formData}
                onBack={previousStep}
                onNext={nextStep}
              />
            )}

            {activeStep === 2 && (
              <ProofUploadStep
                formData={formData}
                setFormData={setFormData}
                preview={preview}
                setPreview={setPreview}
                onBack={previousStep}
                onSubmit={handleSubmit}
                isSubmitting={isDonating}
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
          <Box
            sx={{
              position: { md: 'sticky' },
              top: { md: '140px' }, // تحت الناف مباشرة
            }}
          >
            <DonationSummary formData={formData} activeStep={activeStep} />
          </Box>
        </Grid>
      </Grid>
      {/* <SuccessDialog
        open={success}
        title='تم إرسال طلب التبرع'
        description='سيتم مراجعة إثبات الدفع واعتماد التبرع من قبل الإدارة.'
        buttonText='حسناً'
        onClose={() => setSuccess(false)}
        onAction={() => setSuccess(false)}
      /> */}
    </CustomContainer>
  );
};

export default CompleteDateErrPayment;
