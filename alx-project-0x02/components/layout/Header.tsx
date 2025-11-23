import Link from "next/link"

const Header: React.FC = () => {
    return(
        <header>
            <h1>
                HEADER PAGE
            </h1>
            <nav>
                <Link href="/home">HOME</Link><br></br>
                <Link href="/about">ABOUT</Link><br></br>
                <Link href="/posts">POSTS</Link>
                <a><li>sign in</li></a>
                <a><li>type of accommodation</li></a>
            </nav>
        </header>
    )
}

export default Header