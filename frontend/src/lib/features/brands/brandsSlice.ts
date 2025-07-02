import { createSlice } from "@reduxjs/toolkit";
import { brandService } from "@/app/services/brands";
import { Brands } from "@/types";
import type { AppDispatch, RootState } from "@/lib/store";


const initialState: Brands = []
const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands(state, action){
      return action.payload
    },
    setBrandSettings(state, action){
      const updatedBrand = action.payload
      return state.map(brand => brand.id === updatedBrand.id ? updatedBrand : brand)
    }
  }
})

export const { setBrands, setBrandSettings } = brandsSlice.actions
export default brandsSlice.reducer

export const initializeBrands = () => {
  return async (dispatch:AppDispatch) => {
    const brands = await brandService.getAll()
    dispatch(setBrands(brands))
  }
}

export const getBrandSettingsById = (brandId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { brands } = getState()
    const existing = brands.find(brand=>brand.id===brandId)

    if (existing && existing.settings) return
    try {
      const brand = await brandService.getBrand(brandId)
      dispatch(setBrandSettings(brand))
    } catch (err) {
      console.error(err)
      throw new Error('Error')
    }
  }
}