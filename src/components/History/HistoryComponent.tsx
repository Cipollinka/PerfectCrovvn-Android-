import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {IncomeAndExpense} from './HistoryElements/HistoryIncomeInExpense.tsx';
import {useUser} from '../user';

interface HistoryPropsExpense {
  historyItems: Array<{
    cash: string;
    target: string;
    category: string;
    type: string;
  }>;
}

export const History = ({
  historyItems: propHistoryItems,
}: HistoryPropsExpense) => {
  const {user} = useUser();
  const userHistoryItems = user?.historyItems || []; // Отримати історію користувача, або порожній масив
  console.log('Hello', userHistoryItems);

  // Використовуйте передані props historyItems або userHistoryItems
  const itemsToDisplay =
    propHistoryItems.length > 0 ? propHistoryItems : userHistoryItems;

  return (
    <View
      style={{
        alignItems: 'center',
        width: '85%',
        minHeight: '16%',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <SafeAreaView style={{gap: 20}}>
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((item, index) => (
              <IncomeAndExpense
                key={index}
                cash={item.cash}
                target={item.target}
                category={item.category}
                type={item.type}
              />
            ))
          ) : (
            <Text>No history items available.</Text> // Відображення, якщо історії немає
          )}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
