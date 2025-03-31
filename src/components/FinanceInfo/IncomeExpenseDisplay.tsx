import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useUser} from '../user';

interface Cash {
  historyItems?: Array<{
    cash: string;
    target: string;
    category: string;
    type: string;
  }>;
  currency?: string | undefined;
}

export const IncomeExpenseOverview: React.FC<Cash> = ({
  currency, // Додаємо значення за замовчуванням для запобігання помилок
}) => {
  const {user} = useUser();
  // Обчислюємо загальні доходи та витрати
  console.log('income', user?.totalIncome);
  return (
    <SafeAreaView style={styles.finance_container}>
      <View style={styles.block_overview}>
        <Text>Income</Text>
        <View style={styles.income}>
          <Text>
            {user?.totalIncome || 0} {currency}
          </Text>
        </View>
      </View>
      <View style={styles.block_overview}>
        <Text>Expense</Text>
        <View style={styles.expense}>
          <Text>
            {user?.totalExpense || 0} {currency}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  finance_container: {
    flexDirection: 'row',
    gap: 15,
  },
  income: {
    width: '100%',
    height: 20,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: 'rgba(38, 220, 148, 1)',
  },
  expense: {
    width: '100%',
    height: 20,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: 'rgba(255, 58, 121, 1)',
  },
  block_overview: {
    alignItems: 'center',
  },
});
