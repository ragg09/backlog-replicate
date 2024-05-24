import { TaskStatus } from '../Interface';

export const convertBoardIdToStatus = (data: string): TaskStatus | string => {
  if (data === 'open') return 'open';
  if (data === 'closed') return 'closed';
  if (data === 'inProgress') return 'in-progress';
  if (data === 'forReview') return 'for-review';
  return 'others';
};
