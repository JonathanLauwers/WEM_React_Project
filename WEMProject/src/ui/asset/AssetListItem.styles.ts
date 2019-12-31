import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'stretch' },
  leftContainer: {flexDirection: 'row', alignItems: 'flex-start' },
  imageContainer: { margin: 8, alignItems: 'center' },
  header: { justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 },
  buttons: { flexDirection: 'row'},
  button: { marginRight: 8 }
});