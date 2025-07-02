import { Brand, Brands } from "@/types"

const baseUrl = 'http://localhost:8000/brands'

const getAll = async (): Promise<Brands> => {
    const response = await fetch(baseUrl)
    if (!response.ok) throw new Error('error')
    return response.json()
}

const getBrand = async (brandId: string): Promise<Brand> => {
  const response = await fetch(`${baseUrl}/${brandId}`)
  if (!response.ok) throw new Error('error')
  return response.json()
}

export const brandService = {
  getAll,
  getBrand
} 