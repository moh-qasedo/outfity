import {Dimensions} from 'react-native';
import {FontWeight} from '../types';

const {width, height} = Dimensions.get('window');

const CONSTANTS = {
  DIMENSIONS: {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    SLIDE_HEIGHT: 0.61 * height,
    SLIDE_TITLE_CONTAINER_HEIGHT: 100,
    SLIDE_BORDER_RADIUS: 75,
  },
  COLORS: {
    WHITE: 'white',
    BLACK: 'black',
    SLATE_GRAY: 'slategray',
  },
  FONT_FAMILIES: {
    LATO: 'Lato',
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
