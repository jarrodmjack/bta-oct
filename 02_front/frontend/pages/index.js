import Header from '../components/Navbar'
import User from '../components/User'
import UserListContainer from '../components/UserListContainer'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      users: data
    }
  }
}

const ListPage = ({ users }) => {
  console.log(users)
  return (
    <div>
      <Header />
      <UserListContainer users={users} />
    </div>
  )
}
export default ListPage
