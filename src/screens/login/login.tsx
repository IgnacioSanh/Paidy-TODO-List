import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Platform, Linking, AppState} from 'react-native';
import {
  authenticateAsync,
  getEnrolledLevelAsync,
  isEnrolledAsync,
} from 'expo-local-authentication';

import {Button, Screen} from '~components';
import fontStyle from '~theme/fonts';

import styles from './styles';
import {useAuthContext} from '~contexts/authContext';

const ANDROID_SECURITY_SETTINGS = 'android.settings.SECURITY_SETTINGS';
const APPLE_OS_NAME = 'ios';

export default function Login() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const appState = useRef(AppState.currentState);
  const {changeAuthentication} = useAuthContext();

  const isIOS = Platform.OS === APPLE_OS_NAME;

  useEffect(() => {
    checkEnrollment();
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        checkEnrollment();
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkEnrollment() {
    if (isIOS) {
      setIsEnrolled(await isEnrolledAsync());
    } else {
      const enrollmentLevel = await getEnrolledLevelAsync();
      setIsEnrolled(enrollmentLevel > 0);
    }
  }

  async function authenticate() {
    const {success} = await authenticateAsync();
    if (success) {
      changeAuthentication(true);
    }
  }

  async function openSettings() {
    if (isIOS) {
      await Linking.openSettings();
    } else {
      await Linking.sendIntent(ANDROID_SECURITY_SETTINGS);
    }
  }

  return (
    <Screen>
      <View style={styles.flexEnd}>
        {isEnrolled ? (
          <>
            <Text
              style={[
                fontStyle.gothicFamily,
                fontStyle.h1,
                styles.textSpacing,
              ]}>
              Please Authenticate
            </Text>
            <Button label="Authenticate" onPress={authenticate} />
          </>
        ) : (
          <>
            <Text
              style={[
                fontStyle.gothicFamily,
                fontStyle.h1,
                styles.textSpacing,
              ]}>
              Set Authentication to proceed
            </Text>
            <Button label="Go to Settings" onPress={openSettings} />
          </>
        )}
      </View>
    </Screen>
  );
}
