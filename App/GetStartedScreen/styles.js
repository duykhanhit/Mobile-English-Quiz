import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container_started: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  view_touchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 80,
  },
  touchable: {
    width: 150,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default styles;
