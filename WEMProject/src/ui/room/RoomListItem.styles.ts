import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'stretch' },
  leftContainer: {flexDirection: 'row', alignItems: 'flex-start' },
  imageContainer: { margin: 8, alignContent: 'center' },
  header: { flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center' },
  buttons: { flexDirection: 'row', alignItems: 'center' },
  button: { marginRight: 8 }
});