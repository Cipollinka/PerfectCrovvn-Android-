import {
  Alert,
  Image,
  Linking,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useUser} from '../../user';

export const Settings = () => {
  const [imageUri, setImageUri] = useState('');
  const {user, saveUser, clearUser} = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(user?.nickname || '');
  // Викликаємо хук useUser всередині компонента

  const clearUserData = async () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to reset all data?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes',
          onPress: async () => {
            try {
              // Очищення користувацьких даних через кастомний хук
              await clearUser();

              // Перевірка, чи дійсно дані були скинуті
              if (user) {
                Alert.alert('Data reset successfully!');
              } else {
                Alert.alert('Error: Data was not reset.');
              }
            } catch (e) {
              console.log('Error clearing data:', e);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };
  useEffect(() => {
    if (!isEditing) {
      setInputValue(user?.nickname || '');
    }
  }, [isEditing]);
  const pickImage = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (!uri) {
            return;
          }
          setImageUri(uri);
          saveUser({...user!, avatar: uri});
        }
      },
    );
  };
  const RenameUser = async () => {
    if (!user) {
      return;
    }
    await saveUser({
      ...user,
      nickname: inputValue,
    });
  };

  return (
    <View style={{marginBottom: 100}}>
      <SafeAreaView
        style={{
          width: '100%',
          maxWidth: 345,
          maxHeight: 766,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 24,
          }}>
          Settings
        </Text>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', marginLeft: 70}}>
            {!imageUri ? (
              <Image
                style={{
                  borderWidth: 4,
                  width: 120,
                  height: 120,
                  borderColor: 'rgba(193, 91, 255, 1)',
                  borderRadius: 120,
                }}
                source={require('../../../assets/image/icons/user_icons.png')}
              />
            ) : (
              <Image
                style={{
                  borderWidth: 4,
                  width: 120,
                  height: 120,
                  borderColor: 'rgba(193, 91, 255, 1)',
                  borderRadius: 120,
                }}
                source={{uri: imageUri}}
              />
            )}
            {/*<TextInput*/}
            {/*  style={{*/}
            {/*    marginTop: 15,*/}
            {/*    marginBottom: 15,*/}
            {/*    width: 250,*/}
            {/*    alignItems: 'center',*/}
            {/*    justifyContent: 'center',*/}
            {/*    height: 35,*/}
            {/*    borderRadius: 8,*/}
            {/*    paddingLeft: 15,*/}
            {/*    paddingRight: 15,*/}
            {/*    backgroundColor: 'rgba(193, 91, 255, 1)',*/}
            {/*  }}*/}
            {/*  placeholder={'Name'}*/}
            {/*/>*/}
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 24}}>
              {user?.nickname}
            </Text>
          </View>
          <SafeAreaView style={{flexDirection: 'row', gap: 5}}>
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Image
                source={require('../../../assets/image/icons/brush.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require('../../../assets/image/icons/add_photo.png')}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{gap: 25}}>
          <Text
            style={{
              color: 'rgba(193, 91, 255, 1)',
              fontSize: 16,
              marginBottom: -15,
            }}>
            Support & About
          </Text>
          <View style={{gap: 15}}>
            <TouchableOpacity 
              onPress={() => Linking.openURL("https://www.termsfeed.com/live/567ea22b-4a9b-461b-9f36-e9403c0f07ee")}
              style={{
                width: 250,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35,
                borderRadius: 8,
                paddingLeft: 5,
                paddingRight: 5,
                flexDirection: 'row',
                backgroundColor: 'rgba(193, 91, 255, 1)',
              }}>
              <Image
                source={require('../../../assets/image/icons/clipboard-tick_one.png')}
              />
              <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 16}}>
                Terms of use
              </Text>
              <Image
                source={require('../../../assets/image/icons/next_btn.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.termsfeed.com/live/567ea22b-4a9b-461b-9f36-e9403c0f07ee")}
              style={{
                width: 250,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35,
                borderRadius: 8,
                paddingLeft: 5,
                paddingRight: 5,
                flexDirection: 'row',
                backgroundColor: 'rgba(193, 91, 255, 1)',
              }}>
              <Image
                source={require('../../../assets/image/icons/shield-tick.png')}
              />
              <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 16}}>
                Privacy policy
              </Text>
              <Image
                source={require('../../../assets/image/icons/next_btn.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.termsfeed.com/live/567ea22b-4a9b-461b-9f36-e9403c0f07ee")}
              style={{
                width: 250,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35,
                borderRadius: 8,
                paddingLeft: 5,
                paddingRight: 5,
                flexDirection: 'row',
                backgroundColor: 'rgba(193, 91, 255, 1)',
              }}>
              <Image
                source={require('../../../assets/image/icons/document-forward.png')}
              />
              <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 16}}>
                Support page
              </Text>
              <Image
                source={require('../../../assets/image/icons/next_btn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{gap: 10}}>
            <Text style={{color: 'rgba(193, 91, 255, 1)', fontSize: 16}}>
              Other
            </Text>
            <TouchableOpacity
              onPress={clearUserData}
              style={{
                width: 250,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 35,
                borderRadius: 8,
                paddingLeft: 5,
                paddingRight: 5,
                flexDirection: 'row',
                backgroundColor: 'rgba(193, 91, 255, 1)',
              }}>
              <Image
                source={require('../../../assets/image/icons/share.png')}
              />
              <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 16}}>
                Reset data
              </Text>
              <Image
                source={require('../../../assets/image/icons/next_btn.png')}
              />
            </TouchableOpacity>
          </View>
          <Modal
            transparent={true}
            visible={isEditing}
            animationType="fade"
            onRequestClose={() => setIsEditing(false)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0, 0.5)',
              }}>
              <View
                style={{
                  width: 300,
                  padding: 20,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    width: 250,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    borderRadius: 8,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderWidth: 1,
                    borderColor: 'rgba(193, 91, 255, 1)',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  }}
                  placeholder={'Enter new name'}
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <View style={{flexDirection: 'row', gap: 85}}>
                  <TouchableOpacity
                    onPress={RenameUser} // Закрити інпут після зміни
                    style={{
                      marginTop: 15,
                      alignItems: 'center',
                      backgroundColor: 'rgba(193, 91, 255, 1)',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: 'white'}}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsEditing(false)} // Закрити інпут після зміни
                    style={{
                      marginTop: 15,
                      alignItems: 'center',
                      backgroundColor: 'rgba(193, 91, 255, 1)',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 8,
                    }}>
                    <Text style={{color: 'white'}}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};
