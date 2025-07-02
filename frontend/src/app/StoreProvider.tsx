'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { initializeBrands } from '@/lib/features/brands/brandsSlice'

export default function StoreProvider({children}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeBrands())
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}