export default function Loading() {
  return (
    <main className="mx-auto mt-24 flex min-h-[calc(100vh-80px)] justify-center lg:mt-48">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-black/60 border-r-transparent">
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Cargando...
        </span>
      </div>
    </main>
  )
}
