import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskData, TaskStateType } from '@/utils/Interface';

interface InitialState {
  [key: string]: TaskData[];
}

const initialState: InitialState = {
  open: [],
  inProgress: [],
  forReview: [],
  closed: [],
  others: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskSegregation(state, action: PayloadAction<TaskData[]>) {
      const tasks = action.payload;
      state.open = [];
      state.inProgress = [];
      state.forReview = [];
      state.closed = [];

      tasks.forEach((task) => {
        switch (task.status) {
          case 'open':
            state.open.push(task);
            break;
          case 'in-progress':
            state.inProgress.push(task);
            break;
          case 'for-review':
            state.forReview.push(task);
            break;
          case 'closed':
            state.closed.push(task);
            break;
          default:
            state.others.push(task);
            break;
        }
      });
    },

    updateStatus: (
      state,
      action: PayloadAction<{
        id: number;
        destination: TaskStateType;
        source: TaskStateType;
      }>
    ) => {
      const { id, destination, source } = action.payload;

      const taskToUpdate = state[source].find((task: TaskData) => task.id === id);

      if (taskToUpdate) {
        state[source] = state[source].filter((task) => task.id !== id);

        state[destination].push(taskToUpdate);
      }
    },
  },
});

export const { taskSegregation, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
