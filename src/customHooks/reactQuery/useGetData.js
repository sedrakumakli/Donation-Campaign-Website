import { useQuery } from '@tanstack/react-query';

export const useGetData = ({
  queryKey,
  queryFn,
  enabled = true,
  staleTime = 0,
}) => {
  return useQuery({
    queryKey,
    queryFn,
    enabled,
    staleTime,
  });
};
/* const { data, isLoading } = useGetData({
  queryKey: ['news'],
  queryFn: getNews,
}); */
