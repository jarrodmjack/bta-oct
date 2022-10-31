const User = ({user}) => {
    return (
        <li className="hover:border-l-8 hover:border-l-indigo-500 hover:border-r-8 hover:border-r-indigo-500 bg-base-300 p-10 hover:cursor-pointer ease-in-out duration-300 ">
            <p className="font-bold text-2xl text-center">{user.name}</p>
        </li>
    )
}
export default User