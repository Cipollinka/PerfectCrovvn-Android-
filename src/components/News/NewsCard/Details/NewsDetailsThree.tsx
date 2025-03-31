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

export const NewsDetailsThree = () => {
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
              source={require('../../../../assets/image/imageThree_news.png')}
            />
          </View>

          <Text style={styles.tipTitle}>
            U.S. bans imports of aluminum, copper and nickel from Russia
          </Text>
          <Text style={styles.tipParagraph}>
            The US Treasury Department has banned imports of aluminum, copper
            and nickel of Russian origin into the country. The restrictions
            apply to metals that have been produced since April 13. In addition,
            the agency banned their acceptance by global metal exchanges, the UK
            also joined these measures
          </Text>
          <Text style={styles.tipParagraph}>
            The US Department of Finance banned the importation into the country
            of aluminum, copper and nickel “of Russian origin”, the
            corresponding decision of the Office of Foreign Assets Control
            (OFAC) published on the website of the agency.
          </Text>
          <Text style={styles.tipParagraph}>
            “Importation of aluminum, copper and nickel of Russian origin into
            the territory of the United States, including for admission to the
            foreign trade zone located on the territory of the United States, is
            prohibited, except as provided by law, or the issuance of a license
            or other authorization OFAC”, - stated in the document.
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
