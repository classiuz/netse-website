import { FaqsProvider } from './FaqsContext'
import SearchBar from './SearchBar'
import ControlMenu from './ControlMenu'
import FaqsContent from './FaqsContent'
import getAllFaqs from '@/utils/getAllFaqs'

export const metadata = {
  title: 'FAQs | NetSE',
  description: 'Description - FAQs',
}

export default async function FAQs() {
  const data = await getAllFaqs()

  return (
    <FaqsProvider data={data}>
      <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <h1 className="text-center text-4xl font-bold text-neutral-700 lg:text-left">Preguntas Frecuentes</h1>
          <SearchBar />
        </div>
        <div className="mx-auto flex w-11/12 flex-col gap-8">
          <ControlMenu />
        </div>
        <FaqsContent />
      </main>
    </FaqsProvider>
  )
}
