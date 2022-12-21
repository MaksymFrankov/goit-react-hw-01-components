import Profile from "./Profile";

function ProfileList({ users })
{
    return (
        <ul>
            {users.map(user => (
            <li key={user.username}>
                <Profile
                    avatar={user.avatar}
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    stats={user.stats}
                />
            </li>
        ))}
        </ul>
    )
}
export default ProfileList;