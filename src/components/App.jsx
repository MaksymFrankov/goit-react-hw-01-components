
import ProfileList from "./Profile/ProfileList.jsx";
import user from "./Profile/user.json";

import StatisticList from "./Statistics/StatisticList.jsx";
import data from "./Statistics/data.json";

import FriendList from "./FriendList/FriendList.jsx"
import friends from "./FriendList/friends.json"

import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import items from "./TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <ProfileList users={user} />
      <StatisticList stats={data} title='Upload Stats' />
      <StatisticList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items = {items } />
    </div>
  );
};
