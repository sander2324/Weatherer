import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';

import { Icon } from 'react-native-elements';

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
    marginRight: 5,
  },
  links: {
    marginTop: 50,
  },
});


function AboutScreen() {
  const [copyrightInfoTapped, setCopyrightInfoTapped] = useState(0);

  useEffect(() => {
    const totalClicks = 20;

    if (copyrightInfoTapped >= 10 && copyrightInfoTapped < 15) {
      ToastAndroid.show(
        `⚠️ WARNING: You are ${totalClicks - copyrightInfoTapped} clicks away from clearing the app's local settings ⚠️`,
        ToastAndroid.SHORT,
      );
    }
    if (copyrightInfoTapped === totalClicks) {
      AsyncStorage.clear();
      ToastAndroid.show('AsyncStorage has been cleared', ToastAndroid.LONG);
    }
  }, [copyrightInfoTapped]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.aboutContainer}>
          <View style={styles.infoContainer}>
            <Text color="#000000" fontSize={50} fontFamily="Roboto-Bold">Weatherer</Text>
            <Text color="#000000" fontSize={20}>{Constants.manifest.version}</Text>
            <View style={styles.links}>
              <TouchableHighlight style={styles.githubInfo} onPress={() => Linking.openURL('https://github.com/sander2324/Weatherer')}>
                <>
                  <Icon
                    color="#000000"
                    name="github"
                    type="font-awesome"
                    style={styles.githubInfoIcon}
                  />
                  <Text color="#000000" fontSize={18}>Source code</Text>
                </>
              </TouchableHighlight>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => setCopyrightInfoTapped((oldState) => oldState + 1)}
          >
            <View style={styles.copyrightInfo}>
              <Text color="#000000">&copy; Sander2324</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

export default AboutScreen;
