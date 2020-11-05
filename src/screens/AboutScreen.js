import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

import Text from '../components/Text';

const styles = StyleSheet.create({
  aboutContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    height: 250,
    alignItems: 'center',
  },
  copyrightInfo: {
    bottom: 0,
    marginBottom: 25,
    position: 'absolute',
  },
  githubInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  githubInfoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  links: {
    marginTop: 50,
  },
});


function AboutScreen() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.aboutContainer}>
          <View style={styles.infoContainer}>
            <Text color="#000000" fontSize={50} fontFamily="Roboto-Bold">Weatherer</Text>
            <Text color="#000000" fontSize={20}>1.0.0</Text>
            <View style={styles.links}>
              <TouchableHighlight style={styles.githubInfo} onPress={() => Linking.openURL('https://github.com/sander2324/Weatherer')}>
                <>
                  <Image
                    source={{ uri: 'https://image.flaticon.com/icons/png/512/25/25231.png' }}
                    style={styles.githubInfoIcon}
                  />
                  <Text color="#000000" fontSize={18}>Source code</Text>
                </>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.copyrightInfo}>
            <Text color="#000000">&copy; Sander2324</Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default AboutScreen;
