import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Linking, Platform} from 'react-native';
import {authenticateAsync, isEnrolledAsync} from 'expo-local-authentication';

import Button from '~components/button/button';
import Screen from '~components/screen/screen';

const ANDROID_SECURITY_SETTINGS = 'android.settings.SECURITY_SETTINGS';
const APPLE_OS_NAME = 'ios';

export default function Home() {
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    (async function () {
      setIsEnrolled(await isEnrolledAsync());
    })();
  }, []);

  async function auth() {
    await authenticateAsync();
  }

  async function openSettings() {
    if (Platform.OS === APPLE_OS_NAME) {
      Linking.openSettings();
    } else {
      await Linking.sendIntent(ANDROID_SECURITY_SETTINGS);
    }
  }

  return (
    <Screen>
      <View style={styles.paddings}>
        <Text>My App</Text>
        <Text>User is {isEnrolled ? '' : 'NOT'} enrolled</Text>
        {isEnrolled ? (
          <Button onPress={auth} label="Enter pin" />
        ) : (
          <Button onPress={openSettings} label="Create PIN" />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  paddings: {
    padding: 20,
  },
});
