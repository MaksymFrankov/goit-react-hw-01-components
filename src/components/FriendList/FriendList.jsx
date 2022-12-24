import css from './Friends.module.css'
import { Status } from './Friends.styled';


function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(friends =>
                <li className="item" key={friends.id}>
                    <Status status={friends.isOnline}>{friends.isOnline}</Status>
                    <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
                    <p className="name">{friends.name }</p>
                </li>
            )
            }
    </ul>
    )


}
export default FriendList;