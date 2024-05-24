import { type TaskData } from '@/utils/Interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type UpdatedTaskData = Partial<any>; // update the type later

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9005/api/' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTask: builder.query<TaskData[], void>({
      query: () => 'tasks/',
      providesTags: ['Task'],
    }),
    updateTask: builder.mutation<TaskData, { id: number | string; data: UpdatedTaskData }>({
      query: ({ id, data }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        invalidate: ['Task'],
      }),
    }),
  }),
});

export const { useGetTaskQuery, useUpdateTaskMutation } = taskApi;
