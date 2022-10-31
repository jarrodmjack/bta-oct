import displayImage from "../utils/displayImage"

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(user => {
        return {
            params: { userid: user.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.userid
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return {
        props: {
            user: data
        }
    }
}

const UserDescriptionPage = ({ user }) => {
    return (
        <div className="container mx-auto flex justify-around flex-wrap my-20">
            <div className="card w-96 bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={displayImage(user.id)} alt="character image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center gap-10">
                    <h2 className="card-title">{user.name}</h2>
                    <h2 className="font-bold">{user.company.name}</h2>
                    <p>"{user.company.catchPhrase}"</p>
                </div>
            </div>
            <div className="card w-96 bg-base-300 shadow-xl">
                <div className="card-body gap-10">
                    <h2 className="card-title">General Information:</h2>
                    <h2><span className="font-bold">Username:</span> {user.username}</h2>
                    <h2><span className="font-bold">Email:</span> {user.email}</h2>
                    <h2><span className="font-bold">Phone:</span> {user.phone}</h2>
                    <h2><span className="font-bold">Personal Site:</span> {user.website}</h2>
                </div>
            </div>
            <div className="card w-96 bg-base-300 shadow-xl">
                <div className="card-body gap-10">
                    <h2 className="card-title">Address Information:</h2>
                    <h2><span className="font-bold">Street:</span> {user.address.street}</h2>
                    <h2><span className="font-bold">Suite:</span> {user.address.suite}</h2>
                    <h2><span className="font-bold">City:</span> {user.address.city}</h2>
                    <h2><span className="font-bold">Zipcode:</span> {user.address.zipcode}</h2>
                </div>
            </div>
        </div>
    )
}
export default UserDescriptionPage