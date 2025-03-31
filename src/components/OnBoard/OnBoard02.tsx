import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const OnBoardTwo = () => {
  return (
    <View>
      <SafeAreaView style={styles.content_block}>
        <Image source={require('../../assets/image/graphick.png')} />
        <SafeAreaView style={styles.text_container}>
          <Text style={styles.text_h1}>
            Keep an eye on your personal funds schedule!{' '}
          </Text>
          <Text style={styles.text_h2}>
            With the graph becoming more transparent and clear, it simplifies
            the process of tracking funds
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
    marginTop:10,
    textAlign: 'center',
    fontSize: 18,
  },
});
