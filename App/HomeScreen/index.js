import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";
import moment from "moment";

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  const { listExams, examState } = useContext(ExamContext);
  const { userState } = useContext(UserContext);

  useState(() => {
    listExams(userState.dataToken.token);
  }, [userState.dataToken.token]);
  const examItem = (item, index) => {
    return (
      <TouchableOpacity
        style={styles["exam-blog"]}
        onPress={() => {
          navigation.navigate("RulesScreen", { id: item._id});
        }}
        key={index}
      >
        <Image
          source={require("../../assets/avatar_image.png")}
          style={{ width: 72.14, height: 87 }}
        />
        <View style={styles["custom-text-blog"]}>
          <Text
            style={styles["title-text-blog"]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
          <Text style={styles["common-text-blog"]}>{item.type}</Text>
          <Text style={styles["common-text-blog"]}>
            {moment(item.createdAt).format("MMMM DD YYYY")}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" hidden={false} />
      <View style={styles["view-header"]}>
        <Text style={styles["view-title"]}>Danh sách đề thi</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles["view-list-question"]}>
            {examState.list_exams.map((item, index) => {
              return examItem(item, index);
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ListExamScreen;
