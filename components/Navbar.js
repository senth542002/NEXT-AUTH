import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
// import { useState, useEffect } from 'react'

export default function Navbar() {

    // const [loading, setLoading ] = useState(true)
    // const [session, setSession ] = useState(false)
    // useEffect(()=>{
    //     const securePage = async () => {
    //         const session = await getSession()
    //          console.log('Fetched session',session)
    //         if(!session) {
    //             setSession(false)
    //         } else {
    //             setSession(true)
    //         }
    //     }
    //     securePage()
    // },[])

    const { data: session, status } = useSession()
    const loading = status === 'loading'
    console.log('current session',session)

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
                { !loading && !session && (

                <li>
                <Link href='/api/auth/signIn'>
                    <a onClick={e => {
                        e.preventDefault()
                         signIn()
                    }}>Sign In</a>
                </Link>
                </li>

                )}

                {
                    session && (
                <li>        
                    <Link href='/api/auth/signOut'>
                        <a onClick={e => {
                            e.preventDefault()
                             signOut()
                        }}>Sign Out</a>
                    </Link>
                </li>
                    )
                }
            
            </ul>
        </nav>
    )
}

