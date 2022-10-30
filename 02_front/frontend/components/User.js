const User = ({user}) => {
    return (
        <li className="hover:border-l-8 hover:border-l-indigo-500 bg-base-300 p-10 hover:cursor-pointer">
            {user.name}
        </li>
    )
}
export default User