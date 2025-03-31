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


export const PageThree = () => {
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
              source={require('../../../../assets/image/icons/card_tips_three.png')}
            />
            <Text style={styles.tipText}>Tips 3</Text>
          </View>

          <Text style={styles.tipTitle}>
            Best tips to save your money, and earn more
          </Text>

          <Text style={styles.tipParagraph}>
            1.Disconnect the cable Some TV channels can be received through an
            antenna as well. “For people who want to cut out all unnecessary
            expenses, there is this way to save a decent amount of money - cut
            off cable or satellite feeds of channels. This will take the dollars
            saved and put them into long-term savings - like a Roth IRA or
            children's education savings,” says Jared Snyder, senior financial
            advisor with Exencial Wealth Advisors in Oklahoma City.
          </Text>

          <Text style={styles.tipParagraph}>
            2.Turn your hobby into extra income If you love animals, consider
            providing pet-sitting services using online services like DogVacay,
            doing random tasks through TaskRabbit or selling collectibles
            through eBay, says Deering. Easy side jobs that utilize your talents
            can also generate income, such as writing for blogs or babysitting,
            working with a charitable organization, selling your own crafts on
            Etsy or teaching classes at a sports complex, Thain says.
          </Text>

          <Text style={styles.tipParagraph}>
            3.Play with envelopes Buy a set of envelopes and sign each one for
            all your monthly spending and hobbies. Add another one for
            retirement savings, and then make a budget and put money in each
            one. Greg Parady, CEO of Parady Life & Annuity in Te Villages,
            Florida, told of a client who divided money among 23 envelopes,
            including restaurant expenses, car insurance, rainy days and golf
            for her husband. “They never made much money, but are comfortable in
            retirement and are now traveling the world together,” he said.
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
