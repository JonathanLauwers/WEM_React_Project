import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {   display: "flex", flexDirection: "column", alignContent: 'stretch', justifyContent: 'space-between', margin: 10},
  header: { display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "baseline" } ,
  description: { marginTop: 25 },
  descriptionText: { marginTop: 15 },
});