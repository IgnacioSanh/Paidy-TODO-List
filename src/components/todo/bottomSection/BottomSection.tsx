import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';
import {Colors} from '~theme/colors';
import {Button} from '~components/index';

import {useTasksContext} from '~contexts/tasksContext';

export default function BottomSection() {
  const [inputText, setInputText] = useState<string>();
  const {addTask, selectedTask, updateTask} = useTasksContext();

  const buttonLabel = selectedTask ? 'EDIT' : 'ADD';

  useEffect(() => {
    setInputText(selectedTask?.title);
  }, [selectedTask]);

  function handleButtonPress() {
    const trimmedText = inputText?.trim();
    if (trimmedText) {
      if (selectedTask) {
        // If there is a task selected, modify the title
        updateTask({...selectedTask, title: inputText});
      } else {
        // If there is no task selected, just add the new one
        addTask(trimmedText);
      }
      setInputText(undefined);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter here"
        inputMode="text"
        selectionColor={Colors.PRIMARY}
        style={styles.textInput}
        onChangeText={setInputText}
        value={inputText}
      />
      <Button
        label={buttonLabel}
        onPress={handleButtonPress}
        disabled={!inputText}
      />
    </View>
  );
}
