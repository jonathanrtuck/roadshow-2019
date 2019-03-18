import dx from 'images/dx.png';
import { faIdCard } from '@fortawesome/pro-solid-svg-icons';
import Ngmp from 'components/Ngmp';
import React from 'react';
import Services from 'components/Services';

/**
 * @type {object[]}
 */
export default [
  {
    component: <Ngmp />,
    icon: faIdCard,
    id: 'ngmp',
    label: 'Next Gen<br />Employee Experience',
  },
  {
    component: <Services />,
    icon: dx,
    id: 'services',
    label: 'Next Gen<br />Digital Experience Platform',
  },
  /*
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
  */
];
