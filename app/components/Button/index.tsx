import React, {memo, useMemo} from 'react';
import {Pressable, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Text from '../Text';
import {Varient} from '../../types';
import CONSTANTS from '../../constants';

type Props = {
  borderRadius?: number;
  label: string;
  labelStyle?: TextStyle;
  onPress: () => void;
  style?: ViewStyle;
  varient: Varient;
};

const Button = ({
  borderRadius = 100,
  label,
  labelStyle,
  onPress,
  style,
  varient = CONSTANTS.VARIENT.PRIMARY,
}: Props) => {
  const {containerStyle, textStyle} = useMemo(
    () => ({
      textStyle: StyleSheet.flatten([
        styles.label,
        {
          color:
            varient == CONSTANTS.VARIENT.PRIMARY
              ? CONSTANTS.COLORS.WHITE
              : CONSTANTS.COLORS.BLACK,
        },
        labelStyle,
      ]),
      containerStyle: StyleSheet.flatten([
        {
          borderRadius: borderRadius,
          backgroundColor:
            varient == CONSTANTS.VARIENT.PRIMARY
              ? CONSTANTS.COLORS.GREEN
              : varient == CONSTANTS.VARIENT.TEXT
              ? CONSTANTS.COLORS.TRANSPARENT
              : CONSTANTS.COLORS.LIGHT_GRAY,
        },
        style,
      ]),
    }),
    [borderRadius, labelStyle, style, varient],
  );
  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            ...styles.pressable,
            borderRadius,
            backgroundColor: pressed
              ? CONSTANTS.COLORS.BLACK10
              : CONSTANTS.COLORS.TRANSPARENT,
          },
        ]}>
        <Text style={textStyle}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    textAlign: 'center',
  },
});
