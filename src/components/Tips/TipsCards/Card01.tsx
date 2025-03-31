import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface CardOneProps {
  setPageCard?: ((page: any) => void) | undefined;
}

export const CardOne = ({setPageCard}: CardOneProps) => {
  return (
    <View>
      <TouchableOpacity onPress={setPageCard}>
        <ImageBackground
          style={{
            minWidth: '75%',
            height: 90,
            overflow: 'hidden',
            borderRadius: 24,
            paddingTop: 10,
            paddingLeft: 10,
          }}
          source={require('../../../assets/image/cardOne.png')}>
            <View style={{width: '120%', height: '120%', position: 'absolute', backgroundColor:'#00000050'}}/>
          <SafeAreaView>
            <Text style={styles.card_text_block}>
              1. Do not step on the gas
            </Text>
            <Text style={styles.card_text_block}>
              2. Cook in the multicooker
            </Text>
            <Text style={styles.card_text_block}>
              3. Create your own rental income
            </Text>
          </SafeAreaView>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card_text_block: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    shadowColor: 'black', 
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 1}
  },
});
