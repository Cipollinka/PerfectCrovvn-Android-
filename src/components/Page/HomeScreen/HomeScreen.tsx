import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IncomeExpenseOverview} from '../../FinanceInfo/IncomeExpenseDisplay.tsx';
import {AddIncome} from '../../Income/AddIncome.tsx';
import {AddExpense} from '../../Expense/AddExpense.tsx';
import {Tips} from '../../Tips/TipsComponents.tsx';
import {History} from '../../History/HistoryComponent.tsx';
import {News} from '../../News/NewsComponent.tsx';
import {PageOne} from '../../Tips/TipsCards/CardPages/Page01.tsx';
import {PageTwo} from '../../Tips/TipsCards/CardPages/Page02.tsx';
import {PageThree} from '../../Tips/TipsCards/CardPages/Page03.tsx';
import {useUser} from '../../user';

interface HomeScreenProps {
  setActiveScreen?: (value: ((prevState: string) => string) | string) => void;
  setNextPage?: (next: string) => void;
  cash?: string | undefined;
  target?: string | undefined;
  category?: string | undefined;
  type?: string | undefined;
  addExpense?: (cash: number, target: string, category: string) => void;
  addIncome?: (cash: number, target: string, category: string) => void;
  addHistoryItem: (newItem: HistoryProps) => void;
  historyItems: HistoryProps[];
  currency?: string | undefined;
}

interface HistoryProps {
  cash: string;
  target: string;
  category: string;
  type: string;
}

