import { ServicesProvider } from './ServicesContext'
import Icon from '@/components/Icon'
import Map from './Map'
import Card from './Card'

export const metadata = {
  title: 'Internet Inalámbrico | NetSE',
  description: 'Description - Internet Inalámbrico',
}

export default function InternetInalambrico() {
  return (
    <ServicesProvider>
      <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
        <div className="flex gap-9">
          <div className="sticky top-[calc(2rem+63px)] flex h-full w-5/12 flex-col gap-9">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-neutral-700 lg:text-left">Internet Inalámbrico</h1>
              <p className="text-lg text-neutral-600 lg:ml-2 lg:text-xl">Seleccione la provincia para ver los planes disponibles.</p>
              <div className="rounded-md bg-yellow-200/60 px-4 py-1 text-base text-yellow-500 select-none">
                <Icon
                  iconName="info"
                  iconSize={22}
                  iconPosition="right"
                  text="Las provincias con cobertura están marcadas en naranja."
                />
              </div>
            </div>
            <Card />
            <p className="text-sm text-neutral-400">
              * Los servicios que presta NetSE están sujetos a disponibilidad técnica y geográfica dentro del territorio Argentino.
              © 2023 ESCOM COMUNICACIONES S.R.L
            </p>
          </div>
          <Map />
        </div>
      </main>
    </ServicesProvider>
  )
}
