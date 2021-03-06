import { StyleSheet, Dimensions } from "react-native";
import * as colors from '../../assets/colors';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  backgroundContainer: { 
    height: 130, 
    width: "100%" ,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    zIndex: 0
  },
  background: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '100%',
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: colors.mainGreen
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFDED"
    // marginTop: -130,
  },
  buttonEdit: {
    width: "100%",
    alignItems: "flex-end",
    padding: 5,
  },
  closeAndCheckContain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  avatar: {
    borderColor: "#333",
    borderWidth: 5,
    borderRadius: 200,
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundCamera: {
    backgroundColor: 'rgba(0,0,0,.3)',
    width: width * 0.3,
    height: width * 0.3,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
    // height: width * 0.3,
  },
  cameraIcon: {
    position: 'absolute',
    marginTop: 130
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 200,
  },
  inforContainer: {
    width: "100%",
    flex: 1
  },
  lableInput: {
    fontWeight: "700",
    color: colors.darkGreen,
    marginTop: 15,
  },
  genderContainer: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textGender: {
    fontWeight: "700",
    color: colors.darkGreen
  },
  input: {
    borderColor: "#999",
    borderWidth: 2,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
    // fontFamily: "SwissCondensed"
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainerLogout: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 100
  },
  buttonContainerChangePass: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10
  },
  buttonContainerConfirmChangePass: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10
  },
  touch: {
    width: "100%",
  },
  logout: {
    borderWidth: 2,
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderRadius: 5,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  btnChangePass: {
    borderWidth: 2,
    backgroundColor: "#2C2C54",
    borderColor: "#2C2C54",
    borderRadius: 5,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  btnConfirmChangePass: {
    borderWidth: 2,
    backgroundColor: "#A40E4C",
    borderColor: "#A40E4C",
    borderRadius: 5,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  photo: {
    borderWidth: 2,
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
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
    color: '#fff'
  },
  barContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 30,
    
    // backgroundColor: "transparent",
  },
  bar: {
    width: 50,
    height: 5,
    backgroundColor: "#aaa",
    borderRadius: 3,
  },
  buttonsAvatar: {
    width: '100%',
    height: '50%',
    padding: 20,
  },
  buttonsChangePass: {
    width: '100%',
    height: '80%',
    padding: 20,
  },
  textUploadPhoto: {
    textAlign: 'center',
    // fontFamily: 'Helve',
    fontSize: 24,
    fontWeight: '700',
    color: colors.darkGreen
  },
  textChoosePhoto: {
    textAlign: 'center',
    // fontFamily: 'Helve',
    fontSize: 14,
    fontWeight: '500',
    color: colors.darkGreen
  },
  buttonsUpload: {
    width: "100%",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 60
  },
  errorContainer: {
    width: "100%",
  },
  textError: {
    color: "red",
    fontSize: 12
  }
});
