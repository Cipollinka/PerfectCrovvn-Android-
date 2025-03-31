import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface NewsCardOneProps {
  setNextPage?: (next: string) => void;
}

export const NewsCardOne = ({setNextPage}: NewsCardOneProps) => {
  return (
    <View
      style={{
        width: 320,
        height: 230,
      }}>
      <TouchableOpacity onPress={() => setNextPage && setNextPage('cardOne')}>
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
            source={require('../../../assets/image/imageOne_news.png')}
          />
          <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 20}}>
              How U.S. presidential candidates raise money
            </Text>
            <Text style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: 12}}>
              Joe Biden's withdrawal from the presidential race was preceded by
              months of intraparty squabbling caused by the uncertainty of many
              of the incumbent's supporters
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
