import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface NewsCardTwoProps {
  setNextPage?: ((next: string) => void) | undefined;
}

export const NewsCardTwo = ({setNextPage}: NewsCardTwoProps) => {
  return (
    <View
      style={{
        width: 320,
        height: 230,
      }}>
      <TouchableOpacity onPress={() => setNextPage && setNextPage('cardTwo')}>
        <ImageBackground
          style={{
            width: '100%',
            height: 230,
            borderRadius: 12,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
          source={require('../../../assets/image/icons/bg_card_news.png')}>
          <Image style={{width: 300, borderRadius: 12}} source={require('../../../assets/image/imageTwo_news.png')} />
          <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 20}}>
              Bank in U.S. to pay $7.45 million
            </Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: 12}}>
              Bank in U.S. to pay $7.45 million for 'egregious' violations of
              sanctions against Russia
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
