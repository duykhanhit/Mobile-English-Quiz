import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../assets/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.mainGreen
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
    fontWeight: '700',
    color: '#fff'
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
    color: '#fff'
  },
  point: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.yellow
  },
  perPoint: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.lightGreen
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom: 100,
    width: '100%'
  },
  touch: { 
    padding: 5,
    width: '100%',
    // marginBottom: 60
  },
  continute: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff'
  },
  textContinute: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: colors.mainGreen
  }
});