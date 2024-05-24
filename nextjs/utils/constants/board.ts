import { TaskStatus as TaskStatusType } from '@/utils/Interface/Task';

export enum TaskStatus {
  OPEN,
  IN_PROGRESS,
  FOR_REVIEW,
  CLOSED,
}

export const statusDetails: Record<
  TaskStatus,
  { title: string; id: TaskStatusType; state: string }
> = {
  [TaskStatus.OPEN]: { title: 'Open', id: 'open', state: 'open' },
  [TaskStatus.IN_PROGRESS]: { title: 'In Progress', id: 'in-progress', state: 'inProgress' },
  [TaskStatus.FOR_REVIEW]: { title: 'For Review', id: 'for-review', state: 'forReview' },
  [TaskStatus.CLOSED]: { title: 'Closed', id: 'closed', state: 'closed' },
};
