import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contacto | NetSE',
  description: 'Description - Contacto',
}

export default function Contact() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
      <p className="text-center text-4xl font-bold text-neutral-700 lg:text-left">Contáctanos</p>
      <ContactForm />
    </main>
  )
}
