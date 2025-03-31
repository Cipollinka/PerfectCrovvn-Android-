import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const OnBoardOne = () => {
  return (
    <View>
      <SafeAreaView style={styles.content_block}>
        <Image source={require('../../assets/image/icons/coins_image.png')} />
        <SafeAreaView style={styles.text_container}>
          <Text style={styles.text_h1}>
            Calculate your income and expenses wisely
          </Text>
          <Text style={styles.text_h2}>
            Fill in your income and expenses right in the app, it'll be easier
            to keep track of it that way!
          </Text>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'center',
  // },
  content_block: {
    alignItems: 'center',
    gap: 20,
  },
  text_container: {
    width: '90%',
  },
  text_h1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  text_h2: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop:10,
    fontSize: 18,
  },
});
