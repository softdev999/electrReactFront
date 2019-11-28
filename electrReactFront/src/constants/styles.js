import {normalize, isAndroid} from '../helpers/deviceHelper';

export const COLOR = {
  white: '#FFFFFF',
  whiteSmoke: '#FAFAFA',
  black: '#000000',
  curiousBlue: '#3B8BC7',
  lochmara: '#2C6FB4',
  gunPowder: '#4D4D4E',
  eucalypt: '#27ae60',
  red: '#CA3433',
  layout: 'rgba(0,0,0,0.3)',
  darkLayout: 'rgba(0,0,0,0.5)',
};

export const FONT_SIZE = {
  h1: normalize(24),
  h2: normalize(22),
  h3: normalize(18),
  h4: normalize(16),
  h5: normalize(14),
  h6: normalize(12),
  h7: normalize(10),
  h8: normalize(8),
};

export const FONT_WEIGHT = {
  regular: 'regular',
  bold: 'bold',
  superBold: isAndroid() ? 'bold' : '800',
};

export const HIT_SLOP = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10,
};
