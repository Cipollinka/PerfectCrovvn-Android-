import {Image, StyleSheet, View} from 'react-native';

export const WelcomeInGame = () => {
  return (
    <View>
      <Image
        source={require('../../assets/image/welcom.png')}
        style={styles.bg_image}
        resizeMode="cover"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
