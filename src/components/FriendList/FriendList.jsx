import css from './Friends.module.css'
// import { Status } from './Friends.styled';
import FriendListItem from './FriendListItem';
// import friends from "./friends.json"

function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(friends =>
                <FriendListItem key={friends.id} friends= {friends} />
            )
            }
    </ul>
    )


}
export default FriendList;