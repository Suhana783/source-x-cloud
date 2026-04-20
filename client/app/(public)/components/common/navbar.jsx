import Link from "next/link";

export default function Navbar () {

    return (

        <nav className="flex items-center justify-between px-16 py-4">
        {/* {LOGO} */}

        <div>
            <h1 className="font-bold text-xl">SourceXCloud</h1>
        </div>

        <div className="flex gap-6">
            
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>

        </div>
        </nav>
    )
}