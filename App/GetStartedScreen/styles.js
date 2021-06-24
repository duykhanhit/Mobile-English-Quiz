import { Dimensions, StyleSheet } from "react-native";
import * as colors from '../../assets/colors';

const styles = StyleSheet.create({
  container_started: {
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 20
  },
  view_touchable: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  touchable: {
    width: 150,
    height: 50,
    backgroundColor: colors.red,
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    // fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    textTransform: 'uppercase'
  },
});

export default styles;
