import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerCamera: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonTakePhotoContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 20,
    justifyContent: 'center'
  },
  headerCamera: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTake: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 200
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
