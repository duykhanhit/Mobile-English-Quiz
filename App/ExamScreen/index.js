import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  CheckBox,
  TouchableOpacity,
  Alert,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

const ExamScreen = ({ navigation }) => {
  const [selected, setSelected] = useState({
    cauA: false,
    cauB: false,
    cauC: false,
    cauD: false,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textQuesNumber}>Câu hỏi 01</Text>
          <Text style={styles.totalQuesNumber}>/20</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Thông báo", "Bạn chắc chắn muốn thoát?", [
                {
                  text: "Hủy",
                  onPress: () => {},
                  style: "cancel",
                },
                { text: "Đồng ý", onPress: () => navigation.navigate('HomeScreen') },
              ]);
            }}
            style={styles.closeIcon}
          >
            <MaterialIcon name="close" color="black" size={26} />
          </TouchableOpacity>
        </View>
        <View style={styles.quizsBar}>
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
          <View style={styles.quizBar} />
        </View>
        <ScrollView style={styles.quiz}>
          <Text>
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            Hello Hello
          </Text>
        </ScrollView>
        <View style={styles.answers}>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: !selected.cauA,
                cauB: false,
                cauC: false,
                cauD: false,
              });
            }}
            style={[styles.answer, selected.cauA && styles.selected]}
          >
            <Text style={[selected.cauA ? styles.textSelected : {}]}>
              A: Hello
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: !selected.cauB,
                cauC: false,
                cauD: false,
              });
            }}
            style={[styles.answer, selected.cauB && styles.selected]}
          >
            <Text style={[selected.cauB ? styles.textSelected : {}]}>
              B: Hello
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: false,
                cauC: !selected.cauC,
                cauD: false,
              });
            }}
            style={[styles.answer, selected.cauC && styles.selected]}
          >
            <Text style={[selected.cauC ? styles.textSelected : {}]}>
              C: Hello
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: false,
                cauC: false,
                cauD: !selected.cauD,
              });
            }}
            style={[styles.answer, selected.cauD && styles.selected]}
          >
            <Text style={[selected.cauD ? styles.textSelected : {}]}>
              D: Hello
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={[styles.touch, { marginRight: 5 }]}
          >
            <View style={styles.previous}>
              <Text style={styles.textPre}>Quay lại</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExamedScreen")}
            style={[styles.touch, { marginLeft: 5 }]}
          >
            <View style={styles.next}>
              <Text style={styles.textNext}>Tiếp theo</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExamScreen;
