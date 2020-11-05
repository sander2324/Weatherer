import { StyleSheet } from 'react-native';


const globalStyles = StyleSheet.create({
  settingsContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  setting: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    height: 80,
    width: '100%',
  },
  horizontalLine: {
    width: '90%',
    height: 1.1,
    backgroundColor: '#000000',
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});

export default globalStyles;
