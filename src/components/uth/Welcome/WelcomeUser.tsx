import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MainScreen} from '../../MainScreen';

interface WelcomeUserProps {
  input: string;
  currency?: string;
}

export const WelcomeUser: React.FC<WelcomeUserProps> = ({input, currency}) => {
  const [mainScreen, setMainScreen] = useState('glob');

  const handleScreen = (screen: string) => {
    setMainScreen(screen);
  };
  if (mainScreen === 'main') {
    return <MainScreen input={input} currency={currency} />;
  }
  console.log('mainScreen', mainScreen);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <SafeAreaView style={styles.text_content}>
          <Text style={{color: 'rgba(255, 255, 255, 0.25)', fontSize: 18}}>
            That's a beautiful name!
          </Text>
          <Text style={styles.name_text}>{input}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.go}>
          <Text style={{color: '#FFFFFF', fontSize: 25}}>
            Start using our app
          </Text>
          <Image source={require('../../../assets/image/icons/arrow.png')} />
        </SafeAreaView>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleScreen('main')}>
        <Text style={{color: 'black', fontSize: 18}}>Lets go!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 150,
  },
  content: {
    gap: 150,
  },
  go: {
    alignItems: 'center',
  },
  text_content: {
    alignItems: 'center',
    gap: 20,
  },
  name_text: {
    color: 'white',
    fontSize: 40,
  },
  button: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    marginBottom: -150,
  },
});
