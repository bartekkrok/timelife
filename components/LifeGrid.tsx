import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { format, startOfYear, addDays, isSameDay, getMonth } from 'date-fns';
import { MemoryShortDetails } from '@/types/memory';

type Props = {
  events: MemoryShortDetails[];
};

const SQUARE_SIZE = 16;
const GUTTER = 4;
const WEEKS_IN_YEAR = 53;
const DAYS_IN_WEEK = 7;

export default function LifeGrid({ events }: Props) {
  const yearsWithEvents = useMemo(() => {
    const years = Array.from(new Set(events.map((e) => new Date(e.date).getFullYear())));
    return years.sort((a, b) => b - a);
  }, [events]);

  const [selectedYear, setSelectedYear] = useState<number>(yearsWithEvents[0]);

  const yearStart = startOfYear(new Date(selectedYear, 0, 1));
  const days = useMemo(() => {
    return Array.from({ length: WEEKS_IN_YEAR * DAYS_IN_WEEK }).map((_, i) =>
      addDays(yearStart, i),
    );
  }, [selectedYear]);

  const hasEvent = (day: Date) => events.some((e) => isSameDay(new Date(e.date), day));

  const weekColumns = Array.from({ length: WEEKS_IN_YEAR }).map((_, weekIndex) => {
    return days.slice(weekIndex * DAYS_IN_WEEK, (weekIndex + 1) * DAYS_IN_WEEK);
  });

  return (
    <View style={styles.container}>
      <View style={styles.yearSelector}>
        {yearsWithEvents.map((year) => (
          <TouchableOpacity
            key={year}
            onPress={() => setSelectedYear(year)}
            style={styles.yearButton}
          >
            <Text style={[styles.yearText, year === selectedYear && styles.yearTextSelected]}>
              {year}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.monthLabels}>{getMonthLabels(weekColumns)}</View>

          <View style={styles.gridContainer}>
            {weekColumns.map((week, weekIndex) => (
              <View key={weekIndex} style={styles.weekColumn}>
                {week.map((day, dayIndex) => (
                  <View
                    key={dayIndex}
                    style={[
                      styles.daySquare,
                      { backgroundColor: hasEvent(day) ? '#4CAF50' : '#E0E0E0' },
                    ]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function getMonthLabels(weekColumns: Date[][]): React.ReactNode[] {
  let lastMonth = -1;
  return weekColumns.map((week, index) => {
    const month = getMonth(week[0]);
    if (month !== lastMonth) {
      lastMonth = month;
      return (
        <Text key={index} style={styles.monthLabel}>
          {format(week[0], 'MMM')}
        </Text>
      );
    }
    return <View key={index} style={{ width: SQUARE_SIZE + GUTTER }} />;
  });
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  yearSelector: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
  },
  yearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  yearText: {
    fontSize: 14,
    color: '#444',
  },
  yearTextSelected: {
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  monthLabels: {
    flexDirection: 'row',
    paddingBottom: 4,
    paddingLeft: 2,
  },
  monthLabel: {
    fontSize: 10,
    color: '#666',
    width: SQUARE_SIZE + GUTTER,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
  },
  weekColumn: {
    flexDirection: 'column',
    marginRight: GUTTER,
    gap: GUTTER,
  },
  daySquare: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: 2,
  },
});
