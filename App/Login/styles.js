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
  login_block: {
    width: "80%",
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
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  touchable: {
    height: 18.18,
  },
  "register-account": {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    color: "#000000",
  },
  "text-touchable": {
    fontWeight: "bold",
    fontSize: 15,
    color: mainGreen,
    marginLeft: 5,
  },
  input_block: {
    paddingHorizontal: 21,
    marginBottom: 10.17,
  },
  text_input: {
    fontWeight: "bold",
    fontSize: 32,
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
    paddingRight: 12,
  },
  validate_text: {
    color: "red",
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
    fontWeight: "normal",
    color: "#fff",
  },
  forgot_pass_blog: {
    marginTop: 12,
    marginBottom: 12,
  },
  forgot_password: {
    color: mainGreen,
    textDecorationLine: "underline",
  },
});

export default styles;
