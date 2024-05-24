'use client';
import React, { useEffect } from 'react';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';
import Column from './Column';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetTaskQuery, useUpdateTaskMutation } from '@/redux/services/taskAPI';
import { taskSegregation, updateStatus } from '@/redux/features/taskSlice';
import { TaskStatus, statusDetails } from '@/utils/constants';
import { TaskStateType } from '@/utils/Interface';
import { convertBoardIdToStatus } from '@/utils/helpers/task';

export default function Board() {
  const dispatch = useAppDispatch();
  const taskStatusValues: TaskStatus[] = Object.values(TaskStatus) as TaskStatus[];
  const state = useAppSelector((state) => state);
  const { data, isLoading } = useGetTaskQuery(undefined);
  const [updateTask, { isLoading: isUpdating, data: updateTaskData }] = useUpdateTaskMutation();

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    updateTask({
      id: draggableId,
      data: {
        status: convertBoardIdToStatus(destination.droppableId),
      },
    });

    dispatch(
      updateStatus({
        id: parseInt(draggableId),
        destination: destination.droppableId as TaskStateType,
        source: source.droppableId as TaskStateType,
      })
    );
  };

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(taskSegregation(data));
    }
  }, [data, isLoading]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={5} justifyContent="center">
        {taskStatusValues.map((status: TaskStatus) => (
          <Grid key={status} item xs={12} sm={6} md={3}>
            {statusDetails[status] && (
              <Column
                title={statusDetails[status].title}
                tasks={state.tasks[statusDetails[status].state as keyof typeof state.tasks]}
                id={statusDetails[status].state}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
}
