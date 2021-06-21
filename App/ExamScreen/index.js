import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  CheckBox,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';

import styles from "./styles";

const ExamScreen = ({ navigation }) => {
  const [selected, setSelected] = useState({
    cauA: false,
    cauB: false,
    cauC: false,
    cauD: false,
  });

  const [result, setResult] = useState('');
  const [point, setPoint] = useState(0);
  const [listQues, setListQues] = useState([
    {
      question: "Xin chào tiếng Albania là gì",
      cauA: "Tungjatjeta",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Tungjatjeta",
    },
    {
      question: "Xin chào tiếng Basque là gì",
      cauA: "kaixo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "kaixo",
    },
    {
      question: "Xin chào tiếng Belarus là gì",
      cauA: "Вiтаю",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Вiтаю",
    },
    {
      question: "Xin chào tiếng Breton là gì",
      cauA: "degemer mad",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "degemer mad",
    },
    {
      question: "Xin chào tiếng Bosnia là gì",
      cauA: "zdravo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "zdravo",
    },
    {
      question: "Xin chào tiếng Catalan là gì",
      cauA: "o-la",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "o-la",
    },
    {
      question: "Xin chào tiếng Croatia là gì",
      cauA: "Dobro jutro",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Dobro jutro",
    },
    {
      question: "Xin chào tiếng Séc là gì",
      cauA: "dobrý den",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "dobrý den",
    },
    {
      question: "Xin chào tiếng Đan Mạch là gì",
      cauA: "hallo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "hallo",
    },
    {
      question: "Xin chào tiếng Albania là gì",
      cauA: "Tungjatjeta",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Tungjatjeta",
    },
    {
      question: "Xin chào tiếng Basque là gì",
      cauA: "kaixo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "kaixo",
    },
    {
      question: "Xin chào tiếng Belarus là gì",
      cauA: "Вiтаю",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Вiтаю",
    },
    {
      question: "Xin chào tiếng Breton là gì",
      cauA: "degemer mad",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "degemer mad",
    },
    {
      question: "Xin chào tiếng Bosnia là gì",
      cauA: "zdravo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "zdravo",
    },
    {
      question: "Xin chào tiếng Catalan là gì",
      cauA: "o-la",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "o-la",
    },
    {
      question: "Xin chào tiếng Croatia là gì",
      cauA: "Dobro jutro",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "Dobro jutro",
    },
    {
      question: "Xin chào tiếng Séc là gì",
      cauA: "dobrý den",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "dobrý den",
    },
    {
      question: "Xin chào tiếng Đan Mạch là gì",
      cauA: "hallo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "hallo",
    },
    {
      question: "Xin chào tiếng Séc là gì",
      cauA: "dobrý den",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "dobrý den",
    },
    {
      question: "Xin chào tiếng Đan Mạch là gì",
      cauA: "hallo",
      cauB: "Halu",
      cauC: "Hola",
      cauD: "Hela",
      choseA: false,
      choseB: false,
      choseC: false,
      choseD: false,
      touched: false,
      rightAnswer: "hallo",
    },
  ]);

  const [displayQues, setDisplayQues] = useState({
    question: "",
    cauA: "",
    cauB: "",
    cauC: "",
    cauD: "",
    rightAnswer: null,
  });

  const [numberQues, setNumberQues] = useState(0);

  useEffect(() => {
    setDisplayQues(listQues[numberQues]);
  }, [numberQues]);

  const Bar = ({ touched }) => {
    return <View style={[touched ? styles.quizBarTouched : styles.quizBar]} />;
  };

  const handleButtonContinute = () => {
    for (const property in selected) {
      if (selected[property]) {
        setListQues([
          ...listQues.slice(0, numberQues),
          { ...listQues[numberQues], touched: true },
          ...listQues.slice(numberQues + 1),
        ]);
      }
    }
    if(result === listQues[numberQues].rightAnswer) {
      setPoint(point+1);
    }
    setSelected({
      cauA: false,
      cauB: false,
      cauC: false,
      cauD: false
    });
    if(numberQues===19) {
      navigation.navigate("ExamedScreen", { point: point+1 });
    }
    if(numberQues < 19) {
      setNumberQues(numberQues + 1);

    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animatable.View animation='bounceInDown' useNativeDriver={true} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textQuesNumber}>Câu hỏi {numberQues + 1}</Text>
          <Text style={styles.totalQuesNumber}>/20</Text>
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
            <MaterialIcon name="close" color="black" size={26} />
          </TouchableOpacity>
        </View>
        <View style={styles.quizsBar}>
          {listQues.map((val, index) => (
            <Bar key={index} touched={val.touched} />
          ))}
        </View>
        <ScrollView style={styles.quiz}>
          <Text style={styles.question}>{displayQues.question}</Text>
        </ScrollView>
        <View style={styles.answers}>
          <TouchableHighlight
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
              // console.log(selected.cauA);
              if(!selected.cauA) {
                setResult(displayQues.cauA);
              }
              else {
                setResult('');
              }
              
            }}
            style={[
              styles.answer,
              listQues[numberQues].choseA && styles.selected,
            ]}
          >
            <Text style={[listQues[numberQues].choseA ? styles.textSelected : {}]}>
              A: {displayQues.cauA}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
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
              if(!selected.cauB) {
                setResult(displayQues.cauB);
              }
              else {
                setResult('');
              }
            }}
            style={[
              styles.answer,
              listQues[numberQues].choseB && styles.selected,
            ]}
          >
            <Text style={[listQues[numberQues].choseB ? styles.textSelected : {}]}>
              B: {displayQues.cauB}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
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
              if(!selected.cauC) {
                setResult(displayQues.cauC);
              }
              else {
                setResult('');
              }
            }}
            style={[
              styles.answer,
              listQues[numberQues].choseC && styles.selected,
            ]}
          >
            <Text style={[listQues[numberQues].choseC ? styles.textSelected : {}]}>
              C: {displayQues.cauC}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
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
              if(!selected.cauD) {
                setResult(displayQues.cauD);
              }
              else {
                setResult('');
              }
            }}
            style={[
              styles.answer,
              listQues[numberQues].choseD && styles.selected,
            ]}
          >
            <Text style={[listQues[numberQues].choseD ? styles.textSelected : {}]}>
              D: {displayQues.cauD}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          {(numberQues !== 0 && numberQues !== 19) && (
            <TouchableOpacity
              onPress={() => setNumberQues(numberQues - 1)}
              style={[styles.touch, { marginRight: 5 }]}
            >
              <View style={styles.previous}>
                <Text style={styles.textPre}>Quay lại</Text>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => handleButtonContinute()}
            style={[styles.touch, numberQues !== 0 && { marginLeft: 5 }]}
          >
            <View style={styles.next}>
              <Text style={styles.textNext}>{numberQues !== 19 ? 'Tiếp theo' : 'Hoàn thành'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ExamScreen;
