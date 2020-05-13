import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Card',
    icon: 'cube',
    children: [
      {
        title: 'Search',
        link: '/pages/card/list',
      },
      {
        title: 'Deck',
        link: '/pages/card/deck',
      },
    ],
  },
];
