import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { StackActions } from '@react-navigation/native';

import styles from "./styles";
import rules from "../../assets/rules.png";

// import { StackActions } from '@react-navigation/native'

const RulesScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Thể lệ thi</Text>
          </View>
          <View style={styles.imageContainer}>
            <ImageBackground source={rules} style={styles.image}/>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.rules}>
            <Text style={styles.textContent}>
              Mỗi cuộc thi sẽ diễn ra trong 20 phút với 20 câu hỏi được sắp xếp
              từ dễ tới khó. Mỗi người chơi cần hoàn thành bài thi của mình
              trong khoảng thời gian ngắn nhất dưới 20 phút.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => 
                navigation.dispatch(
                  StackActions.replace('ExamScreen', { id: route.params.id })
                )
                // navigation.navigate("ExamScreen", { id: route.params.id})
              }
              style={styles.touch}
            >
              <View style={styles.degree}>
                <Text style={styles.textDegree}>Đồng ý</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RulesScreen;
