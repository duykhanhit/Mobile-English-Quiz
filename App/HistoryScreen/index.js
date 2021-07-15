import React, { createRef, useContext, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import _ from "lodash";
import moment from "moment";

import * as colors from "../../assets/colors";
import styles from "./styles";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const HistoryScreen = ({ navigation }) => {
  const { examState, getExamHistory } = useContext(ExamContext);
  const { userState } = useContext(UserContext);

  const listExamHistory = examState.list_exam_history;

  

  useEffect(() => {
    !_.isEmpty(userState.dataToken) &&
      getExamHistory(userState.dataToken.token);
  }, [userState.dataToken]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#FFFDED",
        }}
      >
        <Text style={styles.title}>Danh sách đề đã thi</Text>
      </View>
      <ScrollView style={styles.containerScrollView}>
        {!_.isEmpty(listExamHistory.data) &&
          listExamHistory.data.map((item, index) => {
            const color = item.countCorrect <=5 ? colors.warning : item.countCorrect <=15 ? colors.safe : colors.good;
            return (
            <View key={index} style={styles.examedItem}>
              <View style={[styles.leftItem, {borderColor: color}]}></View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={styles.examName}>{item.exam_id.name}</Text>
                <View style={styles.rightItem}>
                  <View>
                    <Text style={styles.examType}>
                      Loại đề: {item.exam_id.type}
                    </Text>
                    <Text style={styles.dateExam}>
                      Ngày tạo: {moment(item.createdAt).format("DD/MM/YYYY")}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={[styles.correctNumber, {color: color}]}>
                      {item.countCorrect}/
                      <Text style={[styles.perNumber, {color: colors.mainGreen}]}>20</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )})}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
