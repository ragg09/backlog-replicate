import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskData } from '@/utils/Interface';
import { CardContainer } from '../styles';

interface CardProps {
  task: TaskData;
  index: number;
}

export default function Card({ task, index }: CardProps) {
  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided, snapshot) => (
        <CardContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
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
        </CardContainer>
      )}
    </Draggable>
  );
}
