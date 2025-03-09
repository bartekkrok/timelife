import { Image, Text, View } from 'react-native';
import { MemoryShortDetails } from '@/types/memory';

const MemoryItem = (props: MemoryShortDetails) => {
  return (
    <View>
      <Image source={require('@/assets/images/partial-react-logo.png')} />
      <View>
        <Text>{props.title}</Text>
        <Text>{props.date}</Text>
      </View>
    </View>
  );
};

export default MemoryItem;
