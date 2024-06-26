import { TaskStatus, TaskType } from '../Interface';

export const convertBoardIdToStatus = (data: string): TaskStatus | string => {
  if (data === 'open') return 'open';
  if (data === 'closed') return 'closed';
  if (data === 'inProgress') return 'in-progress';
  if (data === 'forReview') return 'for-review';
  return 'others';
};

export const convertTaskTypeToColor = (data: string): string => {
  if (data === 'task') return '#A1AF2F';
  if (data === 'bug') return '#EA733B';
  return '#707070';
};
