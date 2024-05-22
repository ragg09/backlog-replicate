import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { styled } from '@mui/system';
import { Paper } from '@mui/material';

const Container = styled(Paper)(({ theme, isDragging, isDraggable, isBacklog }) => ({
  borderRadius: 10,
  boxShadow: '5px 5px 5px 2px grey',
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  minHeight: 120,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  backgroundColor: isDragging
    ? 'lightgreen'
    : isDraggable
    ? isBacklog
      ? '#F2D7D5'
      : '#DCDCDC'
    : isBacklog
    ? '#F2D7D5'
    : '#EAF4FC',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export default function Card({ task, index }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDraggable={snapshot.isDraggable}
          isBacklog={task.isBacklog}
        >
          <div style={{ display: 'flex', justifyContent: 'start', padding: 2 }}>
            <span>
              <small>
                #{task.id}
                {'  '}
              </small>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            <div>{task.title}</div>
          </div>
          {/* <Icons>
            <div>
              <Avatar
                onClick={() => console.log(task)}
                src={'https://joesch.moe/api/v1/random?key=' + task.id}
              />
            </div>
          </Icons> */}
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}
