import {ColorValue} from 'react-native';

export type SlideModel = {
  title: string;
  subtitle: string;
  description: string;
  right: boolean;
  color: ColorValue;
  image: number;
};

export type LayoutModel = {
  id: string;
  items: {
    id: string;
    imageUrl?: number;
    backgroundColor?: ColorValue;
  }[];
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignupCredentials = {
  email: string;
  password: string;
  confirmedPassword: string;
};
