import { lazy } from 'react';

const NotFoundPage = lazy(() => import('./pages/not-found/not-found'));
const HomePage = lazy(() => import('./pages/home/home'));
const ExplorePage = lazy(() => import('./pages/explore/explore'));
const NotificationsPage = lazy(() => import('./pages/notification/notifications'));
const MessagesPage = lazy(() => import('./pages/messages/messages'));
const BookmarksPage = lazy(() => import('./pages/bookmark/bookmarks'));
const ListsPage = lazy(() => import('./pages/lists/lists'));
const ProfilePage = lazy(() => import('./pages/profile/profile'));
const MorePage = lazy(() => import('./pages/more/more'));

export const ROUTES = {
  home: {
    path: '/',
    name: 'HOME',
    content: <HomePage />,
  },
  explore: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  notifications: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  messages: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  bookmarks: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  lists: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  profile: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  more: {
    path: '/explore',
    name: 'EXPLORE',
    content: <ExplorePage />,
  },
  error: {
    path: '*',
    name: 'ERROR',
    content: <NotFoundPage />,
  },
};

export const ROUTES_HIDE = ['ERROR'];
