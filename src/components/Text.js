import React from 'react';
import { Text as ReactText, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import { DEFAULT_TEXT_COLOR } from '../constants';


function Text(props) {
  const styles = StyleSheet.create({
    text: {
      color: props.color,
      fontSize: props.fontSize,
      fontFamily: props.fontFamily,
    },
  });

  if (props.style) {
    return (
      <ReactText style={[styles.text, props.style]}>{props.children}</ReactText>
    );
  }

  return (
    <ReactText style={styles.text}>{props.children}</ReactText>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  style: PropTypes.object,
};

Text.defaultProps = {
  color: DEFAULT_TEXT_COLOR,
  fontSize: 14,
  fontFamily: 'Roboto',
  style: null,
};

export default Text;
