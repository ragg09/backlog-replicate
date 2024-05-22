import { useState } from 'react';
import Link from 'next/link';
import { IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';
import { SidebarDrawer, SidebarToggleBox, SidebarToggleButtonContainer } from './Styles';
import SidebarItems from './SidebarItems';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarDrawer variant="permanent" open={isSidebarOpen}>
      <SidebarToggleBox>
        <SidebarToggleButtonContainer
          onClick={toggleSidebar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            isSidebarOpen ? (
              <ArrowLeftIcon />
            ) : (
              <ArrowRightIcon />
            )
          ) : isSidebarOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </SidebarToggleButtonContainer>
      </SidebarToggleBox>

      <List>
        {SidebarItems.map((item, index) => (
          <Link href={item.route} key={index}>
            <ListItem key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ whiteSpace: 'nowrap' }} />
            </ListItem>
          </Link>
        ))}
      </List>
    </SidebarDrawer>
  );
}
