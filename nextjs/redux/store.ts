import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counterSlice';
import taskReducer from '@/redux/features/taskSlice';
import backendReducer from '@/redux/features/backendSlice';
import { taskApi } from './services/taskAPI';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    backend: backendReducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
