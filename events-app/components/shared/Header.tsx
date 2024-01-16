import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='wrapper'>
      <div className='wrapper'>
        <Link href='/' className='w-36'>
          <Image src='/assets/images/logo.svg' width={128} height={38} alt='Event Logo'></Image>
        </Link>

        <div className='flex w-32 justify-end gap-3'>

        </div>
      </div>
    </header>
  )
}

export default Header