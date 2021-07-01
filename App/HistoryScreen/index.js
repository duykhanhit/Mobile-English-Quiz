import React, { createRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as colors from "../../assets/colors";
import styles from "./styles";

const examItem = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.examBlog}
      onPress={() => {
        navigation.navigate("ExanScreen");
      }}
    >
      <Image
        source={require("../../assets/avatar_image.png")}
        style={{ width: 72.14, height: 87 }}
      />
      <View style={styles.customTextBlog}>
        <Text style={styles.titleTextBlog}>
          Tên đề: Tiếng Anh Công Nghệ Thông Tin...
        </Text>
        <Text style={styles.commonTextBlog}>Loại đề: ABC</Text>
        <Text style={styles.commonTextBlog}>Ngày tạo: 24/06/2021</Text>
      </View>
    </TouchableOpacity>
  );
};

const HistoryScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" hidden={false} />
      <View style={styles.viewHeader}>
        <Text style={styles.viewTitle}>Danh sách đề đã thi</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.viewListQuestion}>
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
          {examItem()}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;