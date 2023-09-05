import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';
import {Colors} from '~theme/colors';
import {Button} from '~components/index';

import {useTasksContext} from '~contexts/tasksContext';

export default function BottomSection() {
  const {addTask} = useTasksContext();

  function handleAddPress() {
    addTask({
      id: 'a',
      title: 'Some title',
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter here"
        inputMode="text"
        selectionColor={Colors.PRIMARY}
        style={styles.textInput}
      />
      <Button label="ADD" onPress={handleAddPress} />
    </View>
  );
}
