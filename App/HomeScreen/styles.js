import { StyleSheet } from "react-native";
import { mainGreen } from "../../assets/colors/index";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  "view-header": {
    width: "100%",
    height: 88,
    backgroundColor: mainGreen,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: "flex-end",
  },
  "view-title": {
    fontWeight: "700",
    fontSize: 29,
    color: "#fff",
    textAlign: "center",
    marginBottom: 14,
  },
  "view-list-question": {
    alignItems: "center",
  },
  "exam-blog": {
    width: "94%",
    height: 114,
    padding: 18,
    backgroundColor: "#E4EBF1",
    flexDirection: "row",
    marginTop: 18,
  },
  "custom-text-blog": {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "title-text-blog": {
    color: "#0A52A8",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
  },
  "common-text-blog": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
  },
});
