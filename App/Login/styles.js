import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  login_block: {
    width: 310,
    height: 328,
    position: "absolute",
    top: 234,
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
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 589,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  touchable: {
    width: 70,
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
    color: "#0A52A8",
    marginLeft: 5,
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
    marginBottom: 25.64
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
    marginBottom: 26.17
  },
  icons: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 30,
    top: 13.17,
    zIndex: 3
  },
  'login-button-block': {
    alignItems: 'center',
    flex: 1,
    marginTop: 8.83,
    paddingHorizontal:21 
  },
  login_button: {
    width: '100%',
    height: 45,
    backgroundColor: '#0A52A8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  text_button: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "normal",
    color: '#fff',
    
  }
});

export default styles;
