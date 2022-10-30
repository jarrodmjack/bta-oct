import User from './User'

const UserListContainer = ({ users }) => {
    return (
        <div className="container mx-auto mt-20">
            <ul className='border w-3/4 mx-auto'>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
        </div>
    )
}

export default UserListContainer