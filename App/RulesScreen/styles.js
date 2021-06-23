import { StyleSheet } from "react-native";
import * as colors from "../../assets/colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.mainGreen,
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
    color: "#fff"
    // fontFamily: 'Helve'
  },
  contentContainer: {
    flex: 7,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#fff",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.5
  },
  rules: {

  },
  textContent: {
    fontSize: 20,
    fontFamily: 'Helve'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  touch: { 
    padding: 5,
    width: '100%',
  },
  degree: {
    backgroundColor: colors.mainGreen,
    borderWidth: 2,
    borderColor: colors.mainGreen,
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
    color: "#fff"
  }
});
