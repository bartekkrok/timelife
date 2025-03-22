import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import type { MemoryDetails } from '@/types/memory';
import { format } from 'date-fns';
import MapView, { Marker } from 'react-native-maps';
import { useLocalSearchParams } from 'expo-router';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

type RouteParams = {
  MemoryDetails: {
    memory: MemoryDetails;
  };
};

export default function MemoryDetails() {
  const params = useLocalSearchParams();
  const memory = JSON.parse(params.memory as string) as MemoryDetails;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom'] as Edge[]}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title & Date */}
        <View style={[styles.paddingHorizontal, { marginTop: 16 }]}>
          <Text style={styles.title}>{memory.title}</Text>
          <Text style={styles.date}>{format(new Date(memory.date), 'MMMM d, yyyy')}</Text>
        </View>

        {/* Description */}
        <View style={styles.paddingHorizontal}>
          {memory.description && <Text style={styles.description}>{memory.description}</Text>}
        </View>

        {/* Media */}
        {memory.media && memory.media.length > 0 && (
          <View style={styles.section}>
            <View style={styles.paddingHorizontal}>
              <Text style={styles.sectionTitle}>Media</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {memory.media.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.mediaItem}
                  onPress={() => Linking.openURL(item.url)}
                >
                  {item.thumbnailUrl && item.type === 'image' ? (
                    <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
                  ) : (
                    <View style={styles.placeholder}>
                      <Text style={styles.placeholderText}>{item.type.toUpperCase()}</Text>
                    </View>
                  )}
                  {item.title && <Text style={styles.mediaTitle}>{item.title}</Text>}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Location */}
        {memory.location && (
          <View style={styles.paddingHorizontal}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Location</Text>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: memory.location.latitude,
                  longitude: memory.location.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: memory.location.latitude,
                    longitude: memory.location.longitude,
                  }}
                  title={memory.location.placeName || 'Memory Location'}
                />
              </MapView>
            </View>
          </View>
        )}

        {/* Tags */}
        {memory.tags && memory.tags.length > 0 && (
          <View style={styles.paddingHorizontal}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tags</Text>
              <View style={styles.tagList}>
                {memory.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>#{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Privacy */}

        <View style={styles.paddingHorizontal}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Privacy</Text>
            <Text>{memory.isPrivate ? 'Private' : 'Public'}</Text>
          </View>
        </View>

        {/* Shared with */}
        {memory.sharedWith && memory.sharedWith.length > 0 && (
          <View style={styles.paddingHorizontal}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Shared With</Text>
              {memory.sharedWith.map((userId) => (
                <Text key={userId} style={styles.sharedUser}>
                  👤 {userId}
                </Text>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  container: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  mediaItem: {
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 6,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 12,
    color: '#333',
  },
  mediaTitle: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
  },
  sharedUser: {
    fontSize: 14,
    marginTop: 4,
  },
});
