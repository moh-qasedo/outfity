import React, {memo} from 'react';
import {View} from 'react-native';

type Props = {
  width: number;
  height: number;
};

const Spacer = (props: Props) => {
  return <View style={{...props}} />;
};

export default memo(Spacer);
