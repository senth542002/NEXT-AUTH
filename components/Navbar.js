import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

function Navbar() {
    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        <a>DashBoard</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/api/auth/signIn'>
                        <a onClick={e => {
                            e.preventDefault()
                            signIn()
                        }}>Sign In</a>
                    </Link>
                </li>
                <li>
                    <Link href='/api/auth/signOut'>
                        <a onClick={e => {
                            e.preventDefault()
                            signOut()
                        }}>Sign Out</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar