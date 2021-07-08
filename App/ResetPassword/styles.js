import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";

const styles = StyleSheet.create({
  wrapper_container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    width: "80%",
    position: "absolute",
    transform: [{ translateY: 150 }],
  },
  login_block: {
    width: "100%",
    padding: "5%",
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    zIndex: 3,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  input_block: {
    position: "relative",
    paddingHorizontal: 9,
  },
  text_input: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 19,
    marginBottom: 25.64,
  },
  input: {
    backgroundColor: "#E4EBF1",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    height: 45,
    fontSize: 14,
    color: "#A0A0A0",
    paddingLeft: 41,
    marginBottom: 26.17,
  },
  icons: {
    position: "absolute",
    left: 20,
    top: 12,
    zIndex: 3,
  },
  "text-title": {
    fontWeight: "bold",
    fontSize: 32,
    color: "#000000",
    textAlign: "center",
    marginTop: 17,
    color: mainGreen,
  },
  "text-rules": {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    marginTop: 21,
    marginBottom: 30,
  },
  "continue-button": {
    width: 253,
    backgroundColor: mainGreen,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 38,
  },
  "continue-text": {
    fontWeight: "normal",
    fontSize: 22,
    color: "#fff",
  },
});

export default styles;
