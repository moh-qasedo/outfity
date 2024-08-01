import CONSTANTS from '../constants';

export const getSlideTitleTransformation = (right: boolean) => ({
  transform: [
    {rotate: right ? '-90deg' : '90deg'},
    {
      translateY:
        (CONSTANTS.DIMENSIONS.SCREEN_WIDTH -
          CONSTANTS.DIMENSIONS.SLIDE_TITLE_CONTAINER_HEIGHT) /
        2,
    },
  ],
});
