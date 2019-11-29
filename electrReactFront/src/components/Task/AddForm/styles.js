import {StyleSheet} from 'react-native';
import {vw, vh, offset, setHeaderHeight} from '../../../helpers/deviceHelper';
import {COLOR, FONT_SIZE, FONT_WEIGHT} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: vw('1%'),
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 20,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.white,
    fontSize: FONT_SIZE.h2,
    fontWeight: FONT_WEIGHT.bold,
    textAlign: 'center',
  },
  input: {
    fontSize: FONT_SIZE.h5,
    color: COLOR.gunPowder,
    height: '100%',
    paddingHorizontal: '2%',
    width: vw('70%'),
    borderColor: 'black',
    borderWidth: 3,
  },
  placeholderStyle: {
    fontSize: FONT_SIZE.h4,
    color: COLOR.gunPowder,
  },
  borderedButton: {
    borderWidth: 3,
    borderColor: 'black',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: COLOR.black,
    fontSize: FONT_SIZE.h5,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
