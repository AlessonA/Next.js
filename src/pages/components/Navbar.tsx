import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar