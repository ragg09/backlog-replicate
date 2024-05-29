import {
  Home as HomeIcon,
  AddBox as AddBoxIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { SidebarItem } from '@/utils/Interface';

const SidebarItems: SidebarItem[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    route: '/',
  },
  {
    label: 'Add Issue',
    icon: <AddBoxIcon />,
    route: '/add-issue',
  },
  {
    label: 'Board',
    icon: <DashboardIcon />,
    route: '/board',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    route: '/settings',
  },
];

export default SidebarItems;
