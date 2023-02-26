import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendsList/friends.json';
import transactions from './components/TransactionsHistory/transactions.json';

import { ProfileList } from './components/Profile/ProfileList';
import { StatisticsList } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/FriendsList/FriendList';
import { TransactionHistory } from 'components/TransactionsHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileList items={user} />
      <StatisticsList items={data} title={''} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
