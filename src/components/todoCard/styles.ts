import {StyleSheet} from 'react-native';
import {Colors} from '~theme/colors';
import {BorderRadius, Spacings} from '~theme/spacings';

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.soft,
    backgroundColor: Colors.WHITE,
    paddingVertical: Spacings.medium,
    paddingHorizontal: Spacings.large,
    marginBottom: Spacings.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bordered: {
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
  },
  circle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: BorderRadius.rounded,
    width: Spacings.large,
    height: Spacings.large,
    marginRight: Spacings.small,
  },
  taskRow: {
    flexDirection: 'row',
    flex: 1,
  },
  taskLabel: {
    overflow: 'hidden',
    maxWidth: '20%',
  },
  flex1: {
    flex: 1,
  },
});

export default styles;
