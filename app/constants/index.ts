import {Dimensions} from 'react-native';
import {FontWeight, Language, Orientation, Platform, Varient} from '../types';

const {width, height} = Dimensions.get('window');

const CONSTANTS = {
  DIMENSIONS: {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    SLIDE_HEIGHT: 0.61 * height,
    SLIDE_TITLE_CONTAINER_HEIGHT: 100,
    SLIDE_BORDER_RADIUS: 75,
  },
  PLATFORM: {
    ANDROID: 'android' as Platform,
    IOS: 'ios' as Platform,
  },
  LANGUAGE: {
    ENGLISH: 'en' as Language,
    ARABIC: 'ar' as Language,
  },
  ORIENTATION: {
    VERTICAL: 'vertical' as Orientation,
    HORIZONTAL: 'horizontal' as Orientation,
  },
  VARIENT: {
    DEFAULT: 'default' as Varient,
    PRIMARY: 'primary' as Varient,
    SECONDARY: 'secondary' as Varient,
    OUTLINED: 'outlined' as Varient,
    TEXT: 'text' as Varient,
  },
  COLORS: {
    TRANSPARENT: 'transparent',
    WHITE: 'white',
    BLACK: 'black',
    BLACK10: '#00000019',
    BLACK20: '#00000033',
    SLATE_GRAY: 'slategray',
    LIGHT_GRAY: '#0C0D340D',
    GREEN: '#2CB9B0',
    GREEN30: '#2CB9B04D',
    BEIGE: '#F3F0EF',
  },
  FONT_FAMILIES: {
    LATO_REGULAR: 'Lato-Regular',
    LATO_BOLD: 'Lato-Bold',
    LATO_BLACK: 'Lato-Black',
  },
  FONT_WEIGHTS: {
    REGULAR: '400' as FontWeight,
    BOLD: '600' as FontWeight,
  },
  FONT_SIZES: {
    X16: 16,
    X24: 24,
    X80: 80,
  },
};

export default CONSTANTS;
