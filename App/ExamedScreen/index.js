import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";

import styles from "./styles";
import avatar from "../../assets/avatar.jpg";
import * as colors from '../../assets/colors';

const ExamedScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.congratulations}>Chúc mừng</Text>
          <Text style={styles.congratulations}>Bạn đã hoàn thành bài thi</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={avatar} style={styles.image} />
        </View>
        <View style={styles.score}>
          <Text style={styles.textPoint}>Điểm số</Text>
          <Text style={styles.point}>
            {route.params.point}
            <Text style={styles.perPoint}>/20</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              style={styles.touch}
            >
              <View style={styles.continute}>
                <Text style={styles.textContinute}>Tiếp tục</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default ExamedScreen;
