import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import { useUser } from "../../user";
import { useState } from "react";

interface IncomeAndExpenseProps {
  cash?: string;
  target?: string;
  category?: string | undefined;
  type?: string | undefined;
}

export const IncomeAndExpense = ({
  cash,
  target,
  category,
  type,
}: IncomeAndExpenseProps) => {
  const {user, saveUser} = useUser();
  const [data, setData] = useState([]);



  return (
    <View>
      <ImageBackground
        style={{
          minWidth: '83%',
          minHeight: 50,
          borderRadius: 10,
          overflow: 'hidden',
          paddingLeft: 10,
          paddingRight: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        source={require('../../../assets/image/history_elment.png')}>
        <SafeAreaView
          style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image
            source={
              type === 'income'
                ? require('../../../assets/image/icons/trend-up.png')
                : require('../../../assets/image/icons/trend-down.png')
            }
          />
          <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18}}>
            {cash}$
          </Text>
        </SafeAreaView>
        <SafeAreaView
          style={{alignItems: 'center', justifyContent: 'center', gap: 3}}>
          <Text style={{color: 'rgba(255, 255, 255, 1)'}}>{target}</Text>
          <Image source={require('../../../assets/image/icons/line_9.png')} />
          <Text
            style={
              type === 'income'
                ? {color: 'rgba(31, 202, 3, 1)'}
                : {color: 'rgba(255, 0, 0, 1)'}
            }>
            {category}
          </Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
