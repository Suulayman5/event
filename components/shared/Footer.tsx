import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
         <Link href='/' className='w-36'>
                <Image src='/assets/images/logo.svg' width={128} height={38} alt='logo'/>
        </Link>
        <p>2025 Evently, All rights reserved.</p>
        </div>
    </footer>
)
}

export default Footer