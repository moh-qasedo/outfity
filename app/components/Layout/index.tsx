import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from '../Screen';
import Pattern from '../Pattern';
import {LayoutModel} from '../../models';

type Props = {
  data: LayoutModel;
};

const Layout = ({data}: Props) => {
  return (
    <Screen style={styles.container}>
      {data.items.map(item =>
        item.imageUrl ? (
          <Pattern key={item.id} image={item.imageUrl} style={styles.item} />
        ) : (
          <View
            key={item.id}
            style={{...styles.item, backgroundColor: item.backgroundColor}}
          />
        ),
      )}
    </Screen>
  );
};

export default memo(Layout);

const styles = StyleSheet.create({
  container: StyleSheet.absoluteFillObject,
  item: {
    flex: 1,
  },
});
