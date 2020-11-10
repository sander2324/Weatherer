import React from 'react';

import PropTypes from 'prop-types';

import FontProvider from './FontProvider';
import StateProvider from './StateProvider';
import StateInitialContentProvider from './StateInitialContentProvider';


function RootProvider(props) {
  return (
    <FontProvider>
      <StateProvider>
        <StateInitialContentProvider>
          {props.children}
        </StateInitialContentProvider>
      </StateProvider>
    </FontProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
