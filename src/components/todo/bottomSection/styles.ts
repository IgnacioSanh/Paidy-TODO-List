import {StyleSheet} from 'react-native';
import {Colors} from '~theme/colors';
import {BorderRadius, Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  container: {
    padding: Spacings.medium,
    backgroundColor: Colors.WHITE,
    borderRadius: BorderRadius.bordered,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 1,
    flex: 1,
    marginRight: Spacings.large,
  },
});

export default styles;
