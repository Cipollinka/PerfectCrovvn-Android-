import React from 'react';
import {UserProvider} from './src/components/Provider/UserProvider.tsx';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {OnBoardGlob} from './src/components/OnBoard/OnBoard.tsx';

function App(): React.JSX.Element {
  return (
    <UserProvider>
      <StatusBar barStyle={'light-content'} />
      <View>
        <ImageBackground
          source={require('./src/assets/image/bg_image.png')}
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

export default App;
