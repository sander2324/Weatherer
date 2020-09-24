import React, { useState } from 'react';

import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';

import PropTypes from 'prop-types';


/* eslint-disable global-require */
const getFonts = () => Fonts.loadAsync({
  Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
  'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
});
/* eslint-enable global-require */


function FontProvider(props) {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return props.children;
  }

  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontLoaded(true)}
    />
  );
}

FontProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FontProvider;
