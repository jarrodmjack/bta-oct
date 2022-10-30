import React from 'react'
import Image from 'next/image'

const fourOhFour = () => {
    return (
        <div className='mx-auto my-32'>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-3xl font-bold'>Behold! The mozambique! The most legendary weapon to ever grace Apex Legends.</h1>
                <Image className='' src='/images/mozambique.jpg' width={700} height={350} />
                <h2>By the way... you aren't supposed to be here... umm... <span className='font-bold text-2xl'>404</span> or something</h2>
            </div>
        </div>
    )
}
export default fourOhFour