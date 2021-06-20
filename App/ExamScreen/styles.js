import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
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
    fontWeight: '700'
  },
  totalQuesNumber: {
    fontSize: 20,
    color: 'rgba(0,0,0,.5)'
  },
  quizsBar: {
    width: '100%',
    // height: 50,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  quizBar: {
    height: 5,
    // width: '100%',
    flex: 1,
    marginHorizontal: 1,
    backgroundColor: 'green',
    borderRadius: 2
  },
  quiz: {
    maxHeight: 200,
    marginTop: 20
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
    borderColor: 'rgba(0,0,0,.5)'
  },
  selected: {
    backgroundColor: '#000',
  },
  textSelected: {
    color: '#fff'
  },
  footer: {
    marginBottom: 80,
    width: '100%',
    flexDirection: 'row',
  },
  touch: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  previous: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  next: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000'
  },
  textNext: {
    color: '#fff'
  },
  closeIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});