import {StyleSheet} from 'react-native';
import {vw, vh, isSmallDevice, isAndroid} from '../../../helpers/deviceHelper';
import {
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  HIT_SLOP,
} from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    width: '100%', // 100% of parent width
    height: '100%', // 100% of parent height
    backgroundColor: COLOR.layout,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 10,
    backgroundColor: COLOR.white,
    width: vw('80%'),
    paddingVertical: vh('2%'),
    paddingHorizontal: vw('5%'),
    alignItems: 'center',
  },
  noOffset: {
    paddingTop: 0,
  },
  title: {
    paddingTop: vh('1.5%'),
    textAlign: 'center',
    color: COLOR.gunPowder,
    fontSize: isAndroid() ? FONT_SIZE.h3 : FONT_SIZE.h4,
    fontWeight: FONT_WEIGHT.bold,
  },
  text: {
    marginTop: 10,
    paddingTop: vh('2%'),
    textAlign: 'center',
    color: COLOR.gunPowder,
    fontSize: isAndroid() ? FONT_SIZE.h4 : FONT_SIZE.h5,
  },
  buttonContainer: {
    width: '100%', // 100% of parent width
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontWeight: FONT_WEIGHT.bold,
  },
  containerStyles: {
    marginTop: 10,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: vh('4%'),
    height: vh('4%'),
    resizeMode: 'contain',
  },
  input: {
    marginTop: 20,
    fontSize: FONT_SIZE.h4,
    color: COLOR.gunPowder,
    paddingHorizontal: '2%',
    width: vw('70%'),
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
  },
});
