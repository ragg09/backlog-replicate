import {
  Home as HomeIcon,
  AddBox as AddBoxIcon,
  Dashboard as DashboardIcon,
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
];

export default SidebarItems;
