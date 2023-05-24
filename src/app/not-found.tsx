import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <title>404 Página no encontrada | NetSE</title> {/* No support for metadata in not-found.tsx yet */}
      <div className="flex h-[calc(100vh-68px-30px)] w-full flex-col items-center gap-4 pt-32">
        <h2 className="text-4xl">
          <span className="font-bold">404</span>
          <span> - Página no encontrada</span>
        </h2>
        <p className="text-lg">Lo sentimos, pero la página que busca no fue encontrada.</p>
        <button className="mx-auto w-fit rounded-md bg-primary/80 px-8 py-2 hover:bg-primary/90 hover:shadow-lg">
          <Link href="/">Ir al inicio</Link>
        </button>
      </div>
    </>
  )
}
