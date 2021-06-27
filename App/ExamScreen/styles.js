import { StyleSheet } from 'react-native';
import * as colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textQuesNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.mainGreen
  },
  totalQuesNumber: {
    fontSize: 20,
    color: colors.lightGreen
  },
  quizsBar: {
    width: '100%',
    // height: 50,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  quizBarTouched: {
    height: 5,
    // width: '100%',
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: 'green',
    borderRadius: 2
  },
  quizBar: {
    height: 5,
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: 'red',
    borderRadius: 2
  },
  inThisQuesBar: {
    height: 5,
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: "orange",
    borderRadius: 2,
  },
  quizContainer: {
    maxHeight: 200,
    width: '100%',
<<<<<<< HEAD
<<<<<<< HEAD
    borderRadius: 10,
    shadowColor: colors.lightGreen,
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: .6,
    shadowRadius: 5,
=======
>>>>>>> 0d511a1 (edit GUI login setstarted, change gender by radio)
    marginTop: 20,
    backgroundColor: colors.mainGreen,
    paddingVertical: 20,
=======
>>>>>>> b8ed626 (change GUI ExameScreen)
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: .4,
    shadowRadius: 5,
    marginTop: 20,
  },
  quiz: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: colors.mainGreen,
    paddingVertical: 20,
  },
  quiz: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: colors.mainGreen,
    paddingVertical: 20,
  },
  question: {
    fontFamily: 'Helve',
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff'
  },
  answers: {
    flex: 1,
    width: '100%'
  },
  answer: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.3)'
  },
  selected: {
    backgroundColor: colors.yellow,
  },
  textSelected: {
    color: '#fff'
  },
  footer: {
    // marginBottom: 80,
    width: '100%',
    flexDirection: 'row',
  },
  touch: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: colors.mainGreen,
    borderRadius: 5,
  },
  previous: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  textPre:{
    textTransform: 'uppercase',
    fontWeight: '700',
    color: colors.mainGreen
  },
  next: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000',
    backgroundColor: colors.mainGreen,
  },
  textNext: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  closeIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});