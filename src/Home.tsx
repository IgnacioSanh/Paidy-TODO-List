import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Button from '~components/button/button';
import Screen from '~components/screen/screen';

export default function Home() {
  return (
    <Screen>
      <View style={styles.paddings}>
        <Text>My App</Text>
        <Button />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  paddings: {
    padding: 20,
  },
});
