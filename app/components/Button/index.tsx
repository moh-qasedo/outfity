import React, {memo, useMemo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Text from '../Text';
import Icon from '../Icon';
import {ButtonProps} from '../../props';
import CONSTANTS from '../../constants';

const Button = ({
  borderRadius = 100,
  label,
  labelStyle,
  onPress,
  style,
  contentStyle,
  icon,
  varient = CONSTANTS.VARIENT.PRIMARY,
}: ButtonProps) => {
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
          styles.pressable,
          contentStyle,
          {
            borderRadius,
            backgroundColor: pressed
              ? CONSTANTS.COLORS.BLACK10
              : CONSTANTS.COLORS.TRANSPARENT,
          },
        ]}>
        {label && <Text style={textStyle}>{label}</Text>}
        {icon && <Icon {...icon} />}
      </Pressable>
    </View>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    textAlign: 'center',
  },
});
