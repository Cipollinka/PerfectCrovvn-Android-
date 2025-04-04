import React from 'react';
import {UserProvider} from '../components/Provider/UserProvider';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {OnBoardGlob} from '../components/OnBoard/OnBoard';

export default function WhiteMain() {
  return (
    <UserProvider>
      <StatusBar barStyle={'light-content'} />
      <View>
        <ImageBackground
          source={require('../assets/image/bg_image.png')}
          style={styles.bg_image}>
          <OnBoardGlob />
        </ImageBackground>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
