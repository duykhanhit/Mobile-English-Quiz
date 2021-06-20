import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  header: {
    flex: 3,
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
    resizeMode: "cover",
  },
  titleContainer: {
    paddingLeft: 20,
  },
  imageContainer: {
    flex: 1,
    width: "100%"
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: 'AptimaBold'
  },
  contentContainer: {
    flex: 7,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
  },
  rules: {

  },
  textContent: {
    fontSize: 20,
    fontFamily: 'Aptima'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  touch: { 
    padding: 5,
    width: '100%',
    marginBottom: 60
  },
  degree: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  textDegree: {
    fontWeight: '700',
    textTransform: 'uppercase',
  }
});
