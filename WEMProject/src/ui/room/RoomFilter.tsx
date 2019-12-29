import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './RoomFilter.styles';
import { H2 } from '../TextHeaders';

type Props = {
  filterRooms: any
}

export const RoomFilter: React.FunctionComponent<Props> = (props): JSX.Element => {  
  const [happinessScore, setHappinessScore] = React.useState('');
  return (
    <View style={styles.container}>
        <TextInput
          key="happinessScore"
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={happinessScore}
          onChangeText={text => setHappinessScore(text)}
        />
        <View style={styles.button}>
          <Button title="Filter" onPress={() => props.filterRooms(happinessScore)}  />
        </View>
    </View>
  );
};