import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../SectionWrapper';
import ProjectCard from '../../ProjectCard/ProjectCard';
import { useGetData } from '../../../customHooks/reactQuery/useGetData';
import { getProjects } from '../../../services/projects';
import ProjectCardSkeleton from '../../../Skeleton/ProjectCardSkeleton';

const CompletedProjects = () => {
  const navigate = useNavigate();

  const { data: projectsData, isFetching: isLoading } = useGetData({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
  const completedProjects =
    projectsData?.data
      .filter((project) => project.status === 'مكتمل')
      .slice(0, 4) || [];

  const content = isLoading
    ? [...Array(4)].map((_, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <ProjectCardSkeleton />
        </Grid>
      ))
    : completedProjects.map((p) => (
        <Grid
          key={p.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <ProjectCard project={p} />
        </Grid>
      ));

  if (!completedProjects.length) return null;

  return (
    <SectionWrapper
      title='إنجازاتنا'
      description='مشاريع اكتملت بفضل مساهمات المتبرعين وشراكاتنا المجتمعية، لتترك أثرًا حقيقيًا في حياة المستفيدين.'
      buttonText='تعرّف على أثر مبادراتنا'
      onButtonClick={() => navigate('/stats')}
    >
      <div className='hf-page'>
        <Grid container spacing={3}>
          {content}
        </Grid>
      </div>
    </SectionWrapper>
  );
};

export default CompletedProjects;
