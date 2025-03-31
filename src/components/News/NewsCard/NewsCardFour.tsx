import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface NewsCardFourProps {
  setNextPage?: ((next: string) => void) | undefined;
}

export const NewsCardFour = ({setNextPage}: NewsCardFourProps) => {
  return (
    <View
      style={{
        width: 320,
        height: 230,
      }}>
      <TouchableOpacity onPress={() => setNextPage && setNextPage('cardFour')}>
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
          <Image
            style={{width: 300, borderRadius: 12}}
            source={require('../../../assets/image/imageFor_news.png')}
          />
          <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 20}}>
              The U.S. revealed the fate of money raised by Biden's
            </Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: 12}}>
              This is the final stage in the transition from paper bills to
              polymer bills, which began in 2016 and is driven primarily by
              security concerns. Previously, £5, £10 and £20 bills have already
              been replaced with the new bills.
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
