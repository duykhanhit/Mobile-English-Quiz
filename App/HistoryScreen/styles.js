import { StyleSheet } from "react-native";
import * as colors from "../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4789"
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
    marginBottom: 80
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
    borderLeftWidth: 5,
    borderRadius: 5,
  },
  examName: {
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 20,
    opacity: .75,
  },
  examType: {
    fontWeight: "500", 
    opacity: .5
  },
  correctNumber: {
    fontWeight: "500",
    fontSize: 24,
  },
  perNumber: {
    fontSize: 18
  },
  dateExam: {
    fontWeight: "500",
    opacity: .5
  }
});
