import { Box, Typography } from '@mui/material';
import CustomContainer from '../../common/CustomContainer';

import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

const C = {
  tealDeep: '#003744',
  tealMain: '#014a5b',
  gold: '#c9a24b',
  white: '#ffffff',
};

const SECTION_GAP = '90px';

const stats = [
  { n: 120, s: '+', label: 'حملة تم إطلاقها', icon: CampaignRoundedIcon },
  { n: 95, s: '%', label: 'معدل وصول التبرعات', icon: VerifiedRoundedIcon },
  { n: 15000, s: '+', label: 'متبرع نشط', icon: VolunteerActivismRoundedIcon },
  { n: 8400, s: '+', label: 'أسرة استفادت', icon: GroupsRoundedIcon },
  { n: 3200, s: '+', label: 'تبرع عيني', icon: Inventory2RoundedIcon },
  { n: 480, s: '+', label: 'مشروع مكتمل', icon: TaskAltRoundedIcon },
];

export default function ImpactStats() {
  return (
    <Box
      sx={{
        py: SECTION_GAP,
        background: `linear-gradient(135deg, ${C.tealDeep} 0%, ${C.tealMain} 100%)`,
      }}
    >
      <CustomContainer>
        {/* grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2,1fr)',
              sm: 'repeat(3,1fr)',
              md: 'repeat(6,1fr)',
            },
            gap: { xs: 3, md: 2 },
          }}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <Box
                key={i}
                sx={{
                  textAlign: 'center',
                  color: C.white,
                  position: 'relative',
                  px: 1.5,

                  '&:not(:last-child)::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '20%',
                    height: '60%',
                    width: '1px',
                    bgcolor: 'rgba(255,255,255,0.12)',
                    display: { xs: 'none', md: 'block' },
                  },

                  transition: '.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Icon
                  sx={{
                    color: C.gold,
                    fontSize: 28,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: 24, md: 32 },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {item.n}
                  {item.s}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 13.5,
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CustomContainer>
    </Box>
  );
}
