import React, {memo, PropsWithChildren, useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import CONSTANTS from '../../constants';
import Text from '../Text';

type Props = PropsWithChildren<{
  hint?: string;
  title?: string;
  subtitle?: string;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}>;

const Container = ({
  title,
  subtitle,
  hint,
  children,
  style,
  contentContainerStyle,
  ...restProps
}: Props) => {
  const containerStyle = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style],
  );
  return (
    <View {...restProps} style={containerStyle}>
      <View style={styles.header}>
        {hint && <Text style={styles.hint}>{hint}</Text>}
        {title && <Text style={styles.title}>{title}</Text>}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
};

export default memo(Container);

const styles = StyleSheet.create({
  container: {
    borderRadius: CONSTANTS.DIMENSIONS.BORDER_RADIUS,
    backgroundColor: CONSTANTS.COLORS.WHITE,
  },
  header: {
    padding: 40,
    gap: 12,
  },
  title: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    fontSize: CONSTANTS.FONT_SIZES.X28,
    lineHeight: 34,
    textAlign: 'center',
  },
  subtitle: {
    color: CONSTANTS.COLORS.SLATE_GRAY,
    lineHeight: 24,
    textAlign: 'center',
  },
  hint: {
    color: CONSTANTS.COLORS.SLATE_GRAY,
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    fontSize: CONSTANTS.FONT_SIZES.X12,
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
