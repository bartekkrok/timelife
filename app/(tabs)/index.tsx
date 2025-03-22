import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';

import { memoryList } from '@/data/test-data';
import MemoryItem from '@/components/MemoryItem';
import FilterBar from '@/components/FilterBar';
import { ThemedText } from '@/components/ThemedText';
import { MemoryShortDetails } from '@/types/memory';
import LifeGrid from '@/components/LifeGrid';

export default function TimelineScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LifeGrid events={memoryList} />
      <FilterBar />
      <FlashList<MemoryShortDetails>
        data={memoryList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MemoryItem {...item} />}
        estimatedItemSize={100}
        ListFooterComponent={
          <ThemedText type="defaultSemiBold" style={styles.debugText}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  debugText: {
    marginTop: 16,
    marginBottom: 32,
  },
});
