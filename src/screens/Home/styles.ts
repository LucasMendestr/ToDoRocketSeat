import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    alignContent: 'center',
    alignItems: 'center'
  },
  newTask: {
    marginTop: 20,
    backgroundColor: '#000',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
  },
  circle: {
      color: '#FFF',
  },
  Tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  viewCreate: {
    flexDirection: 'row',
  },
  textCreate: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 10,
    
  },
  textDone: {
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 10,
  },
  numberTask: {
    color: '#fff'
  },
  numberBoxTask: {
    backgroundColor: '#333333',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 7,
  },
  listEmptyText: {
    color: '#fff'
  }
})