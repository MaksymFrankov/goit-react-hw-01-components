import css from "./Profile.module.css" 
const Profile = ({ avatar, username, tag, location, stats }) => {
    
return (
    
    <div className={css.profile}>
        <div className={css.description}>
    <img
    src= {avatar} alt="User avatar" className={css.avatar}
    />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.stats_item}>
                <span className={css.label}>Followers </span>
                <span className={css.quantity}>{stats.followers.toLocaleString()}</span>
            </li>
            <li className={css.stats_item}>
                <span className={css.label}>Views </span>
                <span className={css.quantity}>{stats.views.toLocaleString()}</span>
            </li>
            <li className={css.stats_item}>
                <span className={css.label}>Likes </span>
                <span className={css.quantity}>{stats.likes.toLocaleString()}</span>
            </li>
        </ul>    
        </div>
    );
}
export default Profile;