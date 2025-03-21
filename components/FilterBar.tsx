import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

export default function FilterBar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDate = (days: number) => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(nextDate);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => changeDate(-1)}>
        <Feather name="chevron-left" size={24} />
      </Pressable>

      <ThemedText type="defaultSemiBold">{selectedDate.toDateString()}</ThemedText>

      <Pressable onPress={() => changeDate(1)}>
        <Feather name="chevron-right" size={24} />
      </Pressable>

      <View style={{ flex: 1 }} />

      <Pressable onPress={() => console.log('Open filters')}>
        <Feather name="settings" size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 10,
  },
});
