import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';
import {Colors} from '~theme/colors';
import {Button} from '~components/index';

export default function BottomSection() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter here"
        inputMode="text"
        selectionColor={Colors.PRIMARY}
        style={styles.textInput}
      />
      <Button label="ADD" onPress={() => 1} />
    </View>
  );
}
