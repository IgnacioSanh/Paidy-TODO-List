import {StyleSheet} from 'react-native';
import {Colors} from '~theme/colors';
import {BorderRadius, Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: BorderRadius.soft,
  },
  outline: {
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
  },
  solid: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: Spacings.large,
    paddingHorizontal: Spacings.extraLarge,
  },
  outlineText: {
    color: Colors.PRIMARY,
  },
  solidText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default styles;
