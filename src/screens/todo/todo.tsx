import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {Screen} from '~components';
import TodoCard from '~components/todo/todoCard/todoCard';
import fontStyle from '~theme/fonts';
import {useTasksContext} from '~contexts/tasksContext';

import {BottomSection} from '~components/todo';
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
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.separator}>
                <TodoCard task={item} />
              </View>
            )}
          />
        </View>

        <BottomSection />
      </View>
    </Screen>
  );
}
