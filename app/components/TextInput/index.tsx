import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import CONSTANTS from '../../constants';
import Icon from '../Icon';
import {IconProps} from '../../props';

type Props = TextInputProps & {
  containerStyle?: ViewStyle;
  leadingIconProps?: IconProps;
  trailingIconProps?: IconProps;
};

const TextInput = ({
  style,
  containerStyle,
  leadingIconProps,
  trailingIconProps,
  ...restProps
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const {borderColor, iconColor} = useMemo(
    () =>
      isFocused
        ? {
            borderColor: containerStyle?.borderColor ?? CONSTANTS.COLORS.GREEN,
            iconColor: CONSTANTS.COLORS.GREEN,
          }
        : {
            borderColor: CONSTANTS.COLORS.LIGHT_GRAY,
            iconColor: CONSTANTS.COLORS.SLATE_GRAY,
          },
    [isFocused, containerStyle],
  );
  const inputContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.container, containerStyle, {borderColor}]),
    [containerStyle, borderColor],
  );
  const textInputStyle = useMemo(
    () => StyleSheet.flatten([styles.input, style]),
    [style],
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={inputContainerStyle}>
      {leadingIconProps && <Icon {...leadingIconProps} color={iconColor} />}
      <RNTextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={textInputStyle}
        placeholderTextColor={CONSTANTS.COLORS.SLATE_GRAY}
        selectionColor={borderColor}
        {...restProps}
      />
      {trailingIconProps && <Icon {...trailingIconProps} />}
    </View>
  );
};

export default memo(TextInput);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: CONSTANTS.COLORS.GREEN,
    gap: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 20,
    color: CONSTANTS.COLORS.BLACK,
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_REGULAR,
    fontSize: CONSTANTS.FONT_SIZES.X14,
  },
});
