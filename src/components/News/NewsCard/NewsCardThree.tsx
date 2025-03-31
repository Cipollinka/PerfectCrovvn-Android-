import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface NewsCardThreeProps {
  setNextPage?: ((next: string) => void) | undefined;
}

export const NewsCardThree = ({setNextPage}: NewsCardThreeProps) => {
  return (
    <View style={{
      width: 320,
      height: 230,
    }}>
      <TouchableOpacity onPress={() => setNextPage && setNextPage('cardThree')}>
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
          <Image style={{width: 300, borderRadius: 12}}
            source={require('../../../assets/image/imageThree_news.png')}
          />
          <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 20}}>
              U.S. bans imports of materials from Russia
            </Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: 12}}>
              U.S. bans imports of aluminum, copper and nickel from Russia
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
