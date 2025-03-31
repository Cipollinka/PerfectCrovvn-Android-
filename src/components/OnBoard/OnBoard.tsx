import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {OnBoardOne} from './OnBoard01.tsx';
import {OnBoardTwo} from './OnBoard02.tsx';
import {useState} from 'react';
import {useUser} from '../user'; // Імпортуйте useUser
import {Uther} from '../uth/uth.tsx';
import {MainScreen} from '../MainScreen';

export const OnBoardGlob = () => {
  const {user} = useUser(); // Отримання користувача з контексту
  const [step, setStep] = useState(1);
  // const [isUserRegistered, setIsUserRegistered] = useState(
  //   user?.nickname || false,
  // );

  // Перевірка, чи користувач вже зареєстрований
  if (user?.nickname) {
    return <MainScreen />;
  }

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };
  // if (isUserRegistered) {
  //   return <MainScreen />;
  // }

  return (
    <View>
      <SafeAreaView style={styles.container}>
        {step === 1 && <OnBoardOne />}
        {step === 2 && <OnBoardTwo />}
        {step === 3 && <Uther />}
        {step < 3 && (
          <SafeAreaView style={styles.tabs}>
            <View style={step === 1 ? styles.tab_active : styles.tab} />
            <View style={step === 2 ? styles.tab_active : styles.tab} />
          </SafeAreaView>
        )}
        <SafeAreaView style={styles.footer}>
          {step < 3 && (
            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonNextText}>Next</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNextText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    gap: 10,
    alignItems: 'center',
  },
  tab: {
    width: 45,
    height: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  tab_active: {
    width: 60,
    height: 8,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
  },
  tabs: {
    flexDirection: 'row',
    gap: 10,
  },
});
