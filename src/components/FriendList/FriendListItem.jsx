import css from './Friends.module.css'
import { Status } from './Friends.styled';


function FriendListItem({ friends }) {
    return (
                <li className={css.item} /*key={friends.id}*/>
                    <Status className={css.status} status={friends.isOnline}></Status>
                    <img className={css.avatar} src={friends.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friends.name }</p>
                </li>
            )
            }
export default FriendListItem;