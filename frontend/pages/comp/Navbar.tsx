import type { NextPage} from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
      <nav className='bg-black h-[100px] text-white'>
        <div className='w-[1080px] mx-auto pt-[38px] flex justify-between'>
          <div className='flex my-auto'>
            <Link className='bg-black' href="/"><h5>AboutBitcoin.cz</h5></Link>
          </div>
          <div className="my-auto flex">
            <Link className='bg-black mr-10' href="/howToBuy"><p>Jak Nakoupit</p></Link>
            <Link className='bg-black' href="/Review"><p>Recenze</p></Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar