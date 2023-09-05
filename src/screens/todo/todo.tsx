import React from 'react';
import {Text} from 'react-native';

import {Screen} from '~components';
import TodoCard from '~components/todoCard/todoCard';

export default function TodoScreen() {
  return (
    <Screen>
      <Text>TODO:</Text>
      <TodoCard
        title="First itemaaaaaagasdjkahsdashduihasdiuhasdiuhasiudhsaiuh"
        onRemove={() => 1}
      />
      <TodoCard
        title="First itemaaaaaagasdjkahsdashduihasdiuhasdiuhasiudhsaiuh"
        onRemove={() => 1}
      />
    </Screen>
  );
}
