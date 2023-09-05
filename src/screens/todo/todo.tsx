import React from 'react';
import {Text, View} from 'react-native';

import {Screen} from '~components';
import TodoCard from '~screens/todo/components/todoCard/todoCard';
import fontStyle from '~theme/fonts';
import {useTasksContext} from '~contexts/tasksContext';

import {BottomSection} from './components';
import styles from './styles';

export default function TodoScreen() {
  const {tasks} = useTasksContext();
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
          {tasks.map(({title}) => (
            <TodoCard title={title} onRemove={() => 1} />
          ))}
        </View>
        <BottomSection />
      </View>
    </Screen>
  );
}
