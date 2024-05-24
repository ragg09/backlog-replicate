import React from 'react';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnContainer, ColumnTitle, TaskList } from '../styles';
import { TaskData } from '@/utils/Interface';

interface ColumnProps {
  title: string;
  tasks: TaskData[]; // Assuming tasks is an array of TaskData
  id: string;
}

export default function Column({ title, tasks, id }: ColumnProps) {
  return (
    <ColumnContainer elevation={3} className="column">
      <ColumnTitle variant="h6">{title}</ColumnTitle>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
