import Image from "next/image";
import Link from "next/link";

export default function Navigation(){
  return (
    <nav className="sticky top-0 left-0 h-20 flex flex-row items-center bg-black overflow-x-hidden bg-neutral-900 shadow-[0_4px_6px_-1px_rgba(0,0,0,1)]">
      <Link href="/" passHref className="font-bold px-2">
        <Image className="invert h-16 w-auto self-start" src='/images/Logo-Bloom.png' alt="Bloom Logo" width={400} height={100}/>
      </Link>
    </nav>
  )
}