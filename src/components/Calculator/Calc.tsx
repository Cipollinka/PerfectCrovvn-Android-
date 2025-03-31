import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {MainScreen} from '../MainScreen';

type Operator = '+' | '-' | '*' | '/';

export const CalculatorApp = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<Operator | null>(null);
  const [firstValue, setFirstValue] = useState('');
  const [backButton, setbackButton] = useState('calculator');
  const handleBack = (back: string) => {
    setbackButton(back);
  };

  // Якщо натиснута кнопка "home", повертаємо Home компонент
  if (backButton === 'statistics') {
    return <MainScreen />;
  }

  // Function to handle number inputs
  const handleNumberInput = (num: any) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = (operator: Operator): void => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleBack('statistics')}>
        <View style={styles.back_btn}>
          <Image source={require('../../assets/image/icons/back_path.png')} />
          <Text style={{color: 'rgba(193, 91, 255, 1)', fontSize: 16}}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>Ac</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleOperatorInput('/')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleOperatorInput('*')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              ×
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleOperatorInput('-')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              −
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.zeroButton]}
            onPress={() => handleNumberInput(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => handleOperatorInput('+')}>
            <Text style={[styles.buttonText, styles.operatorButtonText]}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    minHeight: '100%',
    minWidth: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 50,
  },
  displayContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: -130,
  },
  displayText: {
    fontSize: 48,
    color: '#333',
  },
  buttonContainer: {
    minWidth: '80%',
    maxHeight: '60%',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    minWidth: '20%',
    borderRadius: 16,
    borderWidth: 2,
    minHeight: '10%',
  },
  buttonText: {
    fontSize: 34,
    color: 'rgba(193, 91, 255, 1)',
  },
  zeroButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    minWidth: '46%',
    borderRadius: 16,
    borderWidth: 2,
    minHeight: '10%',
  },
  // zeroButtonText: {
  //   marginLeft: 10,
  // },
  operatorButton: {
    backgroundColor: 'rgba(173, 226, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20%',
    borderRadius: 16,
    minHeight: '10%',
  },
  operatorButtonText: {
    color: 'rgba(193, 91, 255, 1)',
  },
  equalButton: {
    backgroundColor: 'rgba(173, 226, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20%',
    borderRadius: 16,
    elevation: 10,
  },
  equalButtonText: {
    fontSize: 32,
    color: 'rgba(193, 91, 255, 1)',
  },
  clearButton: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    elevation: 3,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: 'rgba(193, 91, 255, 1)',
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 15,
    marginTop: 30,
  },
});
