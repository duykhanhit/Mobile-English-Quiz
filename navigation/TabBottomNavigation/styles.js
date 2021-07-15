import { StyleSheet } from 'react-native';
import * as colors from "../../assets/colors";

export default StyleSheet.create({
  shadow: {
    shadowOpacity: .5,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: '#aaa'
  }, 
  buttonHistory: { 
    flex: 1,
    position: "relative", 
    alignItems: "center",
  },
  customButton: { 
    borderWidth: 2, 
    borderColor: colors.lightGreen, 
    justifyContent: 'center', 
    backgroundColor: colors.darkGreen, 
    position: 'absolute', 
    padding: 18, 
    top: -20, 
    borderRadius: 200, 
    // shadowColor: '#fff', 
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: .6
  }
});