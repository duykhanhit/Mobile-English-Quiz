import { StyleSheet } from "react-native";
import { mainGreen, darkGreen } from "../../assets/colors/index";

const styles = StyleSheet.create({
  wrapper_container: {
    flex: 1,
    height: "100%",
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  login_block: {
    width: 310,
    height: 538,
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
  "checking-account-block": {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 10,
    marginTop: 20,
  },
  touchable: {
    height: 18.18,
    marginLeft: 5,
  },
  "register-account": {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 19,
    color: "#000000",
  },
  "text-touchable": {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 19,
    color: mainGreen,
  },
  input_block: {
    position: "relative",
    paddingHorizontal: 21,
  },
  text_input: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 37,
    textAlign: "center",
    marginTop: 19,
    marginBottom: 25.64,
    color: mainGreen,
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
    justifyContent: "center",
  },
  icons: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 30,
    top: 13.17,
    zIndex: 3,
  },
  "login-button-block": {
    alignItems: "center",
    flex: 1,
    marginTop: 8.83,
    paddingHorizontal: 21,
  },
  login_button: {
    width: "100%",
    height: 45,
    backgroundColor: mainGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text_button: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "normal",
    color: "#fff",
  },
  "checkbox-block": {
    flexDirection: "row",
    paddingHorizontal: 11,
    justifyContent: "space-around",
    marginBottom: 20.17,
  },
  date_time_custom: {
    color: "#A0A0A0",
  },
  input_date: {
    borderColor: darkGreen,
    borderWidth: 2,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

export default styles;
