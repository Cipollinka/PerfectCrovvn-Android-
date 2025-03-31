import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {MainScreen} from '../../../MainScreen';

export const NewsDetailsTwo = () => {
  const [backButton, setBackButton] = useState('tipsOne');

  const handleBack = (exit: string) => {
    setBackButton(exit);
  };

  if (backButton === 'home') {
    return <MainScreen />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.titleText}>News</Text>
        <TouchableOpacity onPress={() => handleBack('home')}>
          <SafeAreaView style={styles.back_btn}>
            <Image
              source={require('../../../../assets/image/icons/back_path_tips.png')}
            />
            <Text style={styles.backText}>Back</Text>
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../../assets/image/imageTwo_news.png')}
            />
          </View>

          <Text style={styles.tipTitle}>
            Bank in U.S. to pay $7.45 million for 'egregious' violations of
            sanctions against Russia
          </Text>
          <Text style={styles.tipParagraph}>
            US bank State Street has agreed to pay $7.45 million for 38
            violations of sanctions against Russia, the US Treasury Department's
            Office of Foreign Assets Control (OFAC) said. The violations, worth
            about $1.27 million, were committed by State Street and its
            subsidiary Charles River Systems between 2016 and 2020 The American
            bank State Street agreed to pay $7.45 million for 38 violations of
            sanctions related to Ukraine and Russia. This was reported by the
            Office of Foreign Assets Control (OFAC) of the US Department of the
            Treasury.
          </Text>
          <Text style={styles.tipParagraph}>
            Thus Massachussetts State Street agreed to settle “potential civil
            liability” for 38 violations of sanctions imposed by OFAC, the
            agency said on its website.
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#000', // Фон для зручності перегляду
    gap: 20,
  },
  titleText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 15,
  },
  backText: {
    color: 'rgba(190, 133, 175, 1)',
  },
  scrollContent: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 320,
  },
  tipText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
    textAlign: 'right',
  },
  tipTitle: {
    color: 'rgba(190, 133, 175, 1)',
    fontSize: 18,
    width: 300,
    textAlign: 'left',
    marginVertical: 20,
  },
  tipParagraph: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    width: '83%',
    marginBottom: 30,
  },
});
