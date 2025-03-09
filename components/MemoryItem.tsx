import { Image, Text, View, StyleSheet } from 'react-native';
import { MemoryShortDetails } from '@/types/memory';

const MemoryItem = (props: MemoryShortDetails) => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.image} />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.date}</Text>
      </View>
    </View>
  );
};

export default MemoryItem;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
