import Link from "next/link";

export default function SocialMediaTabs() {
    return (
        <div>
            <div className="flex items-center justify-center text-4xl font-extralight gap-x-10 bg-red-500">
                <div>
                    <Link href="/projects">Github</Link>
                </div>
                <div>
                    <Link href="/about">LinkedIn</Link>
                </div>
                <div>
                    <Link href="/contact">Twitter</Link>
                </div>
            </div>
        </div>
    )
}