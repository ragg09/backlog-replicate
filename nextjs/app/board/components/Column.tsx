import React from 'react';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import {
  ColumnContainer,
  ColumnCount,
  ColumnTitle,
  ColumnTitleContainer,
  ColumnTitleWrapper,
  TaskList,
} from '../styles';
import { TaskColor, TaskData } from '@/utils/Interface';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AddIcon from '@mui/icons-material/Add';

interface ColumnProps {
  title: string;
  color: TaskColor;
  tasks: TaskData[];
  id: string;
}

export default function Column({ title, color, tasks, id }: ColumnProps) {
  return (
    <ColumnContainer elevation={3} className="column">
      <ColumnTitleWrapper>
        <ColumnTitleContainer>
          <CircleRoundedIcon fontSize="small" style={{ color }} />
          <ColumnTitle variant="body1">{title}</ColumnTitle>
          <ColumnCount>{tasks.length}</ColumnCount>
        </ColumnTitleContainer>

        {title === 'Open' && <AddIcon sx={{ color: '#787878', marginRight: '8px' }} />}
      </ColumnTitleWrapper>
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
