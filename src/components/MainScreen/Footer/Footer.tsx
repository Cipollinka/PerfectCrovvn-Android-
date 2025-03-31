import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface FooterMenuProps {
  setActiveScreen: (screen: string) => void;
  activeScreen: string;
}

export const FooterMenu: React.FC<FooterMenuProps> = ({
  setActiveScreen,
  activeScreen,
}) => {
  return (
    <View style={styles.footer_container}>
      <TouchableOpacity onPress={() => setActiveScreen('Statistics')}>
        <Image
          source={
            activeScreen === 'Statistics'
              ? require('../../../assets/image/icons/statistics_active.png')
              : require('../../../assets/image/statistics.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveScreen('Home')}>
        <Image
          source={
            activeScreen === 'Home'
              ? require('../../../assets/image/icons/home_active.png')
              : require('../../../assets/image/home.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveScreen('Settings')}>
        <Image
          source={
            activeScreen === 'Settings'
              ? require('../../../assets/image/icons/settings_active.png')
              : require('../../../assets/image/settings.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer_container: {
    flexDirection: 'row',
    gap: 100,
  },
});
