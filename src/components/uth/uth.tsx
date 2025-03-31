import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {WelcomeUser} from './Welcome/WelcomeUser.tsx';
import {useUser} from '../user';

export const Uther = () => {
  const [visibleUser, setVisibleUser] = useState('form');
  const [buttonColor, setButtonColor] = useState<string | null>(null);
  const [currency, saveCurrency] = useState('');
  const {saveUser, user} = useUser();
  const [inputValue, setInputValue] = useState(user?.nickname || '');

  console.log('name welcome', user);

  if (visibleUser === 'welcomeUser') {
    return <WelcomeUser input={inputValue} currency={currency} />;
  }

  const handleButtonColor = (background: string) => {
    setButtonColor(background);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const completeSignUp = async () => {
    if (!inputValue.trim()) {
      Alert.alert('Please enter a username');
      return;
    } else if (!currency) {
      Alert.alert('Please choose a currency');
      return;
    }

    if (!user) {
      return;
    }
    await saveUser({
      ...user,
      nickname: inputValue,
      currency: currency || '',
    });
    setVisibleUser('welcomeUser');
  };

  // const handleSubmit = () => {
  //   console.log('Name user: ', inputValue);
  // };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={{color: 'white', fontSize: 40}}>Hello!</Text>
        <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18}}>
          Can I get your name?
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.main}>
        <SafeAreaView style={styles.input_container}>
          <Text style={{color: 'rgba(255, 255, 255, 1)'}}>Your name</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder={'Name'}
            placeholderTextColor={'rgba(255, 255, 255, 0.25)'}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.button_container}>
          <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
            Choose a currency
          </Text>
          <SafeAreaView style={styles.button_block}>
            <TouchableOpacity
              style={
                buttonColor === 'buttonDol' ? styles.button_cash : styles.button
              }
              onPress={() => {
                saveCurrency('$');
                handleButtonColor('buttonDol');
              }}>
              <Text style={{color: 'white'}}>($)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                buttonColor === 'buttonEur' ? styles.button_cash : styles.button
              }
              onPress={() => {
                saveCurrency('€');
                handleButtonColor('buttonEur');
              }}>
              <Text style={{color: 'white'}}>(€)</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <TouchableOpacity style={styles.buttonNext} onPress={completeSignUp}>
        <Text style={styles.buttonNextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 100,
  },
  content: {
    alignItems: 'center',
    gap: 20,
  },
  input: {
    width: 300,
    borderRadius: 12,
    height: 40,
    backgroundColor: 'rgba(217, 217, 217, 0.25)',
    borderWidth: 2,
    borderColor: 'white',
    paddingLeft: 15,
    paddingRight: 20,
    color: 'white',
  },
  input_container: {
    gap: 10,
  },
  button: {
    width: 135,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(217, 217, 217, 0.15)',
  },
  button_cash: {
    width: 135,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 2,
    borderColor: 'white',
  },
  button_block: {
    flexDirection: 'row',
    gap: 30,
  },
  buttonNext: {
    width: 300,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNextText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button_container: {
    gap: 10,
  },
  main: {
    gap: 20,
  },
});
