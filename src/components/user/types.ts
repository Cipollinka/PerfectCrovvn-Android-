export interface User {
  avatar: string;
  nickname: string;
  isOnboarded: boolean;
  currency: string;
  totalIncome: string;
  totalExpense: string;
  total: string;
  income: string;
  incomeTarget: string;
  incomeGift: number;
  expense: string;
  expenseTarget: string;
  expenseGift: number;
  historyItems: [];
  history: [];
}
