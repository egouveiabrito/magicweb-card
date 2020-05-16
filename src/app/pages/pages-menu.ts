import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Cartas',
    icon: 'cube',
    children: [
      {
        title: 'Buscar',
        link: '/pages/card/list',
      },
      {
        title: 'Deck',
        link: '/pages/card/deck',
      },
    ],
  },
  {
    title: 'Jogador',
    icon: 'person',
    children: [
      {
        title: 'Buscar',
        link: '/pages/jogador/list',
      },
      {
        title: 'Adicionar',
        link: '/pages/jogador/form',
      },
    ],
  },
];
