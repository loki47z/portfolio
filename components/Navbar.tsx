'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){
    const pathname = usePathname()
    const links = [
        {name: "Home", href: '/'},
        {name: 'Projects', href: '/projects'},
        {name: 'About Me', href: '/about'}
    ]
    return(
        <nav>
            <div className="title-name">Thom&apos;s Portfolio</div>
            <div className="links">
                {links.map((link)=>(
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`hover:text-blue-400 transition ${pathname === link.href ? 'active-link':''}`}
                    >{link.name}</Link>
                ))}
            </div>
        </nav>
    )
}