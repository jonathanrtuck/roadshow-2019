import Analytics from 'components/Analytics';
import Chatbot from 'components/Chatbot';
import dx from 'images/dx.png';
import {
  faChartPie,
  faCloud,
  faRobot,
  faUserCircle,
} from '@fortawesome/pro-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/pro-regular-svg-icons';
import Profile from 'components/Profile';
import React from 'react';
import Recordings from 'components/Recordings';
import Search from 'components/Search';
import Services from 'components/Services';

/**
 * @type {object[]}
 */
export default [
  {
    component: <Services />,
    icon: dx,
    id: 'services',
    label: 'Our Digital<br />Experiences Services',
  },
  {
    component: <Profile />,
    icon: faUserCircle,
    id: 'profile',
    label: 'Employee Profile<br />Redesign Project',
  },
  {
    component: <Search />,
    icon: faCloud,
    id: 'search',
    label: 'Next Gen<br />Search',
  },
  {
    component: <Chatbot />,
    icon: faRobot,
    id: 'chatbot',
    label: 'Chat Bot -<br />Proof of Concept',
  },
  {
    component: <Analytics />,
    icon: faChartPie,
    id: 'analytics',
    label: 'Google<br />Analytics',
  },
  {
    component: <Recordings />,
    icon: faPlayCircle,
    id: 'recordings',
    label: 'Session Recordings<br />from Today',
  },
];
