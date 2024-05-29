import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskData } from '@/utils/Interface';
import { CardContainer, CardItemHeader, ColumnCount } from '../styles';
import { Avatar, Box, Typography } from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { convertTaskTypeToColor } from '@/utils/helpers/task';

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
          <Box>
            <CardItemHeader className="mb-2">
              <Typography
                variant="caption"
                color="white"
                sx={{
                  backgroundColor: convertTaskTypeToColor(task.type),
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '10px',
                }}
              >
                {task.type}
              </Typography>
              <MoreHorizIcon />
            </CardItemHeader>

            <Typography variant="body2" color="#00836B" className="mb-2">
              {task.title}
            </Typography>

            <Typography variant="body1" className="mb-2">
              {task.description}
            </Typography>

            <Avatar
              sx={{
                width: '25px',
                height: '25px',
              }}
            />
          </Box>
        </CardContainer>
      )}
    </Draggable>
  );
}
