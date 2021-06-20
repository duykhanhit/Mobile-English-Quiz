import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  buttonEdit: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 5
  },
  avatar: {
    // flex: 1
    borderColor: '#333',
    borderWidth: 5,
    borderRadius: 200
  },
  image: {
    width: width*.5,
    height: width*.5,
    borderRadius: 200
  },
  inforContainer: {
    width: '100%'
  },
  lableInput: {
    fontWeight: '700'
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    // fontFamily: "SecretCode"
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  touch: { 
    // padding: 5,
    width: '100%',
    // marginBottom: 60
  },
  logout: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    height: 50,
    flexDirection: 'row'
  },
  textLogout: {
    fontWeight: '700',
    textTransform: 'uppercase',
  }
});