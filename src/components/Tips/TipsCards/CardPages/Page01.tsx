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

export const PageOne = () => {
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
              source={require('../../../../assets/image/icons/card_tips_one.png')}
            />
            <Text style={styles.tipText}>Tips 2</Text>
          </View>

          <Text style={styles.tipTitle}>
            Best tips to save your money, and earn more
          </Text>

          <Text style={styles.tipParagraph}>
            1. Keep your foot on the gas “Tests conducted by Edmunds.com have
            shown that you can drive more miles on the same fuel reserve if you
            switch from an aggressive to a more relaxed driving method,” says
            Kara Reynolds, manager of Sum 180, an online financial planning
            service in Louisville, Kentucky. If the average American spends
            about $1,960 a year on fuel, that would be a savings of $686 a year.
            Overcome the desire to be the fastest rider on the road and put the
            money you save into a savings accoun
          </Text>

          <Text style={styles.tipParagraph}>
            2. Cook in a multicooker If you dine out too often because you're
            tired and don't want to cook at home in the evening, search online
            for recipes and find a couple minutes in the morning to load the
            ingredients into your multicooker. By the time you get back, you'll
            have dinner ready to go. By forgoing one $50-a-week restaurant meal
            and instead eating a home-cooked meal (costing $2 per person for a
            family of four), you'll save $2,184 a year, Reynolds says.
          </Text>

          <Text style={styles.tipParagraph}>
            3. Create rental income for yourself With websites like Airbnb and
            Craigslist at your disposal, it's much easier now than it used to be
            to rent out a room or part of your home. Consider converting your
            basement into a studio apartment and rent it out for $600 a month.
            That works out to $7,200 a year, says Carla Deering, CEO of Sum 180.
            Do you have land near a stable? Consider leasing it out as a pasture
            for horses. “Three horses at $150 a month is $4,500 a year,” says
            Carla.
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
