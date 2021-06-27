import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
<<<<<<< HEAD
  TouchableOpacity,
=======
  TouchableOpacity
>>>>>>> 5921f1c061d9adede7a1b4cf3f3d70b750ae26eb
} from "react-native";
// import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
// import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  // const { userState, getListExams } = useContext(UserContext);

  // useEffect(() => {
  //   console.log("ExamContext", userState);
  //   getListExams(userState);
  // });

  const examItem = () => {
    return (
      <TouchableOpacity
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
            Tên đề: Tiếng Anh Công Nghệ Thông Tin...
          </Text>
          <Text style={styles["common-text-blog"]}>Loại đề: ABC</Text>
          <Text style={styles["common-text-blog"]}>Ngày tạo: 24/06/2021</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      <StatusBar animated={true} barStyle="dark-content" hidden={false} />
>>>>>>> 5921f1c061d9adede7a1b4cf3f3d70b750ae26eb
      <View style={styles["view-header"]}>
        <Text style={styles["view-title"]}>Danh sách đề thi</Text>
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
