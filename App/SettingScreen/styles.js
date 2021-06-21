import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  backgroundContainer: { 
    height: 200, 
    width: "100%" ,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  background: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '100%',
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    height: '100%'
  },
  buttonEdit: {
    width: "100%",
    alignItems: "flex-end",
    padding: 5,
  },
  avatar: {
    // flex: 1
    borderColor: "#333",
    borderWidth: 5,
    borderRadius: 200,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 200,
  },
  inforContainer: {
    width: "100%",
    // flex: 1
  },
  lableInput: {
    fontWeight: "700",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    // fontFamily: "SwissCondensed"
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  touch: {
    width: "100%",
    // marginBottom: 60
  },
  logout: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  textLogout: {
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
