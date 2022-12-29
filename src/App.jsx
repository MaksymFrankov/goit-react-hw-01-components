
import ProfileList from "./components/Profile/ProfileList.jsx";
import user from "./components/Profile/user.json";

import StatisticList from "./components/Statistics/StatisticList.jsx";
import data from "./components/Statistics/data.json";

import FriendList from "./components/FriendList/FriendList.jsx"
import friends from "./components/FriendList/friends.json"

import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import items from "./components/TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div>
      <ProfileList users={user} />
      <StatisticList stats={data} title='Upload Stats' />
      <StatisticList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items = {items } />
    </div>
  );
};