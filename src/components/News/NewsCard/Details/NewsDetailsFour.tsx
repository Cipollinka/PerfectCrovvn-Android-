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

export const NewsDetailsFour = () => {
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
              source={require('../../../../assets/image/imageFor_news.png')}
            />
          </View>

          <Text style={styles.tipTitle}>
            The U.S. revealed the fate of money raised by Biden's campaign if he
            leaves
          </Text>
          <Text style={styles.tipParagraph}>
            U.S. President Joe Biden, in case of his withdrawal from the
            presidential race, will retain the right to dispose of the money
            collected during the election campaign. This is reported by the
            American newspaper Hill.
          </Text>
          <Text style={styles.tipParagraph}>
            “According to campaign finance experts, President Biden will have
            full control over the millions of dollars raised during his
            presidential campaign if he decides to withdraw from the race with
            former President Trump,” the publication said.
          </Text>
          <Text style={styles.tipParagraph}>
            Expert Steve Roberts told the newspaper that Biden, if he decides to
            leave the presidential race, will have the ability to “instruct his
            campaign treasurer on what to do with the remaining funds.”
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
