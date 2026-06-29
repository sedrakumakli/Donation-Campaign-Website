import { useEffect, useState } from 'react';

import { Grid, Paper } from '@mui/material';
import DonateStepper from '../../components/Donate/DonateStepper';
import DonationForm from '../../components/Donate/DonationForm';
import ProofUploadStep from '../../components/Donate/ProofUploadStep';
import PaymentStep from '../../components/Donate/PaymentStep';
import DonationSummary from '../../components/Donate/DonationSummery';
import CustomContainer from '../../components/common/CustomContainer';
import { useMutationHandler } from '../../customHooks/reactQuery/useMutationHandler';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { donateDirectly } from '../../services/donate';
import { toast } from 'react-toastify';
import ErrorMessage from '../../components/Messages/ErrorMessage';

const DonatePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [searchParams] = useSearchParams();
  const id = searchParams?.get('id');

  const [formData, setFormData] = useState({
    contribution_amount: '',
    currency_type: 'SYP',
    contribution_details: '',
    campaign_uuid: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const [success, setSuccess] = useState(false);

  const nextStep = () => setActiveStep((prev) => prev + 1);

  const previousStep = () => setActiveStep((prev) => prev - 1);

  const navigate = useNavigate();
  const {
    mutate: donate,
    isPending: isDonating,
    error: donationErr,
  } = useMutationHandler({
    mutationFn: (body) => donateDirectly(body),

    onSuccess: () => {
      setSuccess(true); // أو فتح modal النجاح
      toast.success(
        'تم إرسال طلب التبرع. سيتم مراجعة إثبات الدفع واعتماد التبرع من قبل الإدارة.',
      );
      navigate('/');
    },

    onError: (error) => {
      console.log('Error:', error);
    },
  });
  const handleSubmit = () => {
    const data = new FormData();
    data.append('contribution_amount', formData.contribution_amount);
    data.append('contribution_details', formData.contribution_details);
    data.append('currency_type', formData.currency_type);
    data.append('campaign_uuid', formData.campaign_uuid);
    data.append('image', formData.image);
    donate(data);
  };

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({ ...prev, campaign_uuid: id }));
    }
  }, [id]);

  return (
    <CustomContainer styles={{ py: 6 }}>
      {donationErr && <ErrorMessage>{donationErr?.message}</ErrorMessage>}
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
                formData={formData}
                setFormData={setFormData}
                onNext={nextStep}
              />
            )}

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
          <DonationSummary formData={formData} activeStep={activeStep} />
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

export default DonatePage;
