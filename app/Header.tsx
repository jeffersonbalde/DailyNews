import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'
import Image from 'next/image'
import newsIcon from '../public/logo.svg'

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-10 items-center'>
            <Bars3BottomLeftIcon className='h-8 w-8 cursor-pointer' />
            <Link href='/' prefetch={false} className='flex flex-row justify-center items-center gap-4'>
                <Image 
                    src={newsIcon}
                    alt='DG News'
                />
                <h1 className='font-semibold text-4xl text-center text-[#FF5722]'>
                    DG{" "}
                    <span className='underline decoration-6
                    decoration-orange-400'>
                    </span>{" "}
                    News
                </h1>
            </Link>

            <div className='flex items-center justify-end space-x-2'>
                {/* DarkModeButton */}
                <DarkModeButton/>

                <button className='hidden md:inline bg-slate-900 text-white
                px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                    Subscribe Now
                </button>
            </div>
        </div>

        <NavLinks />

        <SearchBox />
    </header>
  )
}

export default Header