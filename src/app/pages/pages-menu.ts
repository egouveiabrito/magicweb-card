import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Card',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Add Cards',
        link: '/pages/card/list',
      },
    ],
  },
];
