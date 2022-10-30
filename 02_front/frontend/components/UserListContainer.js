import User from './User'
import Link from 'next/link'

const UserListContainer = ({ users }) => {
    return (
        <div className="container mx-auto mt-20">
            <ul className='w-3/4 mx-auto flex flex-col gap-8'>
                {users.map(user => (
                    <Link key={user.id} href={`/${user.id}`}>
                        <User user={user} />
                    </Link>
                ))}
            </ul>
        </div>
    )
}
export default UserListContainer