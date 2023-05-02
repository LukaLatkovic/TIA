import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
      routeLink: 'atm',
      icon: 'fa fa-money-bills',
      label: 'Bankomati',
      items: [
        {
            routeLink: 'atm/atm-list',
            icon: 'fa fa-list',
            label: 'Lista bankomata',
        },
        {
          routeLink: 'atm/atm-new',
          icon: 'fa fa-plus',
          label: 'Novi bankomat',
      },
        {
            routeLink: 'atm/level1.2',
            icon: 'fa fa-users-rays',
            label: 'Korisnik <-> Bankomat',
        }

    ]
  },
  {
      routeLink: 'files',
      icon: 'fa fa-file',
      label: 'TIA',
      items: [
          {
            routeLink: 'files/level1.1',
            icon: 'fa fa-plus',
            label: 'Novi unos',
          },
          {
              routeLink: 'files/level1.1',
              icon: 'fa fa-bars-staggered',
              label: 'Lista novih unosa',
          },
          {
              routeLink: 'files/level1.2',
              icon: 'fa fa-clock-rotate-left',
              label: 'Generisani fajlovi',
          }
      ]
  },
  {
      routeLink: 'reports',
      icon: 'fa fa-chart-bar',
      label: 'Izvestaji',
      items: [
        {
            routeLink: 'reports/list',
            icon: 'fa fa-receipt',
            label: 'Log korisnika'
        },
        {
            routeLink: 'reports/create',
            icon: 'fa fa-receipt',
            label: 'Log unosa'
        }
    ]
  },
  {
      routeLink: 'users',
      icon: 'fa fa-user',
      label: 'Korisnici',
      items: [
          {
              routeLink: 'users/list',
              icon: 'fa fa-users',
              label: 'Lista korisnika'
          },
          {
              routeLink: 'users/create',
              icon: 'fa fa-user-plus',
              label: 'Registracija korisnika'
          }
      ]
  }
];
