import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import _ from "lodash";

import styles from "./styles";
import * as colors from "../../assets/colors";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";

const ExamScreen = ({ navigation }) => {
  const id = "60d35577691f2b0970fd711d";
  const { getExam, exam, submitAnswer } = useContext(ExamContext);

  const [selected, setSelected] = useState({
    cauA: false,
    cauB: false,
    cauC: false,
    cauD: false,
  });

  // const [result, setResult] = useState("");
  const [listQues, setListQues] = useState([]);

  const [displayQues, setDisplayQues] = useState({
    question: "",
    cauA: "",
    cauB: "",
    cauC: "",
    cauD: "",
  });

  const [numberQues, setNumberQues] = useState(0);

  useEffect(() => {
    !_.isEmpty(listQues) && setDisplayQues(listQues[numberQues]);
  }, [numberQues, listQues]);

  useEffect(() => {
    getExam(id);
  }, [id]);

  useEffect(() => {
    let arr = [];
    arr =
      !_.isEmpty(exam.data) &&
      exam.data.map((item) => {
        return {
          question: item.content,
          cauA: item.answers[0].content,
          cauB: item.answers[1].content,
          cauC: item.answers[2].content,
          cauD: item.answers[3].content,
          choseA: false,
          choseB: false,
          choseC: false,
          choseD: false,
          touched: false,
        };
      });
    setListQues(arr);
  }, [exam]);

  const Bar = ({ touched, index }) => {
    return (
      <View
        style={[
          touched ? styles.quizBarTouched : styles.quizBar,
          ,
          numberQues === index && styles.inThisQuesBar,
        ]}
      />
    );
  };

  useEffect(() => {
    if (!_.isEmpty(listQues)) {
      listQues[numberQues].choseA &&
        setSelected({
          cauA: true,
          cauB: false,
          cauC: false,
          cauD: false,
        });

      listQues[numberQues].choseB &&
        setSelected({
          cauA: false,
          cauB: true,
          cauC: false,
          cauD: false,
        });

      listQues[numberQues].choseD &&
        setSelected({
          cauA: false,
          cauB: false,
          cauC: false,
          cauD: true,
        });

      listQues[numberQues].choseC &&
        setSelected({
          cauA: false,
          cauB: false,
          cauC: true,
          cauD: false,
        });
    }
  }, [listQues[numberQues]]);

  const handleButtonContinute = () => {
    let index = -1;
    let indexAnswer = -1;
    console.log(selected);
    for (const property in selected) {
      index++;
      if (selected[property] && !_.isEmpty(listQues)) {
        indexAnswer = index;
        setListQues([
          ...listQues.slice(0, numberQues),
          { ...listQues[numberQues], touched: true },
          ...listQues.slice(numberQues + 1),
        ]);
      }
    }
    if (!_.isEmpty(exam) && indexAnswer !== -1) {
      const resultId = exam.result;
      const answerId = exam.data[numberQues].answers[indexAnswer]._id;
      submitAnswer(resultId, answerId);
    } else {
      setListQues([
        ...listQues.slice(0, numberQues),
        { ...listQues[numberQues], touched: false },
        ...listQues.slice(numberQues + 1),
      ]);
    }
    setSelected({
      cauA: false,
      cauB: false,
      cauC: false,
      cauD: false,
    });
    if (!_.isEmpty(exam.data) && numberQues === exam.data.length - 1) {
      navigation.navigate("ExamedScreen", {
        resultId: exam.result,
        totalQuesNumber: exam.data.length,
      });
    }
    if (!_.isEmpty(exam.data) && numberQues < exam.data.length - 1) {
      setNumberQues(numberQues + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animatable.View
        animation="bounceInDown"
        useNativeDriver={true}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.textQuesNumber}>Câu hỏi {numberQues + 1}</Text>
          <Text style={styles.totalQuesNumber}>
            /{!_.isEmpty(exam.data) && exam.data.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Thông báo", "Bạn chắc chắn muốn thoát?", [
                {
                  text: "Hủy",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: "Đồng ý",
                  onPress: () => navigation.navigate("HomeScreen"),
                },
              ]);
            }}
            style={styles.closeIcon}
          >
            <MaterialIcon name="close" color={colors.darkGreen} size={26} />
          </TouchableOpacity>
        </View>
        <View style={styles.quizsBar}>
          {!_.isEmpty(listQues) &&
            listQues.map((val, index) => (
              <Bar key={index} touched={val.touched} index={index} />
            ))}
        </View>
        <View style={styles.quizContainer}>
          <ScrollView style={styles.quiz}>
            <Text style={styles.question}>{displayQues.question}</Text>
          </ScrollView>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: !selected.cauA,
                cauB: false,
                cauC: false,
                cauD: false,
              });
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: !listQues[numberQues].choseA,
                  choseB: false,
                  choseD: false,
                  choseC: false,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseA &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseA
                  ? styles.textSelected
                  : {},
              ]}
            >
              A: {displayQues.cauA}
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
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  ...listQues[numberQues],
                  choseA: false,
                  choseD: false,
                  choseC: false,
                  choseB: !listQues[numberQues].choseB,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseB &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseB
                  ? styles.textSelected
                  : {},
              ]}
            >
              B: {displayQues.cauB}
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

              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: false,
                  choseB: false,
                  choseD: false,
                  choseC: !listQues[numberQues].choseC,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseC &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseC
                  ? styles.textSelected
                  : {},
              ]}
            >
              C: {displayQues.cauC}
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
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: false,
                  choseB: false,
                  choseC: false,
                  choseD: !listQues[numberQues].choseD,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseD &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseD
                  ? styles.textSelected
                  : {},
              ]}
            >
              D: {displayQues.cauD}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          {!_.isEmpty(exam.data) && numberQues !== 0 && (
            <TouchableOpacity
              onPress={() => {
                setNumberQues(numberQues - 1);
              }}
              style={[styles.touch, { marginRight: 5 }]}
            >
              <View style={styles.previous}>
                <Text style={styles.textPre}>Quay lại</Text>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => handleButtonContinute()}
            style={[
              styles.touch,
              !_.isEmpty(exam.data) &&
                numberQues !== 0 &&
                numberQues === exam.data.length && { marginLeft: 5 },
            ]}
          >
            <View style={styles.next}>
              <Text style={styles.textNext}>
                {!_.isEmpty(exam.data) && numberQues !== exam.data.length - 1
                  ? "Tiếp theo"
                  : "Nộp bài"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ExamScreen;
