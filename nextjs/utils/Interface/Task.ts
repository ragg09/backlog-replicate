export type TaskType = 'task' | 'bug' | 'other';
export type TaskStatus = 'open' | 'in-progress' | 'for-review' | 'closed';
export type TaskStateType = 'open' | 'inProgress' | 'forReview' | 'closed' | 'others';
export type TaskPriority = 'low' | 'normal' | 'high';

export interface TaskData {
  id: number;
  title: string;
  description: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string | null;
  start_date: string | null;
  due_date: string | null;
  estimated_hours: number | null;
  actual_hours: number | null;
  created_at: string;
  updated_at: string;
}
