import Card from './Card'

export const metadata = {
  title: 'Conectividad Satelital | NetSE',
  description: 'Description - Conectividad Satelital',
}

export default function ConectividadSatelital() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-4xl font-bold text-neutral-700 lg:text-left">Internet Satelital</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card
          svg={
            <span className="h-16 w-16">
              <svg className="h-full w-full fill-white" data-bbox="20 20 160 160" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"></path>
                <path d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"></path>
              </svg>
            </span>
          }
          text="Máxima velocidad en sitios remotos"
        />
        <Card
          svg={
            <svg className="h-full w-full fill-white" data-bbox="20 20 160 160" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 20c-44.118 0-80 35.882-80 80s35.882 80 80 80 80-35.882 80-80h-80V20z"></path>
            </svg>
          }
          text="Tráfico ilimitado"
        />
        <Card
          svg={
            <svg className="h-full w-full fill-white" data-bbox="38.5 20 123 160" viewBox="38.5 20 123 160" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
            
              ></path>
              <path
                d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
            
              ></path>
            </svg>
          }
          text="Rápido despliegue con soporte 24hs los 265 días del año."
        />
      </div>
    </main>
  )
}
