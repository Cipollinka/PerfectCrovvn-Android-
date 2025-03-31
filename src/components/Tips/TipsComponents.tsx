import {View} from 'react-native';
import {CardOne} from './TipsCards/Card01.tsx';
import {CardTwo} from './TipsCards/Card02.tsx';
import {CardThree} from './TipsCards/Card03.tsx';

interface TipsProps {
  setPageCards?: (page: string) => void;
}

export const Tips = ({setPageCards}: TipsProps) => {
  return (
    <View style={{alignItems: 'center', marginTop: 15, gap: 10}}>
      <CardOne setPageCard={() => setPageCards && setPageCards('pageOne')} />
      <CardTwo setPageCard={() => setPageCards && setPageCards('pageTwo')} />
      <CardThree
        setPageCard={() => setPageCards && setPageCards('pageThree')}
      />
    </View>
  );
};
