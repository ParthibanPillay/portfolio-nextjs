import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-10 border m-10 bg-[#1b1818] text-white rounded-3xl">
            <div className="text-4xl font-light">
                parthiban <span className="text-4xl font-bold">pillay</span>
            </div>
            <div className="flex items-center justify-center text-4xl font-extralight gap-x-10">
                <div>
                    <Link href="/projects">projects</Link>
                </div>
                <div>
                    <Link href="/about">about</Link>
                </div>
                <div>
                    <Link href="/contact">contact</Link>
                </div>
            </div>
        </div>
    )
};