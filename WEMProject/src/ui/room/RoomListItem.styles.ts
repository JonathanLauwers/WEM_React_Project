import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'stretch' },
  header: { flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center' },
  buttons: { flexDirection: 'row', alignItems: 'center'},
  button: { marginRight: 20}
});