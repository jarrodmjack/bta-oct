import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar mx-auto bg-base-300">
            <div className='container mx-auto'>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl">User List</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="avatar w-24 hover:rounded-full hover:cursor-pointer">
                            <div className="rounded-full">
                                <img src="images/mirage.jpg" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar