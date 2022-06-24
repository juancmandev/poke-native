import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColorByStat } from '../utils/getColorByStat';

export default function PokemonStats(props) {
  const { stats } = props;

  const barStyles = (number, stat) => {
    return {
      backgroundColor: `${getColorByStat(stat)}`,
      width: `${number}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item) => (
        <View key={item.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.textStat}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={[styles.bar, barStyles(item.base_stat, item.stat.name)]}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 4,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  blockTitle: {
    width: '30%',
  },
  textStat: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bar: {
    height: 8,
    borderRadius: 12,
  },
});
