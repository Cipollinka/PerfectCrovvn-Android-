import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FooterMenu} from './Footer/Footer.tsx';
import {Home} from '../Page/HomeScreen/HomeScreen.tsx';
import {Statistics} from '../Page/StatisticsScreen/StatisticsScreen.tsx';
import {Settings} from '../Page/SettingsScreen/SettingsScreen.tsx';
import {NewsDetailsOne} from '../News/NewsCard/Details/NewsDetailsOne.tsx';
import {NewsDetailsTwo} from '../News/NewsCard/Details/NewsDetailsTwo.tsx';
import {NewsDetailsThree} from '../News/NewsCard/Details/NewsDetailsThree.tsx';
import {NewsDetailsFour} from '../News/NewsCard/Details/NewsDetailsFour.tsx';
import {CalculatorApp} from '../Calculator/Calc.tsx';

interface MainScreenProps {
  input?: string;
  cash?: string;
  target?: string;
  category?: string | undefined;
  type?: string;
  currency?: string | undefined;
}

interface HistoryProps {
  cash: string;
  target: string;
  category: string;
  type: string;
}

export const MainScreen: React.FC<MainScreenProps> = ({
  cash,
  target,
  category,
  type,
  currency,
}) => {
  const [activeScreen, setActiveScreen] = useState('Home');
  const [nextPage, setNextPage] = useState('news');
  const [historyItems, setHistoryItems] = useState<HistoryProps[]>([]);
  const [openCalc, setOpenCalc] = useState(false);

  const handleCalculator = () => {
    setOpenCalc(true);
  };

  const addHistoryItem = (newItem: HistoryProps) => {
    setHistoryItems(prevItems => {
      const updatedItems = [...prevItems, newItem];
      console.log('Updated history items:', updatedItems); // Логування після оновлення
      return updatedItems;
    });
  };

  const handleNextPageNews = (next: string) => {
    setNextPage(next);
  };
  console.log('activeScreen', activeScreen);
  console.log('nextPage', nextPage);
  if (openCalc) {
    return <CalculatorApp />;
  }
  if (nextPage === 'cardOne') {
    return <NewsDetailsOne />;
  }
  if (nextPage === 'cardTwo') {
    return <NewsDetailsTwo />;
  }
  if (nextPage === 'cardThree') {
    return <NewsDetailsThree />;
  }
  if (nextPage === 'cardFour') {
    return <NewsDetailsFour />;
  }

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return (
          <Home
            currency={currency}
            setActiveScreen={setActiveScreen}
            setNextPage={handleNextPageNews}
            cash={cash}
            target={target}
            category={category}
            type={type}
            addHistoryItem={addHistoryItem}
            historyItems={historyItems}
          />
        );
      case 'Statistics':
        return (
          <Statistics
            currency={currency}
            historyItems={historyItems}
            handleCalculator={handleCalculator}
          />
        );
      case 'Settings':
        return <Settings />;
      default:
        return (
          <Home
            currency={currency}
            setActiveScreen={setActiveScreen}
            setNextPage={handleNextPageNews}
            cash={cash}
            target={target}
            category={category}
            type={type}
            addHistoryItem={addHistoryItem}
            historyItems={historyItems}
          />
        );
    }
  };
  const footerVisibleScreens = ['Home', 'Statistics', 'Settings'];

  const showFooter = footerVisibleScreens.includes(activeScreen);

  return (
    <View style={styles.container}>
      {/* Контейнер для запобігання перекриттю зверху */}
      {renderScreen()}
      {/*Footer Menu*/}
      {showFooter && (
        <View style={{position: 'absolute', bottom: 0}}>
          <FooterMenu
            setActiveScreen={setActiveScreen}
            activeScreen={activeScreen}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
  },
});
