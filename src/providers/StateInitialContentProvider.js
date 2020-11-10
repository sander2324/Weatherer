import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch } from 'react-redux';

import { AppLoading } from 'expo';

import PropTypes from 'prop-types';

import { overrideLocationState } from '../state/actions/locationActions';
import { overrideSettingsState } from '../state/actions/settingsActions';


async function setStorageItemToState(dispatch, storageKey, syncAction) {
  const resultString = await AsyncStorage.getItem(storageKey);
  if (!resultString || resultString === 'null') return;

  const result = JSON.parse(resultString);
  dispatch(syncAction(result));
}


function StateInitialContentProvider(props) {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const syncables = [
      {
        storageKey: 'WEATHERER_LOCATIONS',
        syncAction: overrideLocationState,
      },
      {
        storageKey: 'WEATHERER_SETTINGS',
        syncAction: overrideSettingsState,
      },
    ];

    const promises = [];

    syncables.forEach((syncable) => {
      promises.push(setStorageItemToState(dispatch, syncable.storageKey, syncable.syncAction));
    });

    Promise.all(promises).then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <AppLoading />;
  }

  return props.children;
}

StateInitialContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateInitialContentProvider;
