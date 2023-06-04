'use client'
import { useContext } from 'react'
import { ServicesContext } from './ServicesContext'
import clsx from 'clsx'

export default function Card() {
  const { currentProvince } = useContext(ServicesContext)
  return (
    <div
      className={clsx('mx-auto flex w-11/12 flex-col items-center rounded-md bg-surface px-8 py-6 shadow-md', {
        block: currentProvince,
        hidden: !currentProvince,
      })}
    >
      {currentProvince ? (
        <>
          <p className="text-lg text-neutral-700">{currentProvince.name}</p>

          {currentProvince.services.map(({ name, price, characteristics }) => {
            return (
              <ul key={name} className="flex flex-col gap-2 bg-primary/20">
                <li>{name}</li>
                <li>{price}</li>
                <li>{characteristics}</li>
              </ul>
            )
          })}
        </>
      ) : null}
    </div>
  )
}
