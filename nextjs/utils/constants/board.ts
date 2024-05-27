import { TaskColor, TaskStatus as TaskStatusType } from '@/utils/Interface/Task';

export enum TaskStatus {
  OPEN,
  IN_PROGRESS,
  FOR_REVIEW,
  CLOSED,
}

export const statusDetails: Record<
  TaskStatus,
  { title: string; id: TaskStatusType; state: string; color: TaskColor }
> = {
  [TaskStatus.OPEN]: { title: 'Open', id: 'open', state: 'open', color: '#ED8077' },
  [TaskStatus.IN_PROGRESS]: {
    title: 'In Progress',
    id: 'in-progress',
    state: 'inProgress',
    color: '#4488C5',
  },
  [TaskStatus.FOR_REVIEW]: {
    title: 'For Review',
    id: 'for-review',
    state: 'forReview',
    color: '#DC9925',
  },
  [TaskStatus.CLOSED]: { title: 'Closed', id: 'closed', state: 'closed', color: '#A1AF2F' },
};
