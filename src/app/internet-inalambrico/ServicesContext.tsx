'use client'
import { type Dispatch, type SetStateAction, createContext, useState } from 'react'
import availablesProvinces from '@/data/availablesProvinces.json'
import { type Service } from '@/types/services'

interface ServicesValue {
  availablesProvinces: Service[]
  currentProvince: Service | undefined
  setCurrentProvince: Dispatch<SetStateAction<Service | undefined>>
}

const initialValue = {
  availablesProvinces,
  currentProvince: undefined,
  setCurrentProvince: () => {},
}

export const ServicesContext = createContext<ServicesValue>(initialValue)

interface Props {
  children: React.ReactNode
}

export function ServicesProvider({ children }: Props) {
  const [currentProvince, setCurrentProvince] = useState<Service | undefined>(undefined)
  return (
    <ServicesContext.Provider
      value={{
        availablesProvinces,
        currentProvince,
        setCurrentProvince,
      }}
    >
      {children}
    </ServicesContext.Provider>
  )
}
