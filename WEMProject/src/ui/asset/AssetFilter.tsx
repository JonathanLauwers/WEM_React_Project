import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './AssetFilter.styles';
import { H2 } from '../TextHeaders';

type Props = {
  filterAssets: any
}

export const AssetFilter: React.FunctionComponent<Props> = (props): JSX.Element => {  
  return (
    <View style={styles.container}>
        <TextInput
          key="filterValue"
          style={styles.input}
          keyboardType="default"
          placeholder="Search name"
          onChangeText={text => props.filterAssets(text)}
        />
    </View>
  );
};