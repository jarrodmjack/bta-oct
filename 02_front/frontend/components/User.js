const User = ({user}) => {
    return (
        <li className="hover:border-l-4 hover:border-l-indigo-500 bg-base-300">
            {user.name}
        </li>
    )
}

export default User