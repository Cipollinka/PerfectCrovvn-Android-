import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';
import React, {useState} from 'react';

interface DropdownStatisticsProps {
  onValueChange: (value: string) => void; // Додаємо тип для функції, що змінює значення
}

export const DropdownStatistics: React.FC<DropdownStatisticsProps> = ({
  onValueChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('selected'); // Вказуємо тип string для стану

  const handleChange = (itemValue: string) => {
    setSelectedValue(itemValue);
    onValueChange(itemValue); // Передаємо вибране значення в Statistics
  };

  return (
    <View
      style={{
        backgroundColor: 'rgba(217, 217, 217, 0.25)',
        minWidth: '85%',
        overflow: 'hidden',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 1)',
      }}>
      <Picker selectedValue={selectedValue} onValueChange={handleChange} style={{color: 'white'}}>
        <Picker.Item label={'Selected'} value={'selected'} color={'black'}/>
        <Picker.Item label={'Week'} value={'week'} color={'black'}/>
        <Picker.Item label={'Month'} value={'month'} color={'black'}/>
        <Picker.Item label={'Year'} value={'year'} color={'black'}/>
      </Picker>
    </View>
  );
};
