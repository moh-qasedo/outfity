import React, {memo, useMemo} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {ViewStyle} from 'react-native';

type IconType =
  | 'MaterialIcons'
  | 'Ionicons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Entypo'
  | 'AntDesign'
  | 'Feather'
  | 'EvilIcons'
  | 'Foundation'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

type Props = {
  type: IconType;
  name: string;
  size: number;
  style: ViewStyle;
  color: string;
};

const iconSets: {[key in IconType]: any} = {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Entypo,
  AntDesign,
  Feather,
  EvilIcons,
  Foundation,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const Icon = ({type, ...restProps}: Props) => {
  const IconComponent = useMemo(() => iconSets[type], [type]);
  return <IconComponent {...restProps} />;
};

export default memo(Icon);
