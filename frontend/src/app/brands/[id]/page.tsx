'use client'
import { Faq } from "@/components/Faq"
import { getBrandSettingsById } from "@/lib/features/brands/brandsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function BrandFAQ() {
  const { id: brandId } = useParams<{id:string}>()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const brand = useAppSelector(
    (state) => state.brands.find(brand=>brand.id===brandId)
  )
  useEffect(() => {
    if (brandId) {
      dispatch(getBrandSettingsById(brandId))
        .catch(() => {
          router.replace('/404')
      });
    }
  }, [brandId, dispatch, router]);

  if (!brand?.settings) {
    return <div className="flex grow items-center justify-center text-xl">Cargando preguntas frecuentes...</div>
  }
  
  return (
    <div className="flex flex-col grow items-center mx-4 py-4 lg:px-16 lg:py-8 lg:pb-6">
      <Faq brand={brand}></Faq>
    </div>
)
}