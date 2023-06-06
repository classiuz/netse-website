import { Noto_Sans } from 'next/font/google'
import HeaderCard from './HeaderCard'

const notoSans = Noto_Sans({ weight: '900', preload: true, subsets: ['latin'] })

export default function Header() {
  return (
    <header className="flex h-[calc(100vh-100px)] w-full items-center px-2">
      <div className="md:gap-18 mx-auto flex w-full flex-col gap-12 md:w-8/12 lg:gap-24">
        <p className={`${notoSans.className} text-center text-6xl bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent lg:text-7xl`}>#Generando Vínculos</p>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:text-center xl:grid-cols-4">
          <HeaderCard iconName="book" text="Iniciamos nuestras actividades en 2016 en Argentina." />
          <HeaderCard iconName="wifi" text="Nos ocupamos de la conectividad y transmisión de datos en lugares remotos." />
          <HeaderCard
            iconName="work"
            text="Utilizamos plataformas y equipamiento tecnológico de última generación en cuanto a seguridad, capacidad y
              trasmisión de datos."
          />
          <HeaderCard iconName="tag" text="Nos enfocamos en las unidades de negocio Comercios y Empresas, Minería y Petróleo." />
        </ul>
      </div>
    </header>
  )
}
