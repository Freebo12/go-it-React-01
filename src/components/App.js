import user from './user.json';
import data from '../task2/data.json';
import friends from '../task3/friends.json';
import transactions from '../task4/transactions.json';

import { ProfileList } from './ProfileList';
import {} from './Profile.styled';
import { StatisticsList } from 'components/task2/StatisticsList';
import { FriendList } from 'components/task3/FriendList';
import { TransactionHistory } from 'components/task4/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileList items={user} />
      <StatisticsList items={data} tittle={''} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
