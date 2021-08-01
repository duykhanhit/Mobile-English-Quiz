import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";

const styles = StyleSheet.create({
  container_block: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  login_block: {
    width: "80%",
    padding: "5%",
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
    paddingHorizontal: 21,
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
    marginBottom: "4%",
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
    marginTop: "5%",
    color: mainGreen,
    marginBottom: "5%",
  },
  "text-rules": {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
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
