import {StyleSheet} from 'react-native';
import {Colors} from '~theme/colors';

import {Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  background: {
    padding: Spacings.large,
    backgroundColor: Colors.BACKGROUND_GRAY,
  },
});

export default styles;
