import React from 'react';
import {SvgXml} from 'react-native-svg';

const PlusIcon = () => {
  const icon = () => {
    const xml = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="2" x2="22" y2="22" stroke="white" stroke-width="2"/>
        <line x1="22" y1="2" x2="2" y2="22" stroke="white" stroke-width="2"/>
    </svg>`;
    return xml;
  };
  return <SvgXml xml={icon()} />;
};

export default PlusIcon;
