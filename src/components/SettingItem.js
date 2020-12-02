import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';

import Text from './Text';
import globalStyles from '../globalStyles';


function SettingItem(props) {
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress()}>
      <View style={globalStyles.setting}>
        <Text color="#000000" fontSize={20}>{props.title}</Text>
        <Text color="#000000" fontSize={20} fontFamily="Roboto-Bold">{props.value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

SettingItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SettingItem;
