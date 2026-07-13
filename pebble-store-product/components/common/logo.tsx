import Link from "next/link";

 



export default function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className={`text-3xl font-bold text-black ${className}`}>
        My Store 2
    </Link>
  )
}