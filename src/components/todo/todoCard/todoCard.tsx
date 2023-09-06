import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Button from '~components/button/button';
import fontStyle from '~theme/fonts';
import {ButtonVariants} from '~types/components';
import {useTasksContext} from '~contexts/tasksContext';
import {Task} from '~types/tasks';

import styles from './styles';

interface TodoCardProps {
  task: Task;
}

export const CONTAINER_TEST_ID = 'todo-card-container';

export default function TodoCard({task}: TodoCardProps) {
  const {selectedTask, removeTask, selectTask} = useTasksContext();
  const isSelected = selectedTask?.id === task.id;

  function toggleSelection() {
    if (isSelected) {
      return selectTask(undefined);
    }
    selectTask(task.id);
  }

  return (
    <TouchableOpacity onPress={toggleSelection}>
      <View
        style={[styles.container, isSelected ? styles.bordered : null]}
        testID={CONTAINER_TEST_ID}>
        <View style={styles.taskRow}>
          <View style={styles.circle} />
          {/* Handle extra long text */}
          <View style={[styles.flex1, styles.rightMargin]}>
            <Text
              style={[fontStyle.gothicFamily, fontStyle.p, styles.flex1]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {task.title}
            </Text>
          </View>
        </View>
        <View>
          <Button
            label="REMOVE"
            onPress={() => removeTask(task.id)}
            variant={ButtonVariants.OUTLINE}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
