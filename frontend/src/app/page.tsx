"use client";
import { useAppSelector } from "@/lib/hooks";
import Brand from "@/components/Brand";


export default function Page() {
  const brands = useAppSelector(state=>state.brands)
  
  return (  
    <div className="flex grow items-center justify-center p-8 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 place-items-center">
        {brands.map(
          (brand) => <Brand key={brand.id} brand={brand}/>
        )}
      </div>
    </div>
  )
}
