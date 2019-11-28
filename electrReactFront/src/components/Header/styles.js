import {StyleSheet} from 'react-native';
import {vw, vh, offset, setHeaderHeight} from '../../helpers/deviceHelper';
import {COLOR, FONT_SIZE, FONT_WEIGHT} from '../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingTop: offset.top,
    paddingHorizontal: vw('5%'),
    backgroundColor: COLOR.curiousBlue,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 9,
  },
  wrapper: {
    height: setHeaderHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.white,
    fontSize: FONT_SIZE.h3,
    fontWeight: FONT_WEIGHT.bold,
    textAlign: 'center',
  },
});
