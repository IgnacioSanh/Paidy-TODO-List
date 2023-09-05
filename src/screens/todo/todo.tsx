import React from 'react';
import {Text, View} from 'react-native';

import {Screen} from '~components';
import TodoCard from '~screens/todo/components/todoCard/todoCard';
import fontStyle from '~theme/fonts';

import {BottomSection} from './components';
import styles from './styles';

export default function TodoScreen() {
  return (
    <Screen>
      <View style={styles.wrapper}>
        <View style={styles.marginBottom}>
          <Text
            style={[
              fontStyle.gothicFamily,
              fontStyle.h1,
              fontStyle.fontColorPrimary,
              styles.title,
            ]}>
            TODO:
          </Text>
          <TodoCard
            title="First itemaaaaaagasdjkahsdashduihasdiuhasdiuhasiudhsaiuh"
            onRemove={() => 1}
          />
          <TodoCard
            title="First itemaaaaaagasdjkahsdashduihasdiuhasdiuhasiudhsaiuh"
            onRemove={() => 1}
          />
        </View>
        <BottomSection />
      </View>
    </Screen>
  );
}
