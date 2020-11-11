import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import PropTypes from 'prop-types';

import Text from './Text';
import globalStyles from '../globalStyles';


function CenteredSettingItem(props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.onPress()}
    >
      <View style={[globalStyles.setting, globalStyles.justifyCenter]}>
        <Text
          color="#000000"
          fontSize={20}
          fontFamily={props.boldText ? 'Roboto-Bold' : 'Roboto'}
        >
          {props.content}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

CenteredSettingItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  boldText: PropTypes.bool,
};

CenteredSettingItem.defaultProps = {
  boldText: false,
};

export default CenteredSettingItem;
