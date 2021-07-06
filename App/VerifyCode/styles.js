import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";

const styles = StyleSheet.create({
  wrapper_container: {
    flex: 1,
    height: "100%",
    width: "80%",
    position: "absolute",
    top: 0,
  },
  container_block: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  login_block: {
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
    paddingHorizontal: 21,
    marginTop: 30,
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
    left: 30,
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
    paddingHorizontal: 20,
  },
  "continue-button": {
    width: 253,
    backgroundColor: mainGreen,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  "continue-text": {
    fontWeight: "normal",
    fontSize: 22,
    color: "#fff",
  },
});

export default styles;
