// import { StyleSheet } from "react-native";
// import { mainGreen } from "../../assets/colors/index";
// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFDED"
//   },
//   "view-header": {
//     width: "100%",
//     height: 88,
//     backgroundColor: mainGreen,
//     borderBottomRightRadius: 12,
//     borderBottomLeftRadius: 12,
//     justifyContent: "flex-end",
//   },
//   "view-title": {
//     fontWeight: "700",
//     fontSize: 29,
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 14,
//   },
//   "view-list-question": {
//     alignItems: "center",
//   },
//   "exam-blog": {
//     width: "94%",
//     height: 114,
//     padding: 18,
//     backgroundColor: "#E4EBF1",
//     flexDirection: "row",
//     marginTop: 18,
//     overflow: "hidden",
//   },
//   last_item: {
//     marginBottom: 70,
//     width: "94%",
//     height: 114,
//     padding: 18,
//     backgroundColor: "#E4EBF1",
//     flexDirection: "row",
//     marginTop: 18,
//     overflow: "hidden",
//   },
//   "custom-text-blog": {
//     marginLeft: 20,
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   "title-text-blog": {
//     color: "#0A52A8",
//     fontStyle: "normal",
//     fontWeight: "bold",
//     fontSize: 20,
//     lineHeight: 24,
//   },
//   "common-text-blog": {
//     fontStyle: "normal",
//     fontWeight: "bold",
//     fontSize: 15,
//     lineHeight: 18,
//   },
// });
import { StyleSheet } from "react-native";
import * as colors from "../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#533A71"
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 30,
    paddingHorizontal: 20,
    color: "#FFFDED"
  },
  containerScrollView: {
    flex: 1,
    padding: 15,
  },
  examedItem: {
    backgroundColor: "#FFFDED",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .2
  },
  rightItem: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row'
  },
  leftItem: {
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#456990"
  },
  examName: {
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 20,
    opacity: .75,
    color: "#9A031E"
  },
  examType: {
    fontWeight: "500", 
    opacity: .5
  },
  correctNumber: {
    fontWeight: "500",
    fontSize: 24,
  },
  numberQues: {
    fontSize: 16,
    fontWeight: "700",
    color: "#9A031E"
  },
  dateExam: {
    fontWeight: "500",
    opacity: .5
  }
});
