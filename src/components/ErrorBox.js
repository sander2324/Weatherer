import React from 'react';
import { View, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import Text from './Text';

const styles = StyleSheet.create({
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    width: 350,
    height: 150,
    borderRadius: 1,
    marginTop: 100,
    alignSelf: 'center',
  },
});


function ErrorBox(props) {
  return (
    <View style={styles.errorBox}>
      <Text color="#000000" fontSize={20}>
        [ ! ]  {props.errorText}  [ ! ]
      </Text>
    </View>
  );
}

ErrorBox.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorBox;
