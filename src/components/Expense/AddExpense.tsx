import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {buttons} from '../../Data/BtnDataType.ts';
import React, {useEffect, useState} from 'react';
import {Home} from '../Page/HomeScreen/HomeScreen.tsx';
import {useUser} from '../user';

interface HistoryProps {
  cash: string;
  target: string;
  category: string;
  type: string;
}

interface AddExpenseProps {
  addHistoryItem: (newItem: HistoryProps) => void;
  historyItems: HistoryProps[];
}

export const AddExpense: React.FC<AddExpenseProps> = ({
  addHistoryItem,
  historyItems,
}) => {
  const [selectedElement, setSelectedElement] = useState<number>(buttons[0].id);
  const [activeNext, setActiveNext] = useState(false);
  const [backButton, setbackButton] = useState('expense');
  const {saveUser, user} = useUser();
  const [cashValueExpense, setCashValueExpense] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleBack = (back: string) => {
    setbackButton(back);
  };
  if (backButton === 'home') {
    return <Home addHistoryItem={addHistoryItem} historyItems={historyItems} />;
  }

  const handleNextPress = () => {
    if (!cashValueExpense || !targetValue || selectedElement === null) {
      Alert.alert(
        'Message',
        'Please fill in all fields and select a category.',
      );
    } else {
      const selectedButton = buttons.find(
        button => button.id === selectedElement,
      );
      if (selectedButton) {
        // Додаємо новий елемент до історії
        const newHistoryItem = {
          cash: cashValueExpense,
          target: targetValue,
          category: selectedButton.title,
          type: 'expense',
        };

        addHistoryItem(newHistoryItem);

        // Оновлюємо історію у користувацькому стані
        const updatedHistory = [...user?.historyItems, newHistoryItem];

        // Зберігаємо користувача разом з оновленою історією
        saveUser({
          ...user,
          totalExpense: cashValueExpense,
          expenseGift: selectedElement,
          expenseTarget: targetValue,
          historyItems: updatedHistory,
        });

        setActiveNext(true);
      }
    }
  };

  if (activeNext) {
    const selectedButton = buttons.find(
      button => button.id === selectedElement,
    );
    return (
      <Home
        cash={cashValueExpense}
        target={targetValue}
        category={selectedButton?.title}
        type="expense"
        addHistoryItem={addHistoryItem}
        historyItems={historyItems}
      />
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SafeAreaView style={styles.header}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Add Expense
          </Text>
          <TouchableOpacity onPress={() => handleBack('home')}>
            <View style={styles.back_btn}>
              <Image
                source={require('../../assets/image/icons/back_path.png')}
              />
              <Text style={{color: 'rgba(193, 91, 255, 1)', fontSize: 16}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.main}>
          <SafeAreaView style={styles.input_container}>
            <View style={{gap: 5}}>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>
                Add Target
              </Text>
              <TextInput
                style={styles.input}
                value={targetValue}
                onChangeText={setTargetValue}
                placeholder={'Target'}
                placeholderTextColor={'rgba(255, 255, 255, 0.25)'}
              />
            </View>
            <View style={{gap: 5}}>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>Cash</Text>
              <TextInput
                style={styles.input}
                value={cashValueExpense}
                onChangeText={setCashValueExpense}
                placeholder={'$'}
                placeholderTextColor={'rgba(255, 255, 255, 0.25)'}
              />
            </View>
          </SafeAreaView>
          <View>
            <SafeAreaView>
              <Text
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: 30,
                  marginBottom: 5,
                }}>
                Type of category
              </Text>
              <View style={styles.btn_block_category}>
                {buttons.map(button => (
                  <TouchableOpacity
                    key={button.id}
                    onPress={() => setSelectedElement(button.id)}>
                    <ImageBackground
                      style={
                        selectedElement === button.id
                          ? styles.category_btn_active
                          : styles.category_btn
                      }
                      source={
                        selectedElement === button.id
                          ? require('../../assets/image/active_category.png')
                          : require('../../assets/image/category_btn.png')
                      }>
                      <Text
                        style={
                          selectedElement !== button.id
                            ? {color: 'rgba(255, 255, 255, 0.25)'}
                            : {color: 'rgba(255, 255, 255, 1)'}
                        }>
                        {button.title}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </View>
            </SafeAreaView>
          </View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={handleNextPress}>
            <ImageBackground
              style={styles.btn_next}
              source={
                selectedElement !== null
                  ? require('../../assets/image/active_next.png')
                  : require('../../assets/image/next_bg_noActive.png')
              }>
              <Text
                style={{
                  color: 'black',
                }}>
                Next
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 345,
    maxHeight: 766,
    height: '100%',
    marginBottom: 200,
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 15,
  },
  header: {
    // backgroundColor: 'green',
    // justifyContent: 'flex-start',
  },
  main: {
    marginTop: 15,
    gap: 15,
  },
  input: {
    width: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    borderWidth: 2,
    borderColor: 'rgba(193, 91, 255, 1)',
    paddingLeft: 15,
    paddingRight: 20,
    color: 'white',
  },
  input_container: {
    alignItems: 'center',
    gap: 10,
  },
  category_btn: {
    width: 325,
    overflow: 'hidden',
    borderRadius: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category_btn_active: {
    minWidth: 325,
    // overflow: 'hidden',
    // borderRadius: 8,
    height: 50,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // category: {
  //   borderRadius
  // },
  btn_block_category: {
    gap: 5,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  // next: {
  //   alignItems: 'center',
  // },
  btn_next: {
    width: 325,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
