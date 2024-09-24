import {LayoutModel, SlideModel} from '../models';

export const slides: SlideModel[] = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: '#BFEAF5',
    right: false,
    image: require('../assets/images/outfits/outfit-1.png'),
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    right: true,
    image: require('../assets/images/outfits/outfit-2.png'),
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      ' Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    right: false,
    image: require('../assets/images/outfits/outfit-3.png'),
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    right: true,
    image: require('../assets/images/outfits/outfit-6.png'),
  },
];

export const layouts = {
  login: {
    id: 'login',
    items: [
      {
        id: '1',
        imageUrl: require('../assets/images/patterns/pattern-1.png'),
      },
      {
        id: '2',
        backgroundColor: '#0C0D34',
      },
    ],
  } as LayoutModel,
  createAccount: {
    id: 'createAccount',
    items: [
      {
        id: '1',
        imageUrl: require('../assets/images/patterns/pattern-2.png'),
      },
      {
        id: '2',
        backgroundColor: '#0C0D34',
      },
    ],
  } as LayoutModel,
  forgotPassword: {
    id: 'forgotPassword',
    items: [
      {
        id: '1',
        imageUrl: require('../assets/images/patterns/pattern-3.png'),
      },
      {
        id: '2',
        backgroundColor: '#0C0D34',
      },
    ],
  } as LayoutModel,
};
