import {SafeAreaView, ScrollView, View} from 'react-native';
import {NewsCardOne} from './NewsCard/NewsCardOne.tsx';
import {NewsCardTwo} from './NewsCard/NewsCardTwo.tsx';
import {NewsCardThree} from './NewsCard/NewsCardThree.tsx';
import {NewsCardFour} from './NewsCard/NewsCardFour.tsx';

interface NewsProps {
  setNextPage?: (next: string) => void;
}

export const News = ({setNextPage}: NewsProps) => {
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{gap: 30}}>
          <NewsCardOne setNextPage={setNextPage} />
          <NewsCardTwo setNextPage={setNextPage} />
          <NewsCardThree setNextPage={setNextPage} />
          <NewsCardFour setNextPage={setNextPage} />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
