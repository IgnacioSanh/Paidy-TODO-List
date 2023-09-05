import React from 'react';
import {View, Text} from 'react-native';

import Button from '../button/button';
import styles from './styles';
import fontStyle from '~theme/fonts';

interface TodoCardProps {
  title: string;
  onRemove: () => void;
  selected?: boolean;
}

export const CONTAINER_TEST_ID = 'todo-card-container';

export default function TodoCard({
  title,
  onRemove,
  selected = false,
}: TodoCardProps) {
  return (
    <View
      style={[styles.container, selected ? styles.bordered : null]}
      testID={CONTAINER_TEST_ID}>
      <View style={styles.taskRow}>
        <View style={styles.circle} />
        {/* Handle extra long text */}
        <View style={styles.flex1}>
          <Text
            style={[fontStyle.gothicFamily, fontStyle.p, styles.flex1]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {title}
          </Text>
        </View>
      </View>
      <Button label="REMOVE" onPress={onRemove} />
    </View>
  );
}
