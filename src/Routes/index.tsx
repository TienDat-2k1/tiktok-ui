import React from 'react';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';

import Search from '~/pages/Search/Search';

export type PublicRoutes = {
  path: string;
  component: () => JSX.Element;
  layout?: any;
};

// Public routes
export const publicRoutes: PublicRoutes[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

// private routes
export const privateRoutes = {};
