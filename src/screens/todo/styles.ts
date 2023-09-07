import {StyleSheet} from 'react-native';
import {Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  title: {
    marginBottom: Spacings.extraLarge,
  },
  wrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  marginBottom: {
    marginBottom: Spacings.large,
    flex: 1,
  },
  separator: {
    marginBottom: Spacings.large,
  },
});

export default styles;
