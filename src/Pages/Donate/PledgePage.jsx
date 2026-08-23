import { useEffect, useState } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import CustomContainer from '../../components/common/CustomContainer';
import DonationForm from '../../components/Donate/DonationForm';

import { useMutationHandler } from '../../customHooks/reactQuery/useMutationHandler';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { createPledge, donateDirectly } from '../../services/donate';
import { toast } from 'react-toastify';
import ErrorMessage from '../../components/Messages/ErrorMessage';
import PledgeInfoCard from '../../components/Donate/PledgeInfoCard';

const PledgePage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams?.get('id');

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contribution_amount: '',
    currency_type: 'SYP',
    contribution_details: '',
    campaign_uuid: '',
  });

  const {
    mutate: createPledgeFunc,
    isPending: isSubmitting,
    error: pledgeErr,
  } = useMutationHandler({
    mutationFn: (body) => createPledge(body),

    onSuccess: () => {
      toast.success(
        'تم إرسال التعهد بنجاح. يمكنك إكمال دفع المبلغ لاحقاً من ملفك الشخصي.',
      );

      navigate('/profile');
    },

    onError: (error) => {
      console.log('Pledge Error:', error);
    },
  });

  const handleSubmit = () => {
    const data = {
      contribution_amount: formData.contribution_amount,
      contribution_details: formData.contribution_details,
      currency_type: formData.currency_type,
      campaign_uuid: formData.campaign_uuid,
    };

    createPledgeFunc(data);
  };

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({
        ...prev,
        campaign_uuid: id,
      }));
    }
  }, [id]);

  return (
    <CustomContainer styles={{ py: 6 }}>
      {pledgeErr && (
        <ErrorMessage
          styles={{
            position: 'sticky',
            top: '126px',
            width: '100%',
            zIndex: 9999,
          }}
        >
          {pledgeErr?.message}
        </ErrorMessage>
      )}

      <Grid container justifyContent='center' spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: 8,
            lg: 6,
          }}
        >
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
            }}
          >
            <DonationForm
              formData={formData}
              setFormData={setFormData}
              onNext={handleSubmit}
              isSubmitting={isSubmitting}
              isPledge={true}
            />
          </Paper>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 8,
            lg: 6,
          }}
        >
          <PledgeInfoCard />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default PledgePage;
