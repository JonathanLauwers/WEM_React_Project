import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './AssetFilter.styles';
import { H2 } from '../TextHeaders';

type Props = {
  filterAssets: any
}

export const AssetFilter: React.FunctionComponent<Props> = (props): JSX.Element => {  
  const [filterValue, setFilterValue] = React.useState('');
  return (
    <View style={styles.container}>
        <TextInput
          key="filterValue"
          style={styles.input}
          keyboardType="default"
          placeholder="Name"
          value={filterValue}
          onChangeText={text => setFilterValue(text)}
        />
        <View style={styles.button}>
          <Button title="Filter names" onPress={() => props.filterAssets(filterValue)}  />
        </View>
    </View>
  );
};