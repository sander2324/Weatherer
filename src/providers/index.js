import React from 'react';

import PropTypes from 'prop-types';

import FontProvider from './FontProvider';
import StateProvider from './StateProvider';


function RootProvider(props) {
  return (
    <FontProvider>
      <StateProvider>
        {props.children}
      </StateProvider>
    </FontProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
