import {StyleSheet} from 'react-native';
import {Colors} from './colors';

const FONT_SIZE_REGULAR = 14;
const REGULAR_LINE_HEIGHT = 18;
const FONT_SIZE_LARGE = 20;

const fontStyle = StyleSheet.create({
  h1: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  p: {
    fontSize: FONT_SIZE_REGULAR,
    lineHeight: REGULAR_LINE_HEIGHT,
  },
  gothicFamily: {
    fontFamily: 'Gothic A1',
  },
  fontWeigthLight: {
    fontWeight: '300',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontColorPrimary: {
    color: Colors.PRIMARY,
  },
});

export default fontStyle;
