import React from 'react';
import { styled } from '@mui/system';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';

const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  width: 370,
  height: 900,
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const Title = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  textAlign: 'center',
}));

const TaskList = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5),
  transition: 'background-color 0.2s ease',
  backgroundColor: theme.palette.background.paper,
  flexGrow: 1,
  minHeight: 100,
}));

export default function Column({ title, tasks, id }) {
  return (
    <Container elevation={3} className="column">
      <Title sx={{ position: 'sticky', top: 0 }} variant="h6">
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
