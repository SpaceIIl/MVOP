import type { NextPage} from 'next'
import Link from 'next/link'

const Button: NextPage = () => {
    return (
        <div className=''>
            <button>
                <p className='py-4 px-8 bg-orange !text-black'>Chci zjistit více</p>
            </button>
        </div>
    )
}

export default Button;