import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav id='nav'>
            <div className='logo'>
                <Image className='x' src='/unnamed.jpg' width={200} height={80} />
            </div>
            <div className="links">
            <Link href ='/'>Home</Link>
            <Link href ='/about'>About</Link>
            <Link href ='/ninjas'>Ninjas List</Link>
            </div>
        </nav>


     );
}
 
export default Navbar;