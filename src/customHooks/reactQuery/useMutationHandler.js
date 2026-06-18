import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMutationHandler = ({
  mutationFn,
  invalidateKeys,
  onSuccess,
  onError,
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,

    onSuccess: (...args) => {
      invalidateKeys?.forEach((key) => {
        queryClient.invalidateQueries({
          queryKey: key,
        });
      });

      onSuccess?.(...args);
    },

    onError,
  });
};
/* const deleteMutation = useMutationHandler({
  mutationFn: (id) => deleteItem('/news', id),
  invalidateKeys: [['news']],
}); */
