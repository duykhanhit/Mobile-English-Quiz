import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";

const styles = StyleSheet.create({
  wrapper_container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  container_block: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  login_block: {
    width: "80%",
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    zIndex: 3,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
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
    lineHeight: 37,
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
    lineHeight: 37,
    color: "#000000",
    textAlign: "center",
    marginTop: 17,
    color: mainGreen,
  },
  "text-rules": {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
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
    lineHeight: 27,
    color: "#fff",
  },
});

export default styles;
