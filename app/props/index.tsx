import {ColorValue, TextStyle, ViewStyle} from 'react-native';
import {IconType, Varient} from '../types';

export type IconProps = {
  type: IconType;
  name: string;
  size: number;
  color: ColorValue;
  backgroundColor?: ColorValue;
  style?: ViewStyle;
};

export type ButtonProps = {
  onPress: () => void;
  borderRadius?: number;
  label?: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  icon?: IconProps;
  varient?: Varient;
  size?: number;
};
