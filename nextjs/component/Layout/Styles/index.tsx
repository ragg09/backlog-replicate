import { Box, Drawer, IconButton, styled } from '@mui/material';

export const SidebarDrawer = styled(Drawer)(({ open }) => ({
  width: open ? 240 : 60,
  flexShrink: 0,
  transition: 'width 0.3s ease-in-out',
  '& .MuiDrawer-paper': {
    width: open ? 240 : 60,
    boxSizing: 'border-box',
    transition: 'width 0.3s ease-in-out',
    overflow: 'hidden',
  },
}));

export const SidebarToggleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
}));

export const SidebarToggleButtonContainer = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
