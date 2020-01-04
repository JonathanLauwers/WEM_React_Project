import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  separator: { marginHorizontal: 8, borderBottomWidth: 1, borderBottomColor: '#CCC' },
  ticketContainer: { margin: 8, alignContent: 'stretch' },
  addSymbol: { fontSize: 36, color: '#FFF', marginRight: 12}, 
  loader: { alignContent: 'center', marginTop: 50},
  dots: { position: 'absolute', left: 25, right: 0, bottom: 15, justifyContent: 'center', alignItems: 'center'}
});