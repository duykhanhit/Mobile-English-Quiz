import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
    marginVertical: 20
  },
  congratulations: {
    fontSize: 26,
    fontWeight: '700'
  },
  avatar: {
    flex: 1
  },
  image: {
    width: width*.8,
    height: width*.8,
    borderRadius: 20
  },
  score: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  textPoint: {
    fontSize: 22,
    fontWeight: '700',

  },
  point: {
    fontSize: 24,
    fontWeight: '900',
    color: 'green'
  },
  perPoint: {
    fontSize: 22,
    fontWeight: '900',
    color: 'black'
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
    width: '100%'
  },
  touch: { 
    padding: 5,
    width: '100%',
    // marginBottom: 60
  },
  continute: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  textContinute: {
    fontWeight: '700',
    textTransform: 'uppercase',
  }
});