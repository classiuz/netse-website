import Image from 'next/image'
import Header from '@/components/header/Header'
import Button from '@/components/Button'
import Article from '@/components/Article'
import Card, { Title, SubTitle, Content } from '@/components/Card'

export default function Home() {
  return (
    <main className="by-20">
      <Header />
      <section className="flex h-full flex-col">
        <Article>
          <Card className="w-5/12">
            <SubTitle className="ml-4">Conectividad donde quiera que estés</SubTitle>
            <Title className="mb-6">Servicio de conectividad satelital</Title>
            <Content className="ml-6 w-3/4">
              Por medio de antenas VSAT en banda KU con cobertura en toda la República Argentina
            </Content>
            <Button to="conectividad-satelital" className="ml-12 mt-6">
              Más información
            </Button>
          </Card>
          <div className="relative w-7/12">
            <Image
              src="/background-satellite.webp"
              className="rounded-2xl"
              width={1342}
              height={740}
              alt="Imagen demostrativa de fondo"
            />
            <Image
              src="/image-1.webp"
              className="absolute -bottom-20 -right-20"
              width={350}
              height={479}
              alt="Imagen demostrativa Antena"
            />
          </div>
        </Article>

        <Article fullWidth className="vertical-background">
          <div className="mx-auto flex h-full w-11/12 items-center justify-between overflow-hidden">
            <div className="relative mt-20 flex w-1/2 justify-center">
              <Image
                src="/cloud.png"
                className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 scale-90 opacity-50"
                width={8000}
                height={3552}
                alt="Imagen decorativa nube"
              />
              <Image src="/image-2.webp" className="z-20" width={389} height={864} alt="Imagen demostrativa dos" />
            </div>
            <Card className="w-1/2">
              <SubTitle className="ml-12">Sistema a medida para empresas</SubTitle>
              <Title className="mb-6">Conectividad Empresas</Title>
              <Content className="ml-6 w-3/4">Conexión corporativa con soluciones de redes para cada empresa.</Content>
            </Card>
          </div>
        </Article>

        <Article fullWidth className="bg-surface">
          <Card className="mx-auto w-2/3 gap-6 text-center">
            <Title>#Vivamos la revolución de las telecomunicaciones</Title>
            <Content className="mx-auto w-2/3">
              Desde NetSE buscamos acotar la brecha comunicacional y ser parte de esta revolución tecnológica, sabiendo que una
              sociedad conectada evoluciona.
            </Content>
          </Card>
        </Article>

        <span className="h-10 w-full bg-red-400" />

        <Article>
          <Card className="w-1/2">
            <SubTitle className="ml-4">Servicio de Internet vía Fibra Óptica</SubTitle>
            <Title className="mb-6">NetSE Fiber</Title>
            <Content className="ml-6 w-1/2">Internet banda ancha hogar y empresa según cobertura geográfica.</Content>
            <Button to="internet-fibra-optica" className="ml-12 mt-6">
              Conocer más
            </Button>
          </Card>
          <div className="w-1/2">
            <Image
              src="/background-ftth.webp"
              className="rounded-2xl"
              width={1342}
              height={740}
              alt="Imagen demostrativa de fondo FTTH"
            />
          </div>
        </Article>
        <Article>
          <div className="w-1/2">
            <Image src="/image-wireless.webp" className="-mt-40" width={394} height={647} alt="Imagen demostrativa Wireless" />
          </div>
          <Card className="w-1/2 items-center text-center">
            <SubTitle>Servicio de Internet Inalámbrico</SubTitle>
            <Title className="mb-6">NetSE Wireless</Title>
            <Content className="w-1/2">Servicio de internet banda ancha según cobertura geográfica.</Content>
            <Button to="internet-inalambrico" className="mt-6">
              Conocer más
            </Button>
          </Card>
        </Article>
      </section>
    </main>
  )
}
