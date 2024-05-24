import { Box, BoxProps, Paper, PaperProps, Typography, styled } from '@mui/material';

interface TaskListProps extends BoxProps {
  isDraggingOver: boolean;
}

interface CardContainerProps extends PaperProps {
  isDragging: boolean;
}

export const ColumnContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  width: 370,
  height: 900,
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  border: `1px solid ${theme.palette.grey[300]}`,
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  textAlign: 'center',
  position: 'sticky',
  top: 0,
}));

export const TaskList = styled(Box)<TaskListProps>(({ theme, isDraggingOver }) => ({
  padding: theme.spacing(0.5),
  transition: 'background-color 0.2s ease',
  backgroundColor: isDraggingOver ? theme.palette.error.dark : theme.palette.background.paper,
  flexGrow: 1,
  minHeight: 100,
}));

export const CardContainer = styled(Paper)<CardContainerProps>(({ theme, isDragging }) => ({
  borderRadius: 10,
  boxShadow: '5px 5px 5px 2px grey',
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  minHeight: 120,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  backgroundColor: isDragging ? 'lightgreen' : '#EAF4FC',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));
