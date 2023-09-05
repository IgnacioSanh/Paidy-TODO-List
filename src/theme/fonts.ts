import {StyleSheet} from 'react-native';

const FONT_SIZE_REGULAR = 14;
const REGULAR_LINE_HEIGHT = 18;
const FONT_SIZE_LARGE = 20;

const fontStyle = StyleSheet.create({
  h1: {
    fontSize: FONT_SIZE_LARGE,
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
});

export default fontStyle;
