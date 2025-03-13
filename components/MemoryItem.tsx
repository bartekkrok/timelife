import { Image, Text, View, StyleSheet } from 'react-native';
import { MemoryShortDetails } from '@/types/memory';

const MemoryItem = (props: MemoryShortDetails) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineLine} />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.date}>{props.date}</Text>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default MemoryItem;

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
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
