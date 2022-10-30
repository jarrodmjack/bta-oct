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
  return (
    <div>
      <UserListContainer users={users} />
    </div>
  )
}
export default ListPage
