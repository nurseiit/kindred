import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { requestUser, selectUser } from '../features/user/userSlice';

export const useUser = () => {
  const {
    user,
    userRequest: { isLoading, error },
  } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user && !isLoading) dispatch(requestUser());
  }, []);

  return { user, isLoading, error };
};
