import { Noto_Sans } from 'next/font/google'
import HeaderCard from './HeaderCard'

const notoSans = Noto_Sans({ weight: '900', preload: true, subsets: ['latin'] })

export default function Header() {
  const pathProps = {
    transform: 'translate(-40.149442,-58.224634)',
    d: 'm 92.330675,134.37263 c 10.451695,-4.16049 18.782665,-12.55177 24.826355,-22.03973 3.33508,-5.23572 6.06445,-10.85759 8.10657,-16.719789 2.15432,-6.184284 3.54992,-12.796357 2.62787,-19.279896 -0.46103,-3.241769 -1.50853,-6.417362 -3.2258,-9.205299 -1.71727,-2.787937 -4.1173,-5.17842 -7.00198,-6.727698 -2.62656,-1.410653 -5.61129,-2.103996 -8.59196,-2.170205 -2.98066,-0.06621 -5.95807,0.482682 -8.78112,1.441418 -5.646098,1.917472 -10.60846,5.416697 -15.306509,9.088677 -4.814654,3.763118 -9.545104,7.816697 -15.199812,10.13321 -3.489832,1.429648 -7.220463,2.148479 -10.877245,3.07085 -3.656782,0.922371 -7.330066,2.088708 -10.402485,4.27573 -2.457438,1.749263 -4.457694,4.116927 -5.855879,6.789754 -1.398184,2.672826 -2.199573,5.64514 -2.429162,8.652828 -0.459178,6.01539 1.372683,12.06897 4.485091,17.23701 4.682407,7.77496 12.303119,13.70403 20.950108,16.46166 8.646989,2.75764 18.243439,2.3482 26.675958,-1.00852 z',
  }

  return (
    <header className="mx-auto flex h-[calc(100vh-100px)] w-full items-center px-2 md:w-8/12">
      <div className="md:gap-18 flex flex-col gap-12 lg:gap-24">
        <p className={`${notoSans.className} text-center text-6xl text-neutral-700 lg:text-7xl`}>#Generando Vínculos</p>
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

      {/* <div className="relative w-full">
        <div className="absolute right-1/2 top-1/2 w-80 -translate-y-1/2 translate-x-1/2 transform">
          <svg viewBox="0 0 88.030846 78.975922">
            <path fill="#93c5fd" {...pathProps} />
          </svg>
          <svg viewBox="0 0 88.030846 78.975922">
            <path fill="#d4d4d4" {...pathProps} />
          </svg>
          <svg viewBox="0 0 88.030846 78.975922">
            <path fill="#fdba74" {...pathProps} />
          </svg>
        </div>
      </div> */}
    </header>
  )
}
