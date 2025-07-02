import type { Brand } from "@/types";
import Link from "next/link";

type Props = {
  brand: Brand
}

export default function Brand({brand}: Props){
  return (
    <div className="group relative max-w-sm mx-auto rounded-sm overflow-hidden text-center transition duration-300">
      <Link href={`/brands/${brand.id}`} className="text-4xl">
        {brand.name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 h-0.5 bg-white"></span>
      </Link>
    </div>
  )
}