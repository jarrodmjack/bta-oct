import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar mx-auto bg-base-300">
            <div className='container mx-auto'>
                <div className="flex-1">
                    <Link href='/'>
                        <span className="btn btn-ghost normal-case text-3xl">Lists and Descriptions</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="avatar w-24 hover:rounded-full hover:cursor-pointer">
                            <div className="rounded-full">
                                <a target='_blank' href='https://www.reddit.com/r/apexlegends/comments/ay44ko/when_youre_playing_solo_and_the_squad_head_in/'>
                                    <img src="images/apexlogo.jpg" />
                                </a>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar