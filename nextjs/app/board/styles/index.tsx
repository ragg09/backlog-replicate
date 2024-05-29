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
  width: 380,
  height: `calc(100vh - 80px)`,
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  boxShadow: 'none',
  borderBottom: '5px solid #FFFFFF',
}));

export const ColumnTitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  backgroundColor: '#FFFFFF',
}));

export const ColumnTitleContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

export const ColumnCount = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  backgroundColor: '#D9D9D9',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: 20,
  fontWeight: 'bold',
  fontSize: 14,
}));

export const TaskList = styled(Box)<TaskListProps>(({ theme, isDraggingOver }) => ({
  padding: theme.spacing(0.5),
  transition: 'background-color 0.2s ease',
  backgroundColor: isDraggingOver ? theme.palette.grey[50] : theme.palette.background.paper,
  flexGrow: 1,
  minHeight: 100,
}));

export const CardContainer = styled(Paper)<CardContainerProps>(({ theme, isDragging }) => ({
  borderRadius: 5,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  minHeight: 120,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  backgroundColor: isDragging ? '#EAF4FC' : 'white',
  cursor: 'pointer',
  justifyContent: 'space-between',
  flexDirection: 'column',
  border: '1px solid #BDBDBD',
}));

export const CardItemHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});
