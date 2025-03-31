import {Alert} from 'react-native';
import {useUser} from '../user';

// Функція для очищення даних з localStorage
// Імпорт функції для очищення

export const clearUserData = async () => {
  const {clearUser, user} = useUser();

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
            if (!user) {
              Alert.alert('Дані скинуто успішно!');
            } else {
              Alert.alert('Помилка: Дані не були скинуті.');
            }
          } catch (e) {
            console.log('Помилка очищення даних:', e);
          }
        },
      },
    ],
    {cancelable: true},
  );
};
