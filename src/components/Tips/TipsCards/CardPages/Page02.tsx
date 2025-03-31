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


export const PageTwo = () => {
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
        <Text style={styles.titleText}>Tips</Text>
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
              source={require('../../../../assets/image/icons/card_tips_two.png')}
            />
            <Text style={styles.tipText}>Tips 1</Text>
          </View>

          <Text style={styles.tipTitle}>
            Best tips to save your money, and earn more
          </Text>

          <Text style={styles.tipParagraph}>
            1.Shop for groceries mid-week “Mid-week sales usually start, and if
            you have a prepared grocery list, you won't buy impulsively,” says
            debt relief lawyer Leslie Thayne of Melville, N.Y. Write down how
            much you'll spend before you go to the store - that way you'll avoid
            going over budget. “This greatly reduces the possibility of impulse
            buys and adds to your retirement savings,” she says.
          </Text>

          <Text style={styles.tipParagraph}>
            2.Cherish a healthy relationship in your marriage Divorce is
            expensive. “Marriage is a long-term commitment that starts with the
            words 'I agree.' Once you say, 'I don't agree,' not only will your
            marriage dissolve, but your equity and retirement savings will be
            seriously diminished,” says Kevin Smith, founder of Smith, Mayer &
            Liddle.
          </Text>

          <Text style={styles.tipParagraph}>
            3.Don't wallow in your addiction If you have a destructive habit
            that you can't beat, match it with your savings. For example, you
            are trying to quit smoking. Assuming cigarettes cost $7 a pack, “the
            average smoker can spend $2,555 a year on cigarettes. Assuming a
            savings rate of 8% per year, putting the same amount aside for
            retirement over 30 years would turn into $289,439,” Smith says.
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
    width: 230,
    textAlign: 'center',
    marginVertical: 20,
  },
  tipParagraph: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    textAlign: 'center',
    width: '83%',
    marginBottom: 20,
  },
});
