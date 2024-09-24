import React, {memo} from 'react';
import {ColorValue, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CONSTANTS from '../../constants';
import Text from '../Text';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  checkedColor?: ColorValue;
  unCheckedColor?: ColorValue;
  size?: number;
  label?: string;
};

const CheckBox = ({
  checked,
  onChange,
  checkedColor = CONSTANTS.COLORS.GREEN,
  unCheckedColor = CONSTANTS.COLORS.WHITE,
  size = 20,
  label,
}: Props) => {
  return (
    <BouncyCheckbox
      isChecked={checked}
      onPress={onChange}
      fillColor={checkedColor as string}
      unFillColor={unCheckedColor as string}
      size={size}
      iconStyle={styles.radius}
      innerIconStyle={styles.radius}
      textComponent={<Text style={styles.label}>{label}</Text>}
    />
  );
};

export default memo(CheckBox);

const styles = StyleSheet.create({
  radius: {
    borderRadius: 4,
  },
  label: {
    paddingStart: 12,
  },
});
