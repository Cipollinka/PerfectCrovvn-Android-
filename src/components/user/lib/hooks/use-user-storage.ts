import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../types.ts';

const STORAGE_KEY = 'user';
const initialUserState: User = {
  avatar: '',
  nickname: '',
  isOnboarded: false,
  currency: '',
  totalIncome: '',
  totalExpense: '',
  total: '',
  income: '',
  incomeTarget: '',
  incomeGift: 0,
  expense: '',
  expenseTarget: '',
  expenseGift: 0,
  historyItems: [],
  history: [],
};

export const useUserStorage = () => {
  const [user, setUserState] = useState<User>(initialUserState);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadQuizState = async () => {
      try {
        setIsLoading(true);
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue) {
          setUserState(JSON.parse(jsonValue));
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load user state from AsyncStorage', error);
      }
    };

    loadQuizState();
  }, []);

  const saveUser = async (newState: User) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log('Saved user state to AsyncStorage', newState);
      setUserState(newState);
    } catch (error) {
      console.error('Failed to save user state to AsyncStorage', error);
    }
  };

  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setUserState(initialUserState);
    } catch (error) {
      console.error('Failed to clear user state from AsyncStorage', error);
    }
  };
  const clearUserProgress = async () => {
    if (!user) {
      return;
    }
    await saveUser({
      ...user,

      avatar: '',
      nickname: '',
      currency: '',
    });
  };

  return {
    user,
    isLoading,
    saveUser,
    clearUser,
    clearUserProgress,
  };
};
