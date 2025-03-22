import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { MemoryShortDetails } from '@/types/memory';
import { memoryDetails } from '@/data/test-data';

const MemoryItem = (props: MemoryShortDetails) => {
  const router = useRouter();

  const goToDetails = () => {
    router.push({
      pathname: '/MemoryDetails',
      params: { memory: JSON.stringify(memoryDetails) },
    });
  };

  return (
    <Pressable onPress={goToDetails}>
      <View style={styles.timelineItem}>
        <View style={styles.timelineLine} />
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MemoryItem;

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineLine: {
    width: 3,
    backgroundColor: '#800F2F',
    position: 'absolute',
    left: 25,
    top: 0,
    bottom: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginLeft: 20,
    shadowColor: '#A18AFF',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: '90%',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#57007F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  date: {
    fontSize: 14,
    color: '#800F2F',
    marginBottom: 4,
  },
});
