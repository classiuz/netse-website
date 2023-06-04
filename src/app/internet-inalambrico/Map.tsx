'use client'
import React, { useContext } from 'react'
import clsx from 'clsx'
import provinces from '@/data/provinces'
import { ServicesContext } from './ServicesContext'

export default function Map() {
  const { availablesProvinces, currentProvince, setCurrentProvince } = useContext(ServicesContext)

  const handleOnClick = (province: string) => {
    setCurrentProvince(availablesProvinces.find(({ name }) => name === province))
  }

  return (
    <div className="w-7/12">
      <svg
        className="h-full w-full"
        baseProfile="tiny"
        fill="#e5e5e5"
        height="2201"
        stroke="#f78b41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        version="1.2"
        viewBox="0 0 1000 2201"
        width="1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {provinces.map((props) => {
          return (
            <path
              {...props}
              key={props.id}
              onClick={() => handleOnClick(props.name)}
              className={clsx('cursor-pointer hover:fill-primary/80', {
                'fill-primary/80': props.name === currentProvince?.name,
                'fill-primary/40': availablesProvinces.find(({ name }) => name === props.name),
              })}
            />
          )
        })}
      </svg>
    </div>
  )
}
