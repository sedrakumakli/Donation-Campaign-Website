import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../SectionWrapper';
import AchievementCard from '../AchievementCard';
import { PROJECTS } from '../../../Pages/CampaignDetails/CampaignDetails';
import ProjectCard from '../../ProjectCard/ProjectCard';

const CompletedProjects = ({ projects }) => {
  const navigate = useNavigate();

  if (!projects?.length) return null;

  /*   const completedProjects = projects
    .filter((project) => project.status === 'مكتمل')
    .slice(0, 3);
     */

  /* if (!completedProjects.length) return null; */

  return (
    <SectionWrapper
      title='إنجازاتنا'
      description='مشاريع اكتملت بفضل مساهمات المتبرعين وشراكاتنا المجتمعية، لتترك أثرًا حقيقيًا في حياة المستفيدين.'
      buttonText='عرض جميع الإنجازات'
      onButtonClick={() => navigate('/projects')}
    >
      <div className='hf-page'>
        <Grid container spacing={3}>
          {[...PROJECTS, ...PROJECTS].slice(0, 4).map((p) => (
            <Grid
              key={p.id}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </div>
    </SectionWrapper>
  );
};

export default CompletedProjects;
