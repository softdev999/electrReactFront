import DeviceInfo from 'react-native-device-info';
import {Dimensions, Platform, PixelRatio} from 'react-native';
import {isIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// SCALING FACTOR VALUES
const BASE_WIDTH = Platform.OS === 'android' ? 370 : 350;
const FACTOR = Platform.OS === 'android' ? 110 : 100;

// SCALED VALUE
const SCALE = SCREEN_WIDTH / BASE_WIDTH;

export const Layout = {height: SCREEN_HEIGHT, width: SCREEN_WIDTH};
export const isLandscape = DeviceInfo.isLandscape();
export const buildNumber = DeviceInfo.getBuildNumber();
export const version = DeviceInfo.getVersion();
export const isSmallDevice = () => SCREEN_WIDTH < 375;
export const isTablet = () => DeviceInfo.isTablet();
export const isAndroid = () => Platform.OS === 'android';

// WIDTH BASED ON DEVICE WIDTH
export const vw = dpi => SCREEN_WIDTH * (parseFloat(dpi) / 100);

// HEIGHT BASED ON DEVICE HEIGHT
export const vh = dpi => SCREEN_HEIGHT * SCALE * (parseFloat(dpi) / FACTOR);

export const normalize = size => {
  const scaledSize = size * SCALE;
  const subtract = isAndroid() ? 2 : 0;

  return Math.round(PixelRatio.roundToNearestPixel(scaledSize)) - subtract;
};

export const offset = {
  top: isAndroid() ? 0 : isIphoneX() ? 44 : 20,
  bottom: isAndroid() ? 0 : isIphoneX() ? 20 : 0,
};

export const setHeaderHeight = () => {
  if (isIphoneX()) {
    return vh('5%');
  } else if (isAndroid()) {
    return 50;
  } else {
    return 40;
  }
};
