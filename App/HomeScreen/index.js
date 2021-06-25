import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  const examItem = () => {
    return (
      <View
        style={styles["exam-blog"]}
        onPress={() => {
          navigation.navigate("RulesScreen");
        }}
      >
        <Image
          source={require("../../assets/avatar_image.png")}
          style={{ width: 72.14, height: 87 }}
        />
        <View style={styles["custom-text-blog"]}>
          <Text style={styles["title-text-blog"]}>
            Tên đề: Đấu trường IT 2020...
          </Text>
          <Text style={styles["common-text-blog"]}>Loại đề: ABC</Text>
          <Text style={styles["common-text-blog"]}>Ngày tạo: 24/06/2021</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Button
        onPress={() => {navigation.navigate('RulesScreen')}}
        title="Điều lệ thi"
        color="#841584"
      /> */}

      <View style={styles["view-header"]}>
        <Text style={styles["view-title"]}>Cuộc thi</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles["view-list-question"]}>
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
      </SafeAreaView>
    </View>
  );
};

export default ListExamScreen;