export const Home: React.FC<HomeScreenProps> = ({
  setActiveScreen,
  setNextPage,
  addHistoryItem,
  historyItems,
  currency,
}) => {
  const [screenMain, setScreenMain] = useState('tips');
  const [pageTipsCards, setPageTipsCards] = useState('');
  const [pageAdd, setPageAdd] = useState('balance');
  const {user, saveUser} = useUser();
  // const [dataExpense, setDataExpense] = useState(user?.totalExpense || '');
  // const [dataIncome, setDataIncome] = useState(user?.totalIncome || '');
  // const [dataTotal, setDataTotal] = useState(user?.total || '');
  console.log('pageTipsCards', pageTipsCards);
  const handlePageAdd = (add: string) => {
    setPageAdd(add);
  };

  const handleCardPress = (page: string) => {
    setPageTipsCards(page);
    if (setActiveScreen) {
      setActiveScreen('CardPage');
    } // Вказуємо, що ви на картці
  };
  if (pageAdd === 'income') {
    return (
      <AddIncome addHistoryItem={addHistoryItem} historyItems={historyItems} />
    );
  }

  if (pageAdd === 'expense') {
    return (
      <AddExpense addHistoryItem={addHistoryItem} historyItems={historyItems} />
    );
  }

  if (pageTipsCards === 'pageOne') {
    return <PageOne setPageTipsCards={setPageTipsCards} />;
  }
  if (pageTipsCards === 'pageTwo') {
    return <PageTwo setPageTipsCards={setPageTipsCards} />;
  }
  if (pageTipsCards === 'pageThree') {
    return <PageThree setPageTipsCards={setPageTipsCards} />;
  }

  const renderScreenMain = () => {
    switch (screenMain) {
      case 'history':
        return <History historyItems={historyItems} />;
      case 'tips':
        return <Tips setPageCards={handleCardPress} />;
      case 'news':
        return <News setNextPage={setNextPage} />;
    }
  };
  // const totalIncome = historyItems
  //   .filter(item => item.type === 'income')
  //   .reduce((acc, item) => acc + parseFloat(item.cash), 0)
  //   .toFixed(2); // Форматування до двох знаків після коми
  //
  // console.log('totalIncome', totalIncome);
  //
  // const totalExpense = historyItems
  //   .filter(item => item.type === 'expense')
  //   .reduce((acc, item) => acc + parseFloat(item.cash), 0)
  //   .toFixed(2);
  //
  // console.log('totalExpense', totalExpense);

  // const totalIncome = historyItems
  //   .filter(item => item.type === 'income')
  //   .reduce((acc, item) => acc + parseFloat(item.cash), 0);
  //
  // const totalExpense = historyItems
  //   .filter(item => item.type === 'expense')
  //   .reduce((acc, item) => acc + parseFloat(item.cash), 0);

  const totalSum = Math.max(
    0,
    (parseFloat(user?.totalIncome) || 0) -
      (parseFloat(user?.totalExpense) || 0),
  ).toFixed(2);
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper_one}>
          <View>
            <Text style={styles.inputText}>Hello, {user?.nickname}</Text>
            <SafeAreaView style={styles.horizontal_graph}>
              <ImageBackground
                style={styles.graph}
                source={require('../../../assets/image/icons/graphick_one.png')}>
                <View style={styles.finance_container}>
                  <Text style={styles.graphText}>{totalSum}</Text>
                  <IncomeExpenseOverview
                    historyItems={historyItems}
                    currency={currency}
                  />
                </View>
                <SafeAreaView>
                  <ScrollView horizontal>
                    <Image
                      style={styles.image_graphick}
                      source={require('../../../assets/image/icons/groupOne.png')}
                    />
                  </ScrollView>
                </SafeAreaView>
              </ImageBackground>
            </SafeAreaView>
          </View>
          <View style={styles.btn_header_container}>
            <TouchableOpacity onPress={() => handlePageAdd('income')}>
              <ImageBackground
                style={styles.btn_header}
                source={require('../../../assets/image/btn_image_header.png')}>
                <View style={styles.filling_btn_header}>
                  <Image
                    source={require('../../../assets/image/icons/trend-up.png')}
                  />
                  <Text style={styles.btn_text_header}>Income</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePageAdd('expense')}>
              <ImageBackground
                style={styles.btn_header}
                source={require('../../../assets/image/btn_image_header.png')}>
                <View style={styles.filling_btn_header}>
                  <Image
                    source={require('../../../assets/image/icons/trend-down.png')}
                  />
                  <Text style={styles.btn_text_header}>Expense</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view_strip} />
        <View style={styles.wrapper_main}>
          <SafeAreaView style={styles.btn_main_container}>
            <TouchableOpacity onPress={() => setScreenMain('history')}>
              <ImageBackground
                style={styles.btn_main_image}
                source={require('../../../assets/image/btn_wrapperTwo.png')}>
                <Text style={{color: 'white'}}>History</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreenMain('tips')}>
              <ImageBackground
                style={styles.btn_main_image}
                source={require('../../../assets/image/btn_wrapperTwo.png')}>
                <Text style={{color: 'white'}}>Tips</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreenMain('news')}>
              <ImageBackground
                style={styles.btn_main_image}
                source={require('../../../assets/image/btn_wrapperTwo.png')}>
                <Text style={{color: 'white'}}>News</Text>
              </ImageBackground>
            </TouchableOpacity>
          </SafeAreaView>
          <ImageBackground
            style={styles.bg_crown}
            source={require('../../../assets/image/crown_bg.png')}>
            <View style={{alignItems: 'center', marginTop: 15, width: 320}}>
              {renderScreenMain()}
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper_one: {
    alignItems: 'center',
    gap: 20,
  },
  container: {
    alignItems: 'center',
    gap: 20,
    width: '100%',
    maxWidth: 345,
    maxHeight: 766,
    height: '100%',
  },
  // header: {
  //   justifyContent: 'center',
  // },
  graph: {
    width: 280, // Задана ширина для горизонтального скролу
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 15,
  },
  graphText: {
    color: 'white',
    fontSize: 15,
  },
  inputText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  horizontal_graph: {
    width: 280,
    height: 150,
    borderRadius: 30, // Застосовуємо бордер-радіус до контейнера
    overflow: 'hidden',
  },
  image_graphick: {
    width: 490,
    height: 60,
  },
  btn_text_header: {
    color: 'white',
  },
  btn_header: {
    width: 130,
    height: 32,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  btn_header_container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    gap: 15,
  },
  filling_btn_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  view_strip: {
    width: 330,
    height: 2,
    backgroundColor: 'rgba(56, 41, 84, 1)',
  },
  btn_main_image: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_main_container: {
    flexDirection: 'row',
    gap: 15,
  },
  bg_crown: {
    width: 330,
    alignItems: 'center',
    height: 305,
  },
  wrapper_main: {
    alignItems: 'center',
  },
  finance_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
