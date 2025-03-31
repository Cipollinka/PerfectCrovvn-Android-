import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DropdownStatistics} from './Dropdown/Dropdown.tsx';
import { useUser } from "../../user";

interface HistoryItem {
  cash: string;
  target: string;
  category: string;
  type: string;
  date: string; // Поле для фільтрації по даті
}

interface StatisticsProps {
  handleCalculator?: () => void;
  historyItems?: HistoryItem[];
  currency?: string;
}

export const Statistics: React.FC<StatisticsProps> = ({
  handleCalculator,
  historyItems = [],
  currency,
}) => {
  const {user} = useUser();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('selected'); // Стейт для вибраного періоду

  // Функція фільтрації історії по періоду
  const filterItemsByPeriod = (items: HistoryItem[], period: string) => {
    const now = new Date();
    if (period === 'week') {
      const weekAgo = new Date(now.setDate(now.getDate() - 7));
      return items.filter(item => new Date(item.date) >= weekAgo);
    } else if (period === 'month') {
      const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
      return items.filter(item => new Date(item.date) >= monthAgo);
    } else if (period === 'year') {
      const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
      return items.filter(item => new Date(item.date) >= yearAgo);
    }
    return items; // Якщо період не вибраний, показати всі елементи
  };

  // Фільтруємо історію на основі вибраного періоду
  const filteredItems = filterItemsByPeriod(historyItems, selectedPeriod);

  // Підрахунок доходу і витрат
  const totalIncome = filteredItems
    .filter(item => item.type === 'income')
    .reduce((acc, item) => acc + parseFloat(item.cash), 0)
    .toFixed(2);

  const totalExpense = filteredItems
    .filter(item => item.type === 'expense')
    .reduce((acc, item) => acc + parseFloat(item.cash), 0)
    .toFixed(2);

  console.log('totalIncome', totalExpense);

  const totalSum = Math.max(parseFloat(totalIncome) - parseFloat(totalExpense)).toFixed(
    2,
  );
  // Логіка зміни зображень залежно від періоду
  const getImageByPeriod = () => {
    switch (selectedPeriod) {
      case 'week':
        return require('../../../assets/image/bg_t.png');
      case 'month':
        return require('../../../assets/image/month_graph_bg.png');
      case 'year':
        return require('../../../assets/image/bg_e.png');
      default:
        return require('../../../assets/image/month_graph_bg.png'); // Зображення за замовчуванням
    }
  };

  const getGroupImageByPeriod = () => {
    switch (selectedPeriod) {
      case 'week':
        return require('../../../assets/image/graph_t.png');
      case 'month':
        return require('../../../assets/image/icons/groupOne.png');
      case 'year':
        return require('../../../assets/image/graph_e.png');
      default:
        return require('../../../assets/image/icons/groupOne.png'); // Зображення за замовчуванням
    }
  };

  return (
    <View>
      <SafeAreaView
        style={{
          width: '100%',
          maxWidth: 345,
          maxHeight: 766,
          height: '100%',
          marginTop: 10,
          alignItems: 'center',
          gap: 10,
        }}>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 24}}>
            Statistics
          </Text>

          <SafeAreaView
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              gap: 200,
              marginBottom: 15,
            }}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18}}>
              Timetable
            </Text>
            <TouchableOpacity
              onPress={handleCalculator}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: 22,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/image/icons/calc_icon.png')}
              />
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView>
            <ImageBackground
              style={{
                width: 345,
                height: 160,
                justifyContent: 'flex-end',
                paddingBottom: 15,
                paddingRight: 15,
                paddingLeft: 15,
              }}
              source={getImageByPeriod()}>
              <SafeAreaView style={{alignItems: 'center'}}>
                <ScrollView horizontal>
                  <Image
                    style={
                      selectedPeriod === 'week'
                        ? {height: 70, maxWidth: 345}
                        : selectedPeriod === 'year'
                        ? {height: 90, width: 280}
                        : {height: 110, width: 900}
                    }
                    source={getGroupImageByPeriod()}
                  />
                </ScrollView>
              </SafeAreaView>
            </ImageBackground>
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView>
          <DropdownStatistics onValueChange={setSelectedPeriod}/>
        </SafeAreaView>

        <SafeAreaView style={{alignItems: 'center', gap: 20}}>
          <View>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18}}>
              Total cash
            </Text>
            <Text
              style={{
                backgroundColor: 'rgba(217, 217, 217, 0.25)',
                minWidth: '85%',
                height: 50,
                textAlign: 'center',
                paddingTop: 14,
                overflow: 'hidden',
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 16,
              }}>
              {parseFloat(totalSum) < 0 ? '0.00' : totalSum} {currency}
            </Text>
          </View>
          <View>
            <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
              <Image
                source={require('../../../assets/image/icons/ellipse_green.png')}
              />
              {'    '} Income
            </Text>
            <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
              <Image
                source={require('../../../assets/image/icons/ellipse_red.png')}
              />
              {'    '} Expense
            </Text>
          </View>
        </SafeAreaView>
        <Image source={require('../../../assets/image/icons/mask_group.png')} />
      </SafeAreaView>
    </View>
  );
};
