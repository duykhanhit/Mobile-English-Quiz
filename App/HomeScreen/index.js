import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" hidden={false} />
      <Button
        onPress={() => {
          navigation.navigate("RulesScreen");
        }}
        title="Điều lệ thi"
        color="#841584"
      />
    </View>
  );
};

export default ListExamScreen;
