import { StyleSheet } from "react-native";
import * as colors from "../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    width: "100%",
    height: 88,
    backgroundColor: colors.yellow,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: "flex-end",
  },
  viewTitle: {
    fontWeight: "700",
    fontSize: 29,
    color: "#fff",
    textAlign: "center",
    marginBottom: 14,
  },
  viewListQuestion: {
    alignItems: "center",
  },
  examBlog: {
    width: "94%",
    height: 114,
    padding: 18,
    backgroundColor: "#E4EBF1",
    flexDirection: "row",
    marginTop: 18,
  },
  customTextBlog: {
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleTextBlog: {
    color: "#0A52A8",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 24,
  },
  commonTextBlog: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
  },
});
