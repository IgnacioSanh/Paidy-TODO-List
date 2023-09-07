import {StyleSheet} from 'react-native';
import {Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: Spacings.large * 2,
    flex: 1,
  },
  textSpacing: {
    marginBottom: Spacings.large,
  },
});

export default styles;
