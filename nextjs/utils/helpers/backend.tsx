import { useAppSelector } from '@/redux/hook';

const { baseURL } = useAppSelector((state) => state.backend);

export const returnBaseURL = (): string => {
  return baseURL;
};
