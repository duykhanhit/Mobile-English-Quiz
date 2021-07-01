import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";

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
    top: -20,
    width: 310,
    height: 340,
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
  },
  touchable: {
    height: 18.18,
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
    marginLeft: 5,
  },
  input_block: {
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
    paddingRight: 12,
    marginBottom: 26.17,
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
  forgot_pass_blog: {
    marginTop: 12,
    marginBottom: 12
  },
  forgot_password: {
    color: mainGreen,
    textDecorationLine: "underline",
  },
});

export default styles;
